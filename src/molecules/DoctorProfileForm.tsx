import { useContext, useEffect, useState } from "react";
import { useUserContext } from "@/context/UserProvider";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

export default function DoctorProfile() {
	const { user } = useUserContext();
	const [serviceName, setServiceName] = useState("");
	const [serviceDescription, setServiceDescription] = useState("");
	const [servicePrice, setServicePrice] = useState("");
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [doctorImageUrl, setDoctorImageUrl] = useState<string | null>(null);
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [showMessage, setShowMessage] = useState(false);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(e.target.files[0]);
		}
	};
	const uploadImage = async () => {
		if (!selectedImage) {
			console.log("No image selected");
			return;
		}

		const formData = new FormData();
		formData.append("image", selectedImage);

		try {
			const response = await fetch("/api/images/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error("Failed to upload image");
			}

			const data = await response.json();
			console.log("Image uploaded successfully:", data.imageUrl);

			// Update the doctor image URL after a successful upload
			setDoctorImageUrl(data.imageUrl);
		} catch (error) {
			console.error("Image upload error:", error);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setShowMessage(true);

		await uploadImage();

		console.log("Formulario enviado:", {
			name: serviceName,
			description: serviceDescription,
			price: servicePrice,
		});
	};

	return (
		<div className="h-screen bg-gradient-to-t from-kaitoke-green to-viking grid grid-cols-2 gap-4 p-8">
			<div className="flex flex-col justify-center">
				<h1 className="text-5xl font-semibold mb-6 font-handwrite text-white">
					Doctor Profile Page
				</h1>
				{user && (
					<div className="mt-6">
						<h2 className="text-2xl font-bold text-white">
							Información del usuario registrado:
						</h2>
						<p className="text-white">Nombre: {user.name}</p>
						<p className="text-white">Email: {user.email}</p>
						<p className="text-white">Licencia médica: {user.medicalLicense}</p>
					</div>
				)}
			</div>
			<div className="col-span-2 p-8 bg-white rounded-lg shadow-md">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="mt-4">
						<label htmlFor="doctorImage" className="block font-bold">
							Imagen del médico:
						</label>
						{doctorImageUrl || user?.image ? (
							<img
								src={doctorImageUrl ? doctorImageUrl : user?.image}
								alt={`Imagen del ${user?.name}`}
								className="w-32 h-32 rounded-full object-cover mb-4"
							/>
						) : (
							<div className="w-32 h-32 mb-4">
								<div className="h-full w-full rounded-full border border-kaitoke-green bg-kaitoke-green bg-opacity-20 flex items-center justify-center">
									<span className="text-gray-500"></span>
								</div>
							</div>
						)}
						<input
							type="file"
							id="doctorImage"
							accept="image/*"
							onChange={handleImageChange}
							className="w-full p-2 border border-egg rounded cursor-pointer mb-4"
						/>
						<button
							onClick={uploadImage}
							className="px-4 py-2 font-bold text-white bg-deep-sea rounded hover:bg-caribbean-green"
						>
							Cambiar imagen
						</button>
					</div>
					<label htmlFor="serviceName" className="block font-bold">
						Nombre del servicio:
					</label>
					<input
						type="text"
						id="serviceName"
						value={serviceName}
						onChange={(e) => setServiceName(e.target.value)}
						className="w-full p-2 border border-egg rounded"
					/>
					<label htmlFor="serviceDescription" className="block font-bold">
						Descripción del servicio:
					</label>
					<input
						type="text"
						id="serviceDescription"
						value={serviceDescription}
						onChange={(e) => setServiceDescription(e.target.value)}
						className="w-full p-2 border border-egg rounded"
					/>
					<label htmlFor="servicePrice" className="block font-bold">
						Precio del servicio:
					</label>
					<input
						type="text"
						id="servicePrice"
						value={servicePrice}
						onChange={(e) => setServicePrice(e.target.value)}
						className="w-full p-2 border border-egg rounded"
					/>
					<label htmlFor="appointmentDate" className="block font-bold">
						Fecha de la cita:
					</label>
					<DatePicker
						id="appointmentDate"
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={30}
						dateFormat="MMMM d, yyyy h:mm aa"
						className="w-full p-2 border border-egg rounded"
					/>
					<button
						type="submit"
						className="px-4 py-2 font-bold text-white bg-deep-sea rounded hover:bg-caribbean-green"
					>
						Crear servicio
					</button>
				</form>
				{showMessage && (
					<div className="fixed inset-0 z-10 flex items-center justify-center">
						<div
							className="absolute inset-0 bg-black opacity-50"
							onClick={() => setShowMessage(false)}
						></div>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="bg-deep-sea p-8 rounded shadow-md"
						>
							<h2 className="text-xl font-bold mb-4 text-white">Aviso</h2>
							<p className="mb-4 text-white">
								Al crear el servicio, acepta que el 10% de sus honorarios serán
								destinados al mantenimiento de la página.
							</p>
							<button
								onClick={() => setShowMessage(false)}
								className="px-4 py-2 font-bold text-white bg-caribbean-green rounded hover:bg-kaitoke-green"
							>
								Aceptar
							</button>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
}

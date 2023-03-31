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
	const [serviceCreated, setServiceCreated] = useState(false);

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setDoctorImageUrl(e.target?.result as string);
			};
			reader.readAsDataURL(e.target.files[0]);
			setSelectedImage(e.target.files[0]);

			// Sube la imagen seleccionada
			const formData = new FormData();
			formData.append("file", e.target.files[0]);
			formData.append("upload_preset", "ml_default");

			try {
				const response = await fetch(
					"https://api.cloudinary.com/v1_1/dpxtnowdp/image/upload",
					{
						method: "POST",
						body: formData,
					}
				);

				if (!response.ok) {
					throw new Error("Failed to upload image");
				}

				const data = await response.json();
				console.log("Image uploaded successfully:", data.secure_url);

				// Actualiza la URL de la imagen del médico después de una carga exitosa
				setDoctorImageUrl(data.secure_url);
			} catch (error) {
				console.error("Image upload error:", error);
			}
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setShowMessage(true);
	};

	const clearFields = () => {
		setServiceName("");
		setServiceDescription("");
		setServicePrice("");
		setSelectedDate(null);
	};

	const createService = async () => {
		setShowMessage(false);

		const serviceData = {
			name: serviceName,
			description: serviceDescription,
			price: servicePrice,
			date: selectedDate,
		};

		// Envía una solicitud POST para crear un nuevo servicio
		try {
			const response = await fetch("/api/services", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(serviceData),
			});

			if (!response.ok) {
				throw new Error("Failed to create service");
			}

			console.log("Service created successfully");
			clearFields();
			setServiceCreated(true);
		} catch (error) {
			console.error("Error creating service:", error);
		}

		console.log("Formulario enviado:", serviceData);
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
				<form id="service-form" onSubmit={handleSubmit} className="space-y-4">
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
					{serviceCreated && (
						<p className="mt-4 text-center text-green-600">
							El servicio ha sido creado exitosamen te
						</p>
					)}
				</form>
				{showMessage && (
					<div className="fixed inset-0 z-10 flex items-center justify-center">
						<div
							className="absolute inset-0 bg-black opacity-50"
							onClick={createService}
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

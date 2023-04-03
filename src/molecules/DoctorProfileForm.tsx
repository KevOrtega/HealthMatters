import { useContext, useEffect, useState } from "react";
import { useUserContext } from "@/context/UserProvider";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

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

	const clearFields = () => {
		setServiceName("");
		setServiceDescription("");
		setServicePrice("");
		setSelectedDate(null);
	};

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			if (!user) throw new Error("User not found");
			if (!e.target.files || !e.target.files[0]) return;
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

			const response = await axios.post(
				"https://api.cloudinary.com/v1_1/dpxtnowdp/image/upload",
				formData
			);

			console.log("Image uploaded successfully:", response.data.secure_url);

			await axios.put(process.env.doctors_url || "", {
				image: response.data.secure_url,
				doctorEmail: user.email,
			});

			// Actualiza la URL de la imagen del médico después de una carga exitosa
			setDoctorImageUrl(response.data.secure_url);
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error}`,
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setShowMessage(true);
		setServiceCreated(false);

		const serviceData = {
			name: serviceName,
			description: serviceDescription,
			price: servicePrice,
			image: doctorImageUrl || user?.image,
		};

		// Envía una solicitud POST para crear un nuevo servicio
		try {
			await axios.post(
				`https://healthmattersapi-production.up.railway.app/services`,
				serviceData
			);

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
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="mt-4">
						<label htmlFor="doctorImage" className="block font-bold">
							Imagen del médico:
						</label>
						<div className="relative">
							{doctorImageUrl || user?.image ? (
								<img
									src={doctorImageUrl ? doctorImageUrl : user?.image}
									alt={`Imagen del ${user?.name}`}
									className="w-32 h-32 rounded-full object-cover mb-4 cursor-pointer"
								/>
							) : (
								<div className="w-32 h-32 mb-4 cursor-pointer">
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
								className="absolute inset-0 opacity-0 cursor-pointer"
							/>
						</div>
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
							El servicio ha sido creado exitosamente
						</p>
					)}
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

import { useContext, useEffect, useState } from "react";
import { useUserContext } from "@/context/UserProvider";
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
	const [serviceCreationError, setServiceCreationError] = useState(false);

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
					"https://api.cloudinary.com/v1_1/dpxtnowdp/image/upload", // va la ruta de back
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
			setServiceCreationError(true);
			clearFields();
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
						<h2 className="text-2xl font-medium text-white">
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
						<label htmlFor="doctorImage" className="block font-medium mb-8">
							Imagen del Doctor:
						</label>
						{doctorImageUrl || user?.image ? (
							<label htmlFor="doctorImage">
								<img
									src={doctorImageUrl ? doctorImageUrl : user?.image}
									alt={`Imagen del ${user?.name}`}
									className="w-32 h-32 rounded-full object-cover mb-4 cursor-pointer"
								/>
							</label>
						) : (
							<label htmlFor="doctorImage">
								<div className="w-32 h-32 mb-4">
									<div className="h-full w-full rounded-full border border-l-kaitoke-green bg-viking bg-opacity-20 flex items-center justify-center cursor-pointer">
										<span className="text-mine-shaft"></span>
									</div>
								</div>
							</label>
						)}
						<input
							type="file"
							id="doctorImage"
							accept="image/*"
							onChange={handleImageChange}
							className="w-full p-2 border border-y-deep-sea rounded cursor-pointer mb-4"
							style={{ display: "none" }}
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="serviceName" className="block font-medium">
							Nombre del servicio:
						</label>
						<input
							type="text"
							id="serviceName"
							value={serviceName}
							onChange={(e) => setServiceName(e.target.value)}
							className="w-full p-2 border border-y-deep-sea rounded"
						/>
					</div>

					<label htmlFor="serviceDescription" className="block font-medium">
						Descripción del servicio:
					</label>
					<input
						type="text"
						id="serviceDescription"
						value={serviceDescription}
						onChange={(e) => setServiceDescription(e.target.value)}
						className="w-full p-2 border border-y-deep-sea rounded"
					/>
					<label htmlFor="servicePrice" className="block font-medium">
						Precio del servicio:
					</label>
					<input
						type="text"
						id="servicePrice"
						value={servicePrice}
						onChange={(e) => setServicePrice(e.target.value)}
						className="w-full p-2 border border-y-deep-sea rounded"
					/>
					<label htmlFor="appointmentDate" className="block font-medium">
						Fecha de la cita:
					</label>
					<DatePicker
						className="shadow-md transition-shadow hover:shadow-lg active:shadow-md border border-egg outline-none min-w-max w-72 h-20 flex items-center justify-center my-5 p-5 rounded-lg"
						dateFormat="dd-MMM-yyyy hh:mm a"
						showTimeSelect
						showTimeInput
						timeIntervals={30}
						selected={selectedDate}
						onChange={(date) => date && setSelectedDate(date)}
					/>
					<button
						type="submit"
						className="px-4 py-2 font-medium text-white bg-deep-sea rounded hover:bg-caribbean-green"
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
							onClick={createService}
						></div>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="bg-deep-sea p-8 rounded shadow-md"
						>
							<h2 className="text-xl font-medium mb-4 text-white">Error</h2>
							<p className="mb-4 text-white">
								Hubo un error al crear el servicio. Por favor, inténtalo de
								nuevo.
							</p>
							<button
								onClick={() => setServiceCreationError(false)}
								className="px-4 py-2 font-medium text-white bg-caribbean-green rounded hover:bg-kaitoke-green"
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

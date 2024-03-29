import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import useUser from "@/hooks/useUser";
import Select from "./Select";
import useSpecialties from "@/hooks/useSpecialties";
import useServices from "@/hooks/useServices";

export default function DoctorProfile() {
	const { user } = useUser();
	const { specialties } = useSpecialties();
	const { addService } = useServices();
	const [doctorImageUrl, setDoctorImageUrl] = useState<string | null>(null);
	const [serviceName, setServiceName] = useState("");
	const [serviceDescription, setServiceDescription] = useState("");
	const [atConsultory, setAtConsultory] = useState<number | undefined>(
		undefined
	);
	const [atHome, setAtHome] = useState<number | undefined>(undefined);
	const [serviceSpecialty, setServiceSpecialty] = useState("");
	const [showMessage, setShowMessage] = useState(false);
	const [serviceCreated, setServiceCreated] = useState(false);
	const [serviceError, setServiceError] = useState(false);

	const doctor_specialties =
		user && user.specialties && specialties
			? specialties
					.filter(({ _id }) => user.specialties?.includes(_id))
					.map(({ name }) => name)
			: [];
	if (!user) return <></>;
	const clearFields = () => {
		setServiceName("");
		setServiceDescription("");
		setAtConsultory(undefined);
		setAtHome(undefined);
		setServiceCreated(false);
	};

	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			if (!e.target.files || !e.target.files[0]) return;
			const reader = new FileReader();
			reader.onload = (e) => {
				setDoctorImageUrl(e.target?.result as string);
			};
			reader.readAsDataURL(e.target.files[0]);

			// Sube la imagen seleccionada
			const formData = new FormData();
			formData.append("file", e.target.files[0]);
			formData.append("upload_preset", "ml_default");

			const response = await axios.post(
				"https://api.cloudinary.com/v1_1/dpxtnowdp/image/upload",
				formData
			);

			await axios.put(`${process.env.doctors_url}`, {
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

	const handleSpecialtySelected = (specialty: string) =>
		setServiceSpecialty(specialty);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setShowMessage(false);
			setServiceCreated(false);
			setServiceError(false);

			const serviceData = {
				name: serviceName,
				description: serviceDescription,
				prices: { atConsultory, atHome },
				specialties: [serviceSpecialty],
				doctor: [user.email],
			};

			// Envía una solicitud POST para crear un nuevo servicio
			setShowMessage(true);
			addService(serviceData);

			clearFields();
			setServiceCreated(true);
		} catch (error) {
			setServiceError(true);
		}
	};

	return (
		<div className="h-screen bg-gradient-to-t from-kaitoke-green to-viking grid grid-cols-2 gap-4 p-8">
			<div className="flex flex-col justify-center">
				<h1 className="text-5xl font-semibold mb-6 font-handwrite text-white">
					Doctor {user.name}
				</h1>
				<div className="mt-6">
					<p className="text-white">Email: {user.email}</p>
					<p className="text-white">Licencia médica: {user.medicalLicense}</p>
				</div>
			</div>
			<div className="col-span-2 p-8 bg-white rounded-lg shadow-md">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="mt-4">
						<label htmlFor="doctorImage" className="block font-bold">
							Your image:
						</label>
						<div className="relative">
							{doctorImageUrl || user.image ? (
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
								className="absolute inset-0 opacity-0 cursor-pointer w-32 h-32 rounded-full object-cover mb-4"
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
					<label htmlFor="atConsultory" className="block font-bold">
						Precio de Consultoria:
					</label>
					<input
						name="atConsultory"
						type="number"
						value={atConsultory || 0}
						onChange={(e) => setAtConsultory(Number(e.target.value))}
						className="w-full p-2 border border-egg rounded"
					/>
					<label htmlFor="atHome" className="block font-bold">
						Precio a domicilio:
					</label>
					<input
						name="atHome"
						type="number"
						value={atHome || 0}
						onChange={(e) => setAtHome(Number(e.target.value))}
						className="w-full p-2 border border-egg rounded"
					/>
					{!!doctor_specialties.length && (
						<Select
							onChange={handleSpecialtySelected}
							options={doctor_specialties}
						/>
					)}
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
							onClick={() => {
								setShowMessage(false);
								setServiceCreated(false);
							}}
						></div>

						<motion.div
							initial={{ scale: 0.6 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="bg-deep-sea p-8 rounded shadow-md"
						>
							<h2 className="text-xl font-bold mb-4 text-white">Aviso</h2>
							{serviceError ? (
								<p className="mb-4 text-red-600">
									Hubo un error al crear el servicio
								</p>
							) : (
								<p className="mb-4 text-white">
									Al crear el servicio, acepta que el 10% de sus honorarios
									serán destinados al mantenimiento de la página.
								</p>
							)}
							<button
								onClick={() => {
									setShowMessage(false);
									setServiceCreated(false);
								}}
								className="px-4 py-2 font-bold text-white bg-caribbean-green rounded hover:bg-kaitoke-green"
							>
								Aceptar
							</button>
						</motion.div>
					</div>
				)}
				{serviceCreated && (
					<p className="mt-4 text-center text-green-600">
						El servicio ha sido creado exitosamente
					</p>
				)}
			</div>
		</div>
	);
}

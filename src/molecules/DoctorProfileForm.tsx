import { useState } from "react";

function DoctorProfile() {
	const [doctorId, setDoctorId] = useState("1");
	const [serviceName, setServiceName] = useState("");
	const [serviceDescription, setServiceDescription] = useState("");
	const [servicePrice, setServicePrice] = useState("");

	const getHardcodedDoctorData = (id: string) => {
		if (id === "1") {
			return {
				name: "Dr. John Doe",
				specialty: "Cardiología",
				description:
					"Especialista en cardiología con más de 10 años de experiencia.",
				price: 200,
				image:
					"https://th.bing.com/th?id=OIP.e1vRtd7rCBVQ6X-r2pC3yQHaH5&w=242&h=258&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
			};
		} else {
			return null;
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Formulario enviado:", {
			name: serviceName,
			description: serviceDescription,
			price: servicePrice,
		});
	};

	const doctor = getHardcodedDoctorData(doctorId);

	return (
		<div
			className="h-screen bg-gradient-to-t from-white to-viking grid grid-cols-2"
			style={{ gap: "1rem" }}
		>
			<div className="flex flex-col justify-center p-8">
				<h1 className="text-5xl font-semibold mb-6 font-handwrite text-white">
					Doctor Profile Page
				</h1>
				{doctor && (
					<>
						<h2>{doctor.name}</h2>
						<p>Especialidad: {doctor.specialty}</p>
						<p>Descripción: {doctor.description}</p>
						<p>Valor: {doctor.price}</p>
					</>
				)}
			</div>
			{doctor && (
				<div className="flex justify-center items-center">
					<img
						src={doctor.image}
						alt={`Imagen del ${doctor.name}`}
						className="w-medium h-32 rounded-full object-cover"
					/>
				</div>
			)}
			<div className="p-8">
				<form onSubmit={handleSubmit}>
					<label htmlFor="servicePrice" className="font-bold">
						Precio del servicio:
					</label>
					<input
						type="text"
						id="serviceName"
						value={serviceName}
						onChange={(e) => setServiceName(e.target.value)}
					/>
					<br />
					<label htmlFor="serviceDescription" className="font-bold">
						Descripción del servicio:
					</label>
					<input
						type="text"
						id="serviceDescription"
						value={serviceDescription}
						onChange={(e) => setServiceDescription(e.target.value)}
					/>
					<br />
					<label htmlFor="servicePrice" className="font-bold">
						Precio del servicio:
					</label>
					<input
						type="number"
						id="servicePrice"
						value={servicePrice}
						onChange={(e) => setServicePrice(e.target.value)}
					/>
					<br />
					<button type="submit" className="font-bold">
						Crear servicio
					</button>
				</form>
			</div>
		</div>
	);
}

export default DoctorProfile;

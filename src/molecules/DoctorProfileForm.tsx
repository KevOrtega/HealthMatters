import { useState } from "react";

function DoctorProfile() {
	const [doctorId, setDoctorId] = useState("1");
	const [serviceName, setServiceName] = useState("");
	const [serviceDescription, setServiceDescription] = useState("");
	const [servicePrice, setServicePrice] = useState("");
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [doctorImageUrl, setDoctorImageUrl] = useState<string | null>(null);

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

		await uploadImage();

		console.log("Formulario enviado:", {
			name: serviceName,
			description: serviceDescription,
			price: servicePrice,
		});
	};

	const doctor = getHardcodedDoctorData(doctorId);

	return (
		<div className="h-screen bg-gradient-to-t from-kaitoke-green to-viking grid grid-cols-2 gap-4 p-8">
			<div className="flex flex-col justify-center">
				<h1 className="text-5xl font-semibold mb-6 font-handwrite text-white">
					Doctor Profile Page
				</h1>
				{doctor && (
					<>
						<h2 className="text-2xl font-bold text-white">{doctor.name}</h2>
						<p className="text-white">Especialidad: {doctor.specialty}</p>
						<p className="text-white">Descripción: {doctor.description}</p>
						<p className="text-white">Valor: {doctor.price}</p>
					</>
				)}
			</div>
			{doctor && (
				<div className="flex justify-center items-center">
					<img
						src={doctorImageUrl ? doctorImageUrl : doctor.image}
						alt={`Imagen del ${doctor.name}`}
						className="w-32 h-32 rounded-full object-cover"
					/>
				</div>
			)}
			<div className="col-span-2 p-8 bg-white rounded-lg shadow-md">
				<form onSubmit={handleSubmit} className="space-y-4">
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
					<label htmlFor="serviceImage" className="block font-bold">
						Imagen del servicio:
					</label>
					<input
						type="file"
						id="serviceImage"
						accept="image/*"
						onChange={handleImageChange}
						className="w-full p-2 border border-egg rounded cursor-pointer"
					/>
					<button
						type="submit"
						className="px-4 py-2 font-bold text-white bg-deep-sea rounded hover:bg-caribbean-green"
					>
						Crear servicio
					</button>
				</form>
			</div>
		</div>
	);
}

export default DoctorProfile;

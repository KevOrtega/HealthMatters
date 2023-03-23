// components/ServiceDetail.tsx

import { useEffect, useState } from "react";

interface Service {
	_id: string;
	name: string;
	// ... (otros campos que desees mostrar)
}

interface Props {
	serviceId: string;
}

const ServiceDetail = ({ serviceId }: Props) => {
	const [service, setService] = useState<Service | null>(null);

	useEffect(() => {
		const fetchService = async () => {
			try {
				const response = await fetch(`your-api-url/services/${serviceId}`);
				const data = await response.json();
				setService(data);
			} catch (error) {
				console.error("Error fetching service:", error);
			}
		};

		fetchService();
	}, [serviceId]);

	return (
		<div>
			{service ? (
				<>
					<h1>{service.name}</h1>
					{/* ... (muestra el resto de los campos) */}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ServiceDetail;

import { useServicesById } from "@/hooks/useServicesById";
import { useState } from "react";

interface Service {
	id: string;
	name: string;
	description: string;
}

interface Props {
	id: string;
}

const ServiceDetail = ({ id }: Props) => {
	const { service, isLoading, isError } = useServicesById(id);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [cart, setCart] = useState([]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading service details</div>;
	}

	if (!service) {
		return <div>Service not found</div>;
	}

	const addToCart = (service: Service) => {
		const [cart, setCart] = useState<Service[]>([]);
	};

	const handleAddToCart = () => {
		addToCart(service);
		setIsAddedToCart(true);
	};

	return (
		<div>
			<h1>{service.name}</h1>
			<p>{service.description}</p>
			{isAddedToCart ? (
				<button disabled>Agregado al carrito</button>
			) : (
				<button onClick={handleAddToCart}>Agregar al carrito</button>
			)}
			<p>Servicios en el carrito: {cart.length}</p>
		</div>
	);
};

export default ServiceDetail;

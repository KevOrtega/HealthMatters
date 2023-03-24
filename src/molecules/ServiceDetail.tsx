import { useContext } from "react";
import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { service } = useServicesById(serviceId);
	const { addToCart } = useCartContext();

	const handleClick: React.ReactEventHandler<HTMLButtonElement> = () =>
		service && addToCart(service);

	return (
		<div>
			{service ? (
				<>
					<h1>{service.name}</h1>
					<button onClick={handleClick}>add service to my services</button>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

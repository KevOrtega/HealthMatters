import { useContext } from "react";
import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import axios from "axios";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { service } = useServicesById(serviceId);
	const { addToCart, cartItems } = useCartContext();

	const handleClick: React.ReactEventHandler<HTMLButtonElement> = () =>
		service && addToCart(service);

	const handleBought: React.ReactEventHandler<HTMLButtonElement> = async () => {
		await axios.post(process.env.checkout_url || "", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				price: cartItems[0].services.price,
				patient: "paciente",
			}),
		});
	};

	return (
		<div>
			{service && (
				<>
					<h1>{service.name}</h1>
					<button onClick={handleClick}>add service to my services</button>
					<button onClick={handleBought}>buy</button>
				</>
			)}
			<p>Servicios en el carrito: {cartItems.length}</p>
		</div>
	);
}

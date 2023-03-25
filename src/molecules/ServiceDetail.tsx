import { useContext, useEffect } from "react";
import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { service } = useServicesById(serviceId);
	const { addToCart, cartItems } = useCartContext();

	useEffect(() => {
		if (service) {
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://sdk.mercadopago.com/js/v2";
			script.setAttribute(
				"data-preference-id",
				service.preferenceId.toString()
			);
			document.body.appendChild(script);

			script.onload = () => {
				const mp = new window.MercadoPago(
					publicRuntimeConfig.NEXT_PUBLIC_MP_PUBLIC_KEY,
					{
						locale: "es-AR",
					}
				);

				const checkoutButton = document.getElementById("checkout-button");
				if (checkoutButton) {
					checkoutButton.addEventListener("click", () => {
						mp.checkout({
							preference: {
								id: service.preferenceId,
							},
							render: {
								container: ".cho-container",
								label: "Pagar",
							},
						});
					});
				}
			};
		}
	}, [service]);

	const handleClick: React.ReactEventHandler<HTMLButtonElement> = () =>
		service && addToCart(service);

	const handleBought: React.ReactEventHandler<HTMLButtonElement> = async () => {
		if (service) {
			await axios.post(publicRuntimeConfig.checkout_url || "", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					price: service.price,
					patient: "paciente",
				}),
			});
		}
	};

	return (
		<div>
			{service && (
				<>
					<h1>{service.name}</h1>
					<button onClick={handleClick}>add service to my services</button>
					<button id="checkout-button">buy</button>
				</>
			)}
			<p>Servicios en el carrito: {cartItems.length}</p>
		</div>
	);
}

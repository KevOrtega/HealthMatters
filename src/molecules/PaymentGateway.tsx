import { useEffect, useContext } from "react";
import { useCartContext } from "../context/CartProvider";

declare global {
	interface Window {
		MercadoPago: any;
	}
}

export default function MPButton() {
	const { cartItems } = useCartContext();

	if (cartItems.length) {
		useEffect(() => {
			const fetchCheckout = async () => {
				const res = await fetch("/api/checkout", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						price: cartItems[0].services.price,
						patient: "paciente",
					}),
				});

				const data = await res.json();

				if (data.global) {
					const script = document.createElement("script");
					script.type = "text/javascript";
					script.src = "https://sdk.mercadopago.com/js/v2";
					script.setAttribute("data-preference-id", data.global);
					document.body.appendChild(script);

					const mp = new window.MercadoPago(
						process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
						{
							locale: "es-AR",
						}
					);

					mp.checkout({
						preference: {
							id: data.global,
						},
						render: {
							container: ".cho-container",
							label: "Pagar",
						},
					});
				}
			};

			fetchCheckout();
		}, []);
	}
	return <div className="cho-container"></div>;
}

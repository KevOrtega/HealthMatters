// import { useContext, useEffect, useState } from "react";
// import { useServicesById } from "@/hooks/useServicesById";
// import { useCartContext } from "@/context/CartProvider";
// import axios from "axios";
// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();

// declare global {
// 	interface Window {
// 		MercadoPago: any;
// 	}
// }
// export default function ServiceDetail({ serviceId }: { serviceId: string }) {
// 	const { service } = useServicesById(serviceId);
// 	const { addToCart, cartItems } = useCartContext();

//   const [mercadopago,setMercadoPago] = useState(window.MercadoPago)

// 	const mp = mercadopago && new mercadopago(
// 		publicRuntimeConfig.NEXT_PUBLIC_MP_PUBLIC_KEY,
// 		{
// 			locale: "es-AR",
// 		}
// 	);

// 	// useEffect(() => {
// 	// 	if (service) {
// 	// 		const script = document.createElement("script");
// 	// 		script.type = "text/javascript";
// 	// 		script.src = "https://sdk.mercadopago.com/js/v2";
// 	// 		script.setAttribute(
// 	// 			"data-preference-id",
// 	// 			service._id
// 	// 		);
// 	// 		document.body.appendChild(script);

// 	// 		script.onload = () => {
// 	// 			const mp = new window.MercadoPago(
// 	// 				publicRuntimeConfig.NEXT_PUBLIC_MP_PUBLIC_KEY,
// 	// 				{
// 	// 					locale: "es-AR",
// 	// 				}
// 	// 			);

// 	// 			const checkoutButton = document.getElementById("checkout-button");
// 	// 			if (checkoutButton) {
// 	// 				checkoutButton.addEventListener("click", () => {
// 	// 					mp.checkout({
// 	// 						preference: {
// 	// 							id: service._id,
// 	// 						},
// 	// 						render: {
// 	// 							container: ".cho-container",
// 	// 							label: "Pagar",
// 	// 						},
// 	// 					});
// 	// 				});
// 	// 			}
// 	// 		};
// 	// 	}
// 	// }, [service]);

// 	const handleClick: React.ReactEventHandler<HTMLButtonElement> = () =>
// 		service && addToCart(service);

// 	const handleBought: React.ReactEventHandler<HTMLButtonElement> = async () => {
// 		if (service && mp) {
// 			mp.checkout({
// 			preference: {
// 				id: service._id,
// 			},
// 			render: {
// 				container: ".cho-container",
// 				label: "Pagar",
// 			},
// 		});
// 			await axios.post(publicRuntimeConfig.checkout_url || "", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify({
// 					price: service.price,
// 					patient: "paciente",
// 				}),
// 			});
// 		}
// 	};

// 	return (
// 		<div>
// 			<script type="text/javascript" src="https://sdk.mercadopago.com/js/v2" data-preference-id={service?._id}>

// 			</script>
// 			{service && (
// 				<>
// 					<h1>{service.name}</h1>
// 					<button onClick={handleClick}>add service to my services</button>
// 					<button  onClick={handleBought} id="checkout-button">buy</button>
// 				</>
// 			)}
// 			<p>Servicios en el carrito: {cartItems.length}</p>
// 		</div>
// 	);
// }
import { useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { useServicesById } from "@/hooks/useServicesById";

interface Patient {
	name: string;
	email: string;
}

interface Date {
	service: string;
	price: number;
}

interface CheckoutResponse {
	global: string;
}

const ServiceDetail = (serviceId: string) => {
	const { service } = useServicesById(serviceId);
	const [patient, setPatient] = useState<Patient>({
		name: "",
		email: "",
	});
	const [date, setDate] = useState<Date>({
		service: "",
		price: 0,
	});
	const [checkoutId, setCheckoutId] = useState<string>("");

	const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPatient({
			...patient,
			[e.target.name]: e.target.value,
		});
	};

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate({
			...date,
			[e.target.name]: e.target.value,
		});
	};

	const handleCheckout = async () => {
		try {
			if (!service) throw new Error("no service");
			// Crear la instancia de MercadoPagoCheckout con las credenciales de Mercado Pago
			await loadMercadoPago();
			const mpCheckout = new window.MercadoPago("YOUR_PUBLIC_KEY", {
				locale: "es-AR",
				id: service._id,
			});
			// Crear el token de pago
			const token = await mpCheckout.createToken({
				cardNumber: "4509953566233704",
				securityCode: "123",
				cardExpirationMonth: "11",
				cardExpirationYear: "25",
				cardholderName: "APRO",
				docType: "DNI",
				docNumber: "12345678",
			});

			// Confirmar la transaccion
			const payment = await mpCheckout.confirmPayment({
				paymentMethodId: "visa",
				paymentMethodIssuerId: 3,
				token: token.id,
				payerEmail: patient.email,
				description: date.service,
				amount: date.price,
				installments: 1,
				payer: {
					name: patient.name,
					email: patient.email,
				},
			});
			await axios.post(process.env.checkout_url || "", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					price: service.price,
					patient: "paciente",
				}),
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h1>Service Detail</h1>
			<form>
				<label>
					Patient Name:
					<input
						type="text"
						name="name"
						value={patient.name}
						onChange={handlePatientChange}
					/>
				</label>
				<br />
				<label>
					Patient Email:
					<input
						type="email"
						name="email"
						value={patient.email}
						onChange={handlePatientChange}
					/>
				</label>
				<br />
				<label>
					Service:
					<input
						type="text"
						name="service"
						value={date.service}
						onChange={handleDateChange}
					/>
				</label>
				<br />
				<label>
					Price:
					<input
						type="number"
						name="price"
						value={date.price}
						onChange={handleDateChange}
					/>
				</label>
				<br />
				<button type="button" onClick={handleCheckout}>
					Checkout
				</button>
			</form>
			{checkoutId && (
				<div>
					<p>Checkout ID: {checkoutId}</p>
					<p>Scan this QR Code to complete the payment:</p>
					<img
						src={`https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js?checkout-id=${checkoutId}`}
					/>
				</div>
			)}
		</div>
	);
};
export default ServiceDetail;

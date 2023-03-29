import { useCartContext } from "@/context/CartProvider";
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

interface ServiceDetailProps {
	serviceId: string;
}

const ServiceDetail: NextPage<ServiceDetailProps> = ({ serviceId }) => {
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
			// Load the MercadoPago SDK
			await loadMercadoPago();

			// Check if the SDK has been loaded successfully
			if (!window.MercadoPago) {
				throw new Error("MercadoPago SDK not loaded");
			}
			const mpCheckout = new window.MercadoPago(
				"TEST-ff31ab94-73af-43dd-94db-cf6f60d7fcc5",
				{
					locale: "es-AR",
					id: service._id,
				}
			);
			// Crear el token de pago
			const token = await mpCheckout.createToken({
				cardNumber: "4509953566233704",
				securityCode: "123",
				cardExpirationMonth: "11",
				cardExpirationYear: "2025",
				cardholderName: "APRO firstname",
				identification: {
					number: "32432432",
					type: "DNI",
				},
			});

			// Crear el objeto de pago
			const paymentData = {
				token: token.id,
				description: service.name,
				transaction_amount: service.price,
				installments: 1,
				payment_method_id: token.card.payment_method_id,
				payer: {
					email: patient.email,
				},
			};

			// Procesar el pago
			const response = await axios.post<CheckoutResponse>(
				"/api/checkout",
				paymentData
			);
			if (response.data.global === "approved") {
				setCheckoutId(response.data.global);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>{service?.name}</h1>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={handlePatientChange}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					onChange={handlePatientChange}
				/>
				<input
					type="text"
					name="service"
					placeholder="Service"
					onChange={handleDateChange}
				/>
				<input
					type="number"
					name="price"
					placeholder="Price"
					onChange={handleDateChange}
				/>
				<button type="button" onClick={handleCheckout}>
					Checkout
				</button>
			</form>
			{checkoutId && <p>Checkout approved: {checkoutId}</p>}
		</div>
	);
};

export default ServiceDetail;

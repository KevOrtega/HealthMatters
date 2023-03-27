import React, { useState } from "react";
import axios from "axios";

export default function PaymentPage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [paymentUrl, setPaymentUrl] = useState(null);
	const [consultType, setConsultType] = useState("Express");

	const handlePay = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		setLoading(true);
		setError("");
		try {
			let amount = 10;
			if (consultType === "Standar") {
				amount = 20;
			} else if (consultType === "Premium") {
				amount = 30;
			}
			const response = await axios.post("/api/payments", {
				amount,
				consultType,
			});
			setPaymentUrl(response.data.url);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setError(
					error.response?.data?.message || "Ocurrió un error inesperado"
				);
			} else {
				setError("Ocurrió un error inesperado");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h1>Pagar consulta médica</h1>
			<p>El costo de la consulta es de $10. Haz clic en el botón para pagar:</p>
			<br />
			<button onClick={() => setConsultType("Express")} disabled={loading}>
				{loading && consultType === "Express"
					? "Cargando..."
					: "Pagar $10 por consulta Express"}
			</button>
			<br />
			<br />
			<button onClick={() => setConsultType("Standar")} disabled={loading}>
				{loading && consultType === "Standar"
					? "Cargando..."
					: "Pagar $20 por consulta Standar"}
			</button>
			<br />
			<br />
			<button onClick={() => setConsultType("Premium")} disabled={loading}>
				{loading && consultType === "Premium"
					? "Cargando..."
					: "Pagar $30 por consulta Premium"}
			</button>

			{error && <p>Error: {error}</p>}
			{paymentUrl && (
				<p>
					Sigue este enlace para completar el pago:{" "}
					<a href={paymentUrl}>{paymentUrl}</a>
				</p>
			)}
		</div>
	);
}

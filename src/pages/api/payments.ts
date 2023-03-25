import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
	access_token:
		//"TEST-3013639755768747-031705-092990ca65687f403d3f4e5b763a309b-825711606",
		"TEST-5930443878939097-032316-10969431732ab08f256002effa02f9d6-659227063",
});

export default async function handlePayment(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (mercadopago.configurations.getAccessToken() === null) {
			throw new Error("Access token para MercadoPago no es válido");
		}

		if (req.method !== "POST") {
			return res.status(405).json({ message: "Método no permitido" });
		}

		const amount = Number(req.query.amount);

		if (typeof amount !== "number") {
			return res.status(400).json({ message: "Cantidad no válida" });
		}
		const { consultType } = req.body;

		const preference: CreatePreferencePayload = {
			items: [
				{
					title: "Consulta médica",
					description: `Consulta médica ${consultType} con el Dr. Juan Pérez`,
					quantity: 1,
					currency_id: "ARS",
					unit_price: amount,
				},
			],
			payer: {
				name: "Nombre del pagador",
				email: "correo@ejemplo.com",
			},
			auto_return: "all",
			back_urls: {
				success: "https://health-matters.vercel.app/",
				pending: "https://health-matters.vercel.app/",
				failure: "https://health-matters.vercel.app/",
			},
		};

		const response = await mercadopago.preferences.create(preference);

		return res.status(200).json({ init_point: response.body.init_point });
	} catch (error) {
		console.error(error);

		return res.status(500).json({ message: "Error al crear preferencia" });
	}
}

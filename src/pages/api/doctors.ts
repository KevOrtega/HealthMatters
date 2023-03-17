// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { iDoctor } from "@/interface";

export default function handler(req: NextApiRequest, res: NextApiResponse<iDoctor[]>) {
	const doctors_data: iDoctor[] = [
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
			rating: 5,
		},
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
			rating: 5,
		},
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
			rating: 5,
		},
	];
	res.status(200).json(doctors_data);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string[]>
) {
	const filters = [
		"surgeon",
		"pediatric",
		"dentistry",
		"traumatologist",
		"orthopedics",
	];
	res.status(200).json(filters);
}

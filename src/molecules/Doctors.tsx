import { iDoctor } from "@/interface";
import React from "react";
import Doctor from "./Doctor";

const Doctors: React.FC = () => {
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

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-bold mb-4">Tarjetas de información</h1>
			<div className="grid grid-cols-3 gap-4">
				{doctors_data.map((card) => (
					<Doctor {...card} />
				))}
			</div>
		</div>
	);
};

export default Doctors;

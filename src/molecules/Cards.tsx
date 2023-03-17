import React from "react";
import Card from "./Card";

const Cards: React.FC = () => {
	const cards_data = [
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
		},
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
		},
		{
			title: "Revision Pediatrica",
			info: "atención médica de bebés, niños y adolescentes. Hasta los 18 años.",
			price: 5000,
			doctor: "John Doe",
		},
	];
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-bold mb-4">Tarjetas de información</h1>
			<div className="grid grid-cols-3 gap-4">
				{cards_data.map((card) => (
					<Card {...card} />
				))}
			</div>
		</div>
	);
};

export default Cards;

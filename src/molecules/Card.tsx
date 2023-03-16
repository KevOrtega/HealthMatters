import React from "react";

type Card = {
	title: string;
	info: string;
	price: number;
	doctor: string;
};

const Card: React.FC<Card> = ({ title, info, price, doctor }) => {
	return (
		<div className="border-2 border-gray-200 rounded-lg p-4">
			<h2 className="text-lg font-bold mb-2">{title}</h2>
			<p className="text-gray-700 mb-2">{info}</p>
			<p className="text-gray-700 mb-2">${price}</p>
			<p className="text-gray-500">{doctor}</p>
		</div>
	);
};

export default Card;

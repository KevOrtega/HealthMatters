import { iDoctor } from "@/interface";
import React from "react";

const Card: React.FC<iDoctor> = ({ title, info, price, doctor, rating }) => {
	return (
		<div className="border-2 border-gray-200 rounded-lg p-4">
			<h2 className="text-lg font-bold mb-2">{title}</h2>
			<p className="text-egg mb-2">{info}</p>
			<p className="text-egg mb-2">${price}</p>
			<p className="text-egg mb-2">${rating}</p>
			<p className="text-egg">{doctor}</p>
		</div>
	);
};

export default Card;

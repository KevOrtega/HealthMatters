import React from "react";

import { serviceProps } from "@/interface";

import Button from "@/atoms/Button";
import Title from "@/atoms/Title";

const Service: React.FC<serviceProps> = ({
	className,
	name,
	description,
	price,
	doctor,
	rating,
}) => {
	return (
		<Button
			className={
				"relative flex flex-col w-1/4 h-64 shadow-md rounded-xl py-2 px-6 transition-all hover:-translate-y-1 active:translate-y-0 overflow-visible hover:shadow-lg active:shadow-md " +
				className
			}
		>
			<Title className="w-full text-center" type="medium">
				{name}
			</Title>
			<p className="text-egg my-2 text-left">{description}</p>
			<p className="text-egg mb-2 text-left">${price}</p>
			<p className="text-egg mb-2 text-left">rating: {rating}</p>
			<p className="z-10 absolute bottom-0 right-0 min-w-max w-2/5 translate-x-1/3 translate-y-1/3 bg-deep-sea text-white uppercase text-lg text-center p-4">
				{doctor.length ? doctor : "doctor gutierrez"}
			</p>
		</Button>
	);
};

export default Service;

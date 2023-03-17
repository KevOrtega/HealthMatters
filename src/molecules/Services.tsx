import React from "react";
import Service from "@/molecules/Service";
import useServices from "@/hooks/useServices";

const Services: React.FC = () => {
	const { services } = useServices();
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl font-bold mb-4">Services</h1>
			<div className="grid grid-cols-3 gap-4">
				{services && services.map((service, i) => <Service {...service} key={"service--" + i} />)}
			</div>
		</div>
	);
};

export default Services;

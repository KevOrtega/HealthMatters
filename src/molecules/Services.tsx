import React from "react";
import Service from "@/molecules/Service";
import useServices from "@/hooks/useServices";
import Title from "@/atoms/Title";

const Services: React.FC = () => {
	const { services } = useServices();
	return (
		<div className="w-full px-20">
			<Title className="text-left my-6" type="medium">
				Services
			</Title>
			<div className="w-full flex justify-evenly items-start flex-wrap">
				{services &&
					services.map((service, i) => (
						<Service {...service} className="m-10" key={"service--" + i} />
					))}
			</div>
		</div>
	);
};

export default Services;

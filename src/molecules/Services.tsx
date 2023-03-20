import React from "react";
import Service from "@/molecules/Service";
import useServices from "@/hooks/useServices";
import Title from "@/atoms/Title";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import Pagination from "@/molecules/Pagination";

const Services: React.FC = () => {
	const { search, specialties, order, page } = useServiceSearchContext();
	const { services } = useServices(search, specialties, order, page);

	return (
		<div className="w-full px-20">
			<Title className="text-left my-6" type="medium">
				Services
			</Title>
			<Pagination />
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

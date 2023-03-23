import React from "react";
import Service from "@/molecules/Service";
import useServices from "@/hooks/useServices";
import Title from "@/atoms/Title";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import Pagination from "@/molecules/Pagination";
import Link from "next/link";
import { iService } from "@/interface";

const Services: React.FC = () => {
	const { search, specialties, order, page } = useServiceSearchContext();
	const itemsPerPage = page === 1 ? 6 : 5;
	const { services } = useServices(search, specialties, order, page);

	return (
		<div className="w-full px-20">
			<Title className="text-left my-6" type="medium">
				Services
			</Title>
			<Pagination />
			<div className="w-full flex justify-evenly items-start flex-wrap">
				{services &&
					services.map((service: iService, i: number) => (
						<Service
							{...service}
							className="m-10 cursor-pointer"
							key={"service--" + i}
						/>
					))}
			</div>
		</div>
	);
};

export default Services;

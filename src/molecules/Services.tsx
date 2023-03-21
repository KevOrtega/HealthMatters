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
			<div className="grid grid-cols-3 gap-4">
				{services &&
					services.map((service: iService, i: number) => (
						<Link href={`/service/${service._id}`} key={"service--" + i}>
							<div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
								<Service {...service} className="m-10 cursor-pointer" />
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Services;

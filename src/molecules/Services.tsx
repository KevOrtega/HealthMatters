import React, { useState } from "react";
import useSWR from "swr";
import Service from "@/molecules/Service";
import Title from "@/atoms/Title";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import Pagination from "@/molecules/Pagination";
import { iService } from "@/interface";
import useServices from "@/hooks/useServices";

export default function Services() {
	const { search, specialties, order, page } = useServiceSearchContext();
	const { services, isLoading } = useServices(search, specialties, order, page);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	if (!services || services.length === 0) {
		return (
			<div className="flex items-center justify-center h-screen">
				<h1 className="text-3xl font-bold text-gray-900">
					No se encontraron servicios
				</h1>
			</div>
		);
	}

	return (
		<div className="w-full px-20">
			<Title className="text-left my-6 text-2xl font-bold text-gray-900">
				Servicios
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
}

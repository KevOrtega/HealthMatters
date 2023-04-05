import React from "react";
import ServicesList from "@/molecules/ServicesList";
import {
	ServiceSearchProvider,
	useServiceSearchContext,
} from "@/context/ServiceSearchProvider";
import AdminNavigation from "@/molecules/AdminNavigation";

export default function Services() {
	return (
		<div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
			<ServiceSearchProvider>
				<AdminNavigation />
				<ServicesList />
			</ServiceSearchProvider>
		</div>
	);
}

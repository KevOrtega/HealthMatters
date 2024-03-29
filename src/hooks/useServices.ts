import useSWR from "swr";
import { servicesFetcher } from "@/requests";
import { iService } from "@/interface";
import axios from "axios";

export default function useServices(
	search?: string,
	specialties_to_search?: string[],
	order?: string,
	page?: number
) {
	const { data, isLoading, mutate, error } = useSWR(
		`${process.env.services_url}/?search=${
			search && search.length ? search : ""
		}&specialties=${
			specialties_to_search && specialties_to_search.length
				? specialties_to_search.join(",")
				: ""
		}&order=${
			order && !!order.length && order !== "default" ? order : ""
		}&page=${page || "1"}`,
		servicesFetcher
	);

	const addService = async (new_service: iService) => {
		if (data) mutate({ ...data, services: [...data.services, new_service] });
		await axios.post(`${process.env.services_url}`, new_service);
		mutate();
	};

	return {
		services: data?.services,
		pages: data?.pages,
		isLoading,
		error,
		addService,
	};
}

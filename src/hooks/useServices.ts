import useSWR from "swr";
import { servicesFetcher } from "@/requests";

export default function useServices(
	search?: string,
	specialties_to_search?: string[],
	order?: string,
	page?: number,
	refreshKey?: number
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
		}&page=${page || "1"}&refreshKey=${refreshKey}`,
		servicesFetcher
	);

	return {
		services: data?.services,
		pages: data?.pages,
		isLoading,
		error,
		setServices: mutate,
	};
}

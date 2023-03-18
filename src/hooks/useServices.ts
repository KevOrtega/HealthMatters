import useSWR from "swr";
import { servicesFetcher, services_URL } from "@/services/services";

export default function useServices(
	search?: string,
	specialties_to_search?: string[],
	order?: string
) {
	const {
		data: services,
		isLoading,
		mutate,
	} = useSWR(
		`${services_URL}/?search=${
			search && search.length ? search : ""
		}&specialties=${
			specialties_to_search && specialties_to_search.length
				? specialties_to_search.join(",")
				: ""
		}&order=${order && order.length && order !== "default" ? order : ""}`,
		servicesFetcher
	);

	return {
		services,
		isLoading,
		setServices: mutate,
	};
}

import useSWR from "swr";
import { serviceByIdFetcher } from "@/requests";

export const useServicesById = (id: string) => {
	const {
		data: service,
		isLoading,
		error,
	} = useSWR(`${process.env.services_url}/${id}`, serviceByIdFetcher);

	return {
		service,
		isLoading: isLoading,
		isError: error,
	};
};

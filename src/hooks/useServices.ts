import useSWR from "swr";
import { servicesFetcher, services_URL } from "@/services/services";

export default function useServices() {
	const { data: services, isLoading, mutate } = useSWR(services_URL, servicesFetcher);

	return {
		services,
		isLoading,
		setServices: mutate,
	};
}

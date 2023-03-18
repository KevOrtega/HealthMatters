import useSWR from "swr";
import { specialities_URL, specialitiesFetcher } from "@/services/specialities";

export default function useSpecialities() {
	const { data: specialities, isLoading, mutate } = useSWR(specialities_URL, specialitiesFetcher);

	return {
		specialities,
		isLoading,
		setSpecialities: mutate,
	};
}

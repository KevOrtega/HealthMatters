import useSWR from "swr";
import { specialties_URL, specialtiesFetcher } from "@/services/specialties";

export default function useSpecialties() {
	const {
		data: specialties,
		isLoading,
		mutate,
	} = useSWR(specialties_URL, specialtiesFetcher);

	return {
		specialties,
		isLoading,
		setSpecialties: mutate,
	};
}

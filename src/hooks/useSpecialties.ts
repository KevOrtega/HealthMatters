import useSWR from "swr";
import { specialtiesFetcher } from "@/requests";

export default function useSpecialties() {
	const {
		data: specialties,
		isLoading,
		mutate,
	} = useSWR(process.env.specialties_url, specialtiesFetcher);

	return {
		specialties,
		isLoading,
		setSpecialties: mutate,
	};
}

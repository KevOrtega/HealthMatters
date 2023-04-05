import { validateDoctorFetcher } from "@/requests";
import useSWR from "swr";

export default function useCheckIsDoctor() {
	const { data: user, error } = useSWR(
		`${process.env.validate_doctor_url}`,
		validateDoctorFetcher
	);

	return {
		isDoctor: error || !user ? false : true,
	};
}

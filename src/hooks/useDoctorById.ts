import useSWR from "swr";
import { doctorByIdFetcher } from "@/requests";

export default function useDoctorById(id: string) {
	const { data: service_doctor } = useSWR(
		`${process.env.doctors_url}/${id}`,
		doctorByIdFetcher
	);

	return {
		service_doctor,
	};
}

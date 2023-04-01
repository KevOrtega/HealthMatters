import useSWR from "swr";
import { datesFetcher } from "@/requests";

export default function useDates() {
	const { data: dates, error } = useSWR(
		"https://healthmattersapi-production.up.railway.app/dates",
		datesFetcher
	);

	return {
		dates,
		error,
	};
}

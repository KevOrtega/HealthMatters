import useSWR from "swr";
import { datesFetcher } from "@/requests";

export default function useDates() {
	const { data: dates, error } = useSWR(
		process.env.dates_url || "",
		datesFetcher
	);

	return {
		dates,
		error,
	};
}

import { validateUserFetcher } from "@/requests";
import useSWR from "swr";

export default function useCheckIsAdmin() {
	const { data: user, error } = useSWR(
		`${process.env.validate_admin_url}`,
		validateUserFetcher
	);

	return {
		isAdmin: error || !user ? false : true,
	};
}

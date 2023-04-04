import useSWR from "swr";
import { googleLoginFetcher } from "@/requests";

export default function useGoogleLogin() {
	const { data: google_login_url } = useSWR(
		`${process.env.google_login_url}`,
		googleLoginFetcher
	);

	return {
		google_login_url,
	};
}

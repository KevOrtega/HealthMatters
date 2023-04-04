import { getUser } from "@/requests";
import useSWR from "swr";

export default function useUser() {
	const {
		data: user,
		error,
		mutate,
	} = useSWR(`${process.env.user_url}`, getUser);

	const logOut = () => {
		localStorage.removeItem("login_token");
		mutate(undefined);
	};

	return {
		user,
		error,
		logOut,
	};
}

import { usersFetcher } from "@/requests";
import useSWR from "swr";

export default function useUsers() {
	const {
		data: usersData,
		error,
		mutate,
		isLoading,
	} = useSWR(process.env.users_url || "", usersFetcher);

	const deleteUser = async (email_to_delete: string) => {
		mutate(usersData?.filter(({ email }) => email === email_to_delete));
	};

	return {
		usersData,
		error,
		deleteUser,
		isLoading,
	};
}

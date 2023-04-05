import { usersFetcher } from "@/requests";
import axios from "axios";
import useSWR from "swr";

export default function useUsers() {
	const {
		data: usersData,
		error,
		mutate,
		isLoading,
	} = useSWR(`${process.env.users_url}`, usersFetcher);

	const deleteUser = async (id: string) => {
		const user_to_delete = usersData?.find(({ _id }) => _id === id);
		// mutate(
		// 	usersData?.map((user) =>
		// 		user._id === id ? { ...user, deleted: true } : user
		// 	)
		// );
		await axios.delete(`${process.env.users_url}/${user_to_delete?._id}`);
		mutate();
	};

	const reactiveUser = async (id: string) => {
		await axios.put(`${process.env.users_url}/${id}`);
		mutate();
	};

	return {
		usersData,
		error,
		deleteUser,
		reactiveUser,
		isLoading,
	};
}

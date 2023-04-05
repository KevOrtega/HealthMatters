import { getUser } from "@/requests";
import Swal from "sweetalert2";
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
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "logout successfully",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return {
		user,
		error,
		logOut,
	};
}

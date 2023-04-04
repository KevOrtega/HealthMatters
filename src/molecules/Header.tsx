import Link from "@/atoms/Link";
import Title from "@/atoms/Title";
import { useUserContext } from "@/context/UserProvider";
import SearchBar from "./Search";
import Button from "@/atoms/Button";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Header() {
	const { user } = useUserContext();
	const [isOpenProfile, setOpenProfile] = useState(false);

	const openProfile = () => setOpenProfile(!isOpenProfile);

	const handleLogOut = async () => {
		try {
			await axios.post(process.env.logout || "");
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Error logging out",
			});
		}
	};

	return (
		<header className="h-20 border-b-2 border-b-egg">
			<nav className="container h-full mx-auto flex justify-between items-center py-4">
				<Link href="/">
					<Title type="big">HealthMatters</Title>
				</Link>
				<SearchBar />
				<ul className="flex items-center font-bold">
					<li className="px-5 py-2">
						<Link href="/myservices">My Services</Link>
					</li>
					{user ? (
						<li className="relative px-5 py-2 bg-anakiwa text-white rounded-sm capitalize">
							<Button onClick={openProfile}>{user.name}</Button>
							{isOpenProfile && (
								<div className="flex flex-col absolute z-10 w-full top-full left-0 mt-2 shadow-xl p-2 text-mine-shaft bg-white border border-egg rounded-lg">
									<Link
										className="w-full text-center py-3 hover:"
										href="/profile"
									>
										Profile
									</Link>
									<Link className="w-full text-center py-3 hover:" href="/home">
										<Button onClick={handleLogOut}>Logout</Button>
									</Link>
								</div>
							)}
						</li>
					) : (
						<li className="px-5 py-2">
							<Link href="/login">LogIn</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

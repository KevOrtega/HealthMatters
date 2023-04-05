import Link from "@/atoms/Link";
import Title from "@/atoms/Title";
import SearchBar from "./Search";
import Button from "@/atoms/Button";
import { useState } from "react";
import useUser from "@/hooks/useUser";
import useCheckIsDoctor from "@/hooks/useCheckIsDoctor";
import useCheckIsAdmin from "@/hooks/useCheckIsAdmin";

export default function Header() {
	const { user, logOut } = useUser();
	const [isOpenProfile, setOpenProfile] = useState(false);
	const { isDoctor } = useCheckIsDoctor();
	const { isAdmin } = useCheckIsAdmin();

	const openProfile = () => setOpenProfile(!isOpenProfile);

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
							<Button
								className="transition-transform hover:scale-105 active:scale-100"
								onClick={openProfile}
							>
								{user.name}
							</Button>
							{isOpenProfile && (
								<div className="flex flex-col absolute z-20 min-h-max w-32 top-full right-0 mt-2 shadow-xl p-2 text-mine-shaft bg-white border border-egg rounded-lg">
									{isAdmin && (
										<Link
											className="w-full flex items-center justify-center h-14 my-1 transition-transform hover:scale-105 active:scale-100"
											href="/admin"
										>
											Admin
										</Link>
									)}
									{isDoctor && (
										<Link
											className="w-full flex items-center justify-center h-14 my-1 transition-transform hover:scale-105 active:scale-100"
											href="/profile"
										>
											Profile
										</Link>
									)}
									<Button
										className="z-20 w-full h-14 my-1 transition-transform hover:scale-105 active:scale-100"
										onClick={logOut}
									>
										Logout
									</Button>
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

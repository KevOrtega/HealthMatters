import Link from "@/atoms/Link";
import Title from "@/atoms/Title";
import { useUserContext } from "@/context/UserProvider";
import SearchBar from "./Search";

export default function Header() {
	const { user } = useUserContext();

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
						<Link href="/profile">
							<li className="px-5 py-2 bg-anakiwa text-white rounded-sm capitalize">
								{user.name}
							</li>
						</Link>
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

import Link from "@/atoms/Link";
import Title from "@/atoms/Title";
import SearchBar from "./Search";

export default function Header() {
	return (
		<header className="h-20 border-b-2 border-b-egg">
			<nav className="container h-full mx-auto flex justify-between items-center py-4">
				<Link href="/">
					<Title type="big">HealthMatters</Title>
				</Link>
				<SearchBar />
				<ul className="flex space-x-4">
					<li>
						<Link href="/login">LogIn</Link>
					</li>
					<li>
						<Link href="/myservices">My Services</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

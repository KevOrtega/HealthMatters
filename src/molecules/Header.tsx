import Link from "@/atoms/Link";
import Title from "@/atoms/Title";

function Header() {
	return (
		<header className="border-b-2 border-b-egg">
			<div className="container mx-auto flex justify-between items-center py-4">
				<Link href="/">
					<Title type="big">HealthMatters</Title>
				</Link>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link href="/login">LogIn</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;

import Link from "next/link";

function Header() {
	return (
		<header className="bg-gray-900">
			<div className="container mx-auto flex justify-between items-center py-4">
				<h1 className="text-white text-2xl font-bold">HealthMatters</h1>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link href="/">
								<a className="text-gray-300 hover:text-white">Home</a>
							</Link>
						</li>
						<li>
							<Link href="/login">
								<a className="text-gray-300 hover:text-white">LogIn</a>
							</Link>
						</li>
						<li>
							<Link href="/signup">
								<a className="text-gray-300 hover:text-white">Sign up</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;

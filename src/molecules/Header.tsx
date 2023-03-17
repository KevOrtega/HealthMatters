function Header() {
	return (
		<header className="bg-gray-900">
			<div className="container mx-auto flex justify-between items-center py-4">
				<h1 className="text-white text-2xl font-bold">HealthMatters</h1>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="text-gray-300 hover:text-white">
								Home
							</a>
						</li>
						<li>
							<a href="/login" className="text-gray-300 hover:text-white">
								LogIn
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;

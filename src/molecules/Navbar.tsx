import Link from "@/atoms/Link";
import Title from "@/atoms/Title";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-6">
			<div className="flex items-center">
				<Title type="big">HealthMatters</Title>
			</div>
			<div className="flex items-center justify-end">
				<Link href="/" className="mr-10">
					Search
				</Link>
				<Link href="/login" className="mr-10">
					Login
				</Link>
			</div>
		</nav>
	);
}

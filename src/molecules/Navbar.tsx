import Link from "@/atoms/Link";
import Title from "@/atoms/Title";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-6 shadow-xl rounded-xl">
			<div className="flex items-center">
				<Title type="big">HealthMatters</Title>
			</div>
			<div className="flex items-center justify-end">
				<Link href="/home" className="mr-10">
					Home
				</Link>
				<Link href="/login" className="mr-10">
					Login
				</Link>
			</div>
		</nav>
	);
}

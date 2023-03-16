import Link from "next/link";
import Button from "../atoms/Button";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between bg-teal-50 p-6">
			<div className="flex items-center">
				<Link href="/" className="font-semibold text-xl tracking-tight text-green-800">
					Health Matters
				</Link>
			</div>
			<div className="flex items-center justify-end">
				<div className="mr-10">
					<Button type="navButton" onClick={() => console.log("Search button clicked")}>
						Search
					</Button>
				</div>
				<div className="border-l-2 border-gray-500 mx-6 h-6"></div>
				<Button type="navButton" onClick={() => console.log("Login button clicked")}>
					Login
				</Button>
			</div>
		</nav>
	);
}

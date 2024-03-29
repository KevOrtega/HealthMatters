import Link from "@/atoms/Link";

export default function AdminSideBar() {
	return (
		<div className="bg-viking h-full w-1/2 md:w-1/4 lg:w-1/5 rounded-lg">
			<Link
				href="/admin"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				Admin
			</Link>
			<Link
				href="/admin/dates"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				Dates
			</Link>
			<Link
				href="/admin/services"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				Services
			</Link>
		</div>
	);
}

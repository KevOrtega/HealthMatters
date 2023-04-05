import Link from "next/link";
import React from "react";

const AdminNavigation = () => {
	return (
		<div className="bg-viking h-full w-1/2 md:w-1/4 lg:w-1/5 rounded-lg">
			<Link
				href="/admin"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				admin
			</Link>
			<Link
				href="/admin/dates"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				dates
			</Link>
			<Link
				href="/admin/services"
				className="block px-4 py-2 text-caribbean-green font-bold"
			>
				services
			</Link>
		</div>
	);
};

export default AdminNavigation;

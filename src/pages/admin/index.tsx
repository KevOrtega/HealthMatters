import React from "react";
import useUsers from "@/hooks/useUsers";
import { iUser } from "@/interface";
import Button from "@/atoms/Button";
import AdminNavigation from "@/molecules/AdminNavigation";

export default function Admin() {
	const { usersData, error, deleteUser, reactiveUser, isLoading } = useUsers();
	if (error)
		return (
			<div className="text-center text-red-600 font-bold mt-5">
				Error loading users
			</div>
		);
	if (isLoading)
		return (
			<div className="text-center text-yellow-500 font-bold mt-5">
				Loading...
			</div>
		);
	if (!usersData) return;

	return (
		<div className="h-full bg-viking bg-opacity-25">
			<AdminNavigation />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="bg-white shadow-lg rounded-xl overflow-hidden">
						<h1 className="text-4xl font-bold text-caribbean-green px-6 py-4">
							Admin
						</h1>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="text-sm font-medium text-gray-500 bg-gray-50">
										<th className="py-3 px-4 text-left">ID</th>
										<th className="py-3 px-4 text-left">Name</th>
										<th className="py-3 px-4 text-left">Role</th>
										<th className="py-3 px-4 text-left">Actions</th>
									</tr>
								</thead>
								<tbody className="text-sm font-normal text-gray-500 bg-white divide-y divide-gray-200">
									{usersData.map((user: iUser, i) => (
										<tr key={"user-" + i} className="hover:bg-gray-50">
											<td className="py-4 px-6">{i}</td>
											<td className="py-4 px-6">{user.name}</td>
											<td className="py-4 px-6 sm:w-1/4">
												{user.medicalLicense ? "doctor" : "patient"}
											</td>
											<td className="py-4 px-6">
												{!user.deleted ? (
													<Button
														className="py-2 px-4 bg-red-600 hover:bg-red-700 text-black font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
														onClick={() => deleteUser(user._id)}
													>
														Delete
													</Button>
												) : (
													<Button
														className="py-2 px-4 rounded-lg shadow-md bg-viking"
														onClick={() => reactiveUser(user._id)}
													>
														Reactive
													</Button>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<h1 className="text-4xl font-bold text-caribbean-green px-6 py-4"></h1>
				</div>
			</div>
		</div>
	);
}

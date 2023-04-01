import useUsers from "@/hooks/useUsers";
import { iUser } from "@/interface";

export default function Admin() {
	const { usersData, error, deleteUser } = useUsers();

	if (error) return <div>Error loading users</div>;
	if (!usersData) return <div>Loading...</div>;

	return (
		<div>
			<h1>Admin</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Role</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{usersData.map((user: iUser, i) => (
						<tr key={"user-" + i}>
							<td>{i}</td>
							<td>{user.name}</td>
							<td>
								<button onClick={() => deleteUser(user.email)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

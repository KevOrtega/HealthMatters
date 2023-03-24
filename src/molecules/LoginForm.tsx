import { useState } from "react";
import { emailValidator, passwordValidator } from "@/validation";
import Link from "@/atoms/Link";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!emailValidator(email)) {
			alert("Correo electrónico no válido");
			return;
		}
		if (!passwordValidator(password)) {
			alert("Contraseña no válida (debe tener al menos 6 caracteres)");
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email" className="block mb-2">
				Email:
			</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				className="w-full border-b py-2 px-3 mb-4"
			/>
			<label htmlFor="password" className="block mb-2">
				Password:
			</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
				className="w-full border-b py-2 px-3 mb-4"
			/>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="inline-block mr-3 text-right underline"
				>
					Login
				</button>
			</div>
			<div className="flex justify-center items-center my-4 bg-white px-2 text-gray-500 uppercase font-medium tracking-wide">
				<hr className="border-t-1 border-gray-500 w-full" />
				<p className="text-center ">Or</p>
				<hr className="border-b-1 border-gray-500 w-full" />
			</div>

			<Link href="/signup">
				<button
					// onClick={handleSignUp}
					className="inline-block text-left ml-3 bg-green-500 text-black py-2 px-4 rounded-full "
				>
					Sign up
				</button>
			</Link>
		</form>
	);
}

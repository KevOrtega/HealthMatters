import { useState } from "react";

const RegistrationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleGoogleLogin = () => {
		window.location.href = "https://accounts.google.com/login";
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const validateEmail = (email: string) => {
			const emailRegex = /\S+@\S+\.\S+/;
			return emailRegex.test(email);
		};

		const validatePassword = (password: string) => {
			return password.length >= 6;
		};

		if (!validateEmail(email)) {
			alert("Correo electrónico no válido");
			return;
		}
		if (!validatePassword(password)) {
			alert("Contraseña no válida (debe tener al menos 6 caracteres)");
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-3xl mb-6">Welcome to Health Matters</h1>
			<button onClick={handleGoogleLogin}>
				<img
					src="https://th.bing.com/th/id/OIP.KEygYmezNxIdPeCrxbrQ6wHaD_?pid=ImgDet&rs=1"
					alt="Google Logo"
					width="50"
					height="50"
					className="inline-block mr-2"
				/>
				Continue with Google
			</button>
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
				<button type="submit" className="inline-block text-right mr-3 inline-block text-right underline">
					Login
				</button>
			</div>
			<div className="flex justify-center items-center my-4 bg-white px-2 inline-block text-gray-500 uppercase font-medium tracking-wide">
				<hr className="border-t-1 border-gray-500 w-full" />
				<p className="text-center ">Or</p>
				<hr className="border-b-1 border-gray-500 w-full" />
			</div>

			<button className="inline-block text-left ml-3 bg-green-500 text-black py-2 px-4 rounded-full ">Sign up</button>
		</form>
	);
};

export default RegistrationForm;

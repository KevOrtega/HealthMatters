import { useState } from "react";
import { loginFetcher } from "@/requests";
import { emailValidator, passwordValidator } from "@/validation";
import Input from "@/atoms/Input";
import { iLoginCredentials } from "@/interface";

export default function LoginForm() {
	const [credentials, setCredentials] = useState<iLoginCredentials>({
		email: "",
		password: "",
	});

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();

		if (!emailValidator(credentials.email)) {
			alert("Correo electrónico no válido");
			return;
		}
		if (!passwordValidator(credentials.password)) {
			alert(
				"Contraseña no válida (debe tener al menos 8 caracteres, una mayúscula, una minuscula y un número)"
			);
			return;
		}

		const token = loginFetcher(credentials);

		console.log(token);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email" className="block mb-2">
				Email:
			</label>
			<Input
				type="email"
				value={credentials.email}
				onChange={handleChange}
				className="w-full border-b py-2 px-3 mb-4"
			/>
			<label htmlFor="password" className="block mb-2">
				Password:
			</label>
			<Input
				type="password"
				value={credentials.password}
				onChange={handleChange}
				className="w-full border-b py-2 px-3 mb-4"
			/>
			<button type="submit" className="p-2 mr-3 inline-block border-b">
				Login
			</button>
		</form>
	);
}

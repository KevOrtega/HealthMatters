import Input from "@/atoms/Input";
import { iRegisterCredentials } from "@/interface";
import { registerFetcher } from "@/requests";
import {
	emailValidator,
	nameOrLastNameValidator,
	passwordValidator,
} from "@/validation";
import { useState } from "react";

export default function SignUpPatient() {
	const [credentials, setCredentials] = useState<iRegisterCredentials>({
		name: "",
		lastname: "",
		email: "",
		password: "",
	});

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleGoogleLogin = () => {
		window.location.href = "https://accounts.google.com/login";
	};

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
		if (!nameOrLastNameValidator(credentials.name)) {
			alert("nombre no válido (solo admite 29 carácteres)");
			return;
		}
		if (!nameOrLastNameValidator(credentials.lastname)) {
			alert("apellido no válido (solo admite 29 carácteres)");
			return;
		}

		const token = registerFetcher(credentials);

		console.log(token);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full p-10">
			<button
				className="my-3 p-5 w-full text-left shadow-lg rounded-lg"
				onClick={handleGoogleLogin}
			>
				<img
					src="https://th.bing.com/th/id/OIP.KEygYmezNxIdPeCrxbrQ6wHaD_?pid=ImgDet&rs=1"
					alt="Google Logo"
					width="50rem"
					height="50rem"
					className="inline-block mr-2"
				/>
				Continue with Google
			</button>
			<fieldset className="flex flex-col my-4">
				<label htmlFor="name" className="text-lg mb-2 text-left">
					Name:
				</label>
				<Input
					type="text"
					name="name"
					value={credentials.name}
					onChange={handleChange}
					required
				/>
			</fieldset>
			<fieldset className="flex flex-col my-4">
				<label htmlFor="lastname" className="text-lg mb-2 text-left">
					Last Name:
				</label>
				<Input
					type="text"
					name="lastname"
					value={credentials.lastname}
					onChange={handleChange}
					required
				/>
			</fieldset>
			<fieldset className="flex flex-col my-4">
				<label htmlFor="email" className="text-lg mb-2 text-left">
					Email:
				</label>
				<Input
					type="email"
					name="email"
					value={credentials.email}
					onChange={handleChange}
					required
				/>
			</fieldset>
			<fieldset className="flex flex-col my-4">
				<label htmlFor="password" className="text-lg mb-2 text-left">
					Password:
				</label>
				<Input
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleChange}
					required
				/>
			</fieldset>
			<div className="flex items-center justify-between">
				<button type="submit" className="p-2 mr-3 inline-block border-b">
					Sign up
				</button>
			</div>
		</form>
	);
}

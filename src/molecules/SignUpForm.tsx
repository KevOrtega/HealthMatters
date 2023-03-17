import { useState } from "react";
import Signup from "@/pages/api/SignUp";

const SignupFormPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// Realiza la validación correspondiente
		// ...

		// Envía los datos del formulario
		const formData = { firstName, lastName, email, password };
		console.log(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="firstName">Nombre</label>
			<input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />

			<label htmlFor="lastName">Apellido</label>
			<input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />

			<label htmlFor="email">Email</label>
			<input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

			<label htmlFor="password">Contraseña</label>
			<input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

			<button type="submit">Enviar</button>
		</form>
	);
};

export default SignupFormPage;

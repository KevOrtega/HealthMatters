import React, { useState } from "react";

interface FormState {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	medical_license: number;
	zip_code: number;
}

const Form = () => {
	const [formState, setFormState] = useState<FormState>({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		medical_license: 0,
		zip_code: 0,
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	return (
		<form>
			<label htmlFor="Nombre"> Nombre: </label>
			<input
				type="text"
				name="first_name"
				value={formState.first_name}
				placeholder={"Ex: John"}
				onChange={handleInputChange}
				required
			/>

			<label htmlFor="Apellido"> Apellido: </label>
			<input
				type="text"
				name="last_name"
				value={formState.last_name}
				placeholder={"Ex: Doe"}
				onChange={handleInputChange}
				required
			/>

			<br />
			<br />

			<label htmlFor="Email"> E-mail: </label>
			<input
				type="email"
				name="email"
				value={formState.email}
				placeholder={"Ex: myname@example.com"}
				onChange={handleInputChange}
				required
			/>

			<label htmlFor="Contraseña"> Contraseña: </label>
			<input
				type="password"
				name="password"
				value={formState.password}
				placeholder={"********"}
				onChange={handleInputChange}
				required
			/>

			<br />
			<br />

			<label htmlFor="Medical License">Matricula/Licencia Medica:</label>
			<input
				type={"text"}
				name={"medical_License"}
				placeholder={"Must be between 6 and 8 characters"}
				onChange={handleInputChange}
				required
			/>
			<br />
			<br />
			<label htmlFor="Zip Code"> Codigo Postal: </label>
			<input type="text" name="zip_code" placeholder={"Ex: 7600"} onChange={handleInputChange} required />

			<br />
			<br />
			<br />
			<button type="submit">Enviar</button>
		</form>
	);
};

export default Form;

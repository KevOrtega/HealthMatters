import React, { useState } from "react";

interface FormState {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
}

const Form = () => {
	const [formState, setFormState] = useState<FormState>({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	return (
		<form>
			<label htmlFor="Nombre"></label>
			<input type="text" name="first_name" value={formState.first_name} onChange={handleInputChange} />

			<label htmlFor="Apellido"></label>
			<input type="text" />

			<label htmlFor="Email"></label>
			<input type="text" />

			<label htmlFor="Contraseña"></label>
			<input type="text" />
		</form>
	);
};

export default Form;

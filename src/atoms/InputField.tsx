import React, { useState } from "react";

interface InputFieldsProps {
	label: string;
	name: string;
	type: string;
	required?: boolean;
	placeholder?: string;
}

const InputFields = ({
	label,
	name,
	type,
	required = false,
	placeholder,
}: InputFieldsProps) => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<label htmlFor="{name}">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
};

export const FirstNameInput = () => {
	return (
		<InputFields
			type="text"
			label="Nombre: "
			name="first_name"
			placeholder={"Ex: John"}
			required={true}
		/>
	);
};
export const LastNameInput = () => {
	return (
		<InputFields
			type="text"
			label="Apellido: "
			name="first_name"
			placeholder={"Ex: Doe"}
			required={true}
		/>
	);
};
export const EmailInput = () => {
	return (
		<InputFields
			type="email"
			label="E-mail: "
			name="email"
			placeholder={"Ex: myname@example.com"}
			required={true}
		/>
	);
};
export const PasswordInput = () => {
	return (
		<InputFields
			type="password"
			label="Contraseña: "
			name="password"
			placeholder={"********"}
			required={true}
		/>
	);
};
export const LicenseInput = () => {
	return (
		<InputFields
			type="text"
			label="Matricula (RUP): "
			name="medical_license"
			placeholder={"Must be between 6 and 8 characters"}
			required={true}
		/>
	);
};
export const SpecialtyInput = () => {
	return (
		<InputFields
			type="text"
			label="Especialidad medica: "
			name="medical_specialty"
			placeholder={"Ex: Cardiologist"}
			required={true}
		/>
	);
};
export const ZipCodeInput = () => {
	return (
		<InputFields
			type="text"
			label="Codigo Postal: "
			name="zip_code"
			placeholder={"Ex: 7600"}
			required={true}
		/>
	);
};
export const PhoneInput = () => {
	return (
		<InputFields
			type="text"
			label="Telefono: "
			name="phone_number"
			placeholder={"Ex: 054 223-5419716"}
			required={true}
		/>
	);
};

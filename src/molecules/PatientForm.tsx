import { EmailInput, FirstNameInput, LastNameInput, PasswordInput, PhoneInput, ZipCodeInput } from "@/atoms/InputField";

export default function PatientForm() {
	return (
		<div>
			<form>
				PatientForm
				<FirstNameInput /> <LastNameInput />
				<PasswordInput /> <EmailInput />
				<ZipCodeInput /> <PhoneInput />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

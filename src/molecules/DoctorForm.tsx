import {
	EmailInput,
	FirstNameInput,
	LastNameInput,
	LicenseInput,
	PasswordInput,
	PhoneInput,
	SpecialtyInput,
	ZipCodeInput,
} from "@/atoms/InputField";

export default function DoctorForm() {
	return (
		<div>
			<form>
				DoctorForm
				<FirstNameInput /> <LastNameInput />
				<PasswordInput /> <EmailInput />
				<LicenseInput /> <SpecialtyInput />
				<ZipCodeInput /> <PhoneInput />
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

import {
	EmailInput,
	FirstNameInput,
	LastNameInput,
	PasswordInput,
	PhoneInput,
	ZipCodeInput,
} from "@/atoms/InputField";

export default function PatientForm() {
	return (
		<div>
			<form className="container py-4">
				<div className="mt-4 flex justify-end">
					<div className="w-1/2 text-center">
						<h2 className="text-2xl font-bold mb-4">Patient Form</h2>
						<FirstNameInput /> <LastNameInput />
						<PasswordInput /> <EmailInput />
						<ZipCodeInput /> <PhoneInput />
						<button
							type="submit"
							className="ml-2 text-sm text-gray-500 hover:text-gray-700"
						>
							Send
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

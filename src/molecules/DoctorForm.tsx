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
			<form className="container py-1">
				<div className="mt-4 flex justify-end">
					<div className="w-1/2 text-center">
						<h2 className="text-2xl font-bold mb-4">Doctor Form</h2>
						<FirstNameInput /> <LastNameInput />
						<PasswordInput /> <EmailInput />
						<LicenseInput /> <SpecialtyInput />
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

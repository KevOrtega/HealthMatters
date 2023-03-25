export const emailValidator = (email: string) =>
	RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi).test(email);

export const passwordValidator = (password: string) =>
	RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).test(
		password
	);

export const nameOrLastNameValidator = (name: string) =>
	RegExp(/^[A-Za-z][A-Za-z0-9_]{1,29}$/g).test(name);

export const medicalLicenseValidator = (license: string) =>
	RegExp(/^[A-Za-z][A-Za-z]{8}$/g).test(license);

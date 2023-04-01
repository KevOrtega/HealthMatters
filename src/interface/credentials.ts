export type iLoginCredentials = {
	email: string;
	password: string;
};

export type iRegisterCredentials = {
	name: string;
	lastname: string;
	email: string;
	password: string;
	medicalLicense?: string;
};

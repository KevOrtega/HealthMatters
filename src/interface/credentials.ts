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

export interface registerRequest extends iRegisterCredentials {
	specialties?: string[];
}

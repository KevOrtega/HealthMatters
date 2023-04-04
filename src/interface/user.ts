export type iUser = {
	name: string;
	lastname: string;
	email: string;
	password: string;
	medicalLicense?: string;
	image?: string;
};

export type user_response = {
	user: iUser;
	token: string;
};

export type iUser = {
	_id: string;
	name: string;
	lastname: string;
	email: string;
	password: string;
	medicalLicense?: string;
	image?: string;
	specialties?: string[];
	deleted: boolean;
};

export type user_response = {
	user: iUser;
	token: string;
};

export type iUser = {
	name: string;
	email: string;
	password: string;
	medicalLicense?: string;
	image?: string;
};

export type user_state = {
	user: iUser | null;
	token: string | null;
};

export interface user_context extends user_state {
	setUser: (payload: user_state) => void;
}

type set_user_action = {
	type: "SET_USER";
	payload: user_state;
};

export type user_action = set_user_action;

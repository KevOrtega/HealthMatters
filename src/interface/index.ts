export type TitleProps = {
	children: React.ReactNode;
	className?: string;
	type?: "bigger" | "big" | "medium";
};

export type doctor_response = {
	_id: string;
	name: string;
	lastname: string;
	services: string[];
	specialties: string[];
	patients: string[];
	registration: string;
	phoneNumber: number;
	email: string;
	date: string[];
	__v: number;
};

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "pagination" | "submit" | "default";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ImageProps = {
	type:
		| "choose"
		| "map"
		| "medicine"
		| "pay"
		| "search"
		| "tune"
		| "arrow_back"
		| "arrow_forward"
		| "ascendant"
		| "doctor";
	className?: string;
	priority?: boolean;
};

export type InputProps = {
	name?: string;
	className?: string;
	placeholder?: string;
	type?: "search" | "pagination" | "email" | "password" | "text";
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	min?: number;
	max?: number;
	required?: boolean;
};

export type LinkProps = {
	children: React.ReactNode;
	href: string;
	className?: string;
};

export type MainProps = {
	children: React.ReactNode;
	className?: string;
};

export type iService = {
	preferenceId(arg0: string, preferenceId: any): unknown;
	_id: string;
	name: string;
	description: string;
	price: number;
	doctor: string;
	rating: number;
};

export type services_response = {
	services: iService[];
	current_page: number;
	pages: number;
	count: number;
};

export type specialties_response = {
	_id: string;
	name: string;
	doctor: string[];
	__v: number;
};

export interface serviceProps extends iService {
	className?: string;
}

export type service_search = {
	search: string;
	specialties: string[];
	order: string;
	page: number;
};

export interface service_search_context extends service_search {
	dispatch: React.Dispatch<service_search_action>;
}

export type service_search_action = {
	type: "SET_SEARCH" | "SET_SPECIALTIES" | "SET_ORDER" | "SET_PAGE";
	payload: string;
};

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
export interface Date {
	id: number;
	date: string;
	customer: string;
	amount: number;
}

export * from "./user";

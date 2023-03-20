export type TitleProps = {
	children: React.ReactNode;
	className?: string;
	type?: "bigger" | "big" | "medium";
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
		| "ascendant";
	className?: string;
};

export type InputProps = {
	className?: string;
	placeholder?: string;
	type: "search" | "pagination";
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	min?: number;
	max?: number;
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
	name: "string";
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

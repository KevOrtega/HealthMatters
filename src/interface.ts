export type TitleProps = {
	children: React.ReactNode;
	className?: string;
	type?: "bigger" | "big" | "medium";
};

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "submit" | "default";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ImageProps = {
	type: "choose" | "map" | "medicine" | "pay" | "search" | "tune";
	className?: string;
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
	title: string;
	info: string;
	price: number;
	doctor: string;
	rating: number;
};

export interface serviceProps extends iService {
	className?: string;
}

export type service_search = {
	search: string;
	specialties: string[];
	order: string;
};

export interface service_search_context extends service_search {
	dispatch: React.Dispatch<service_search_action>;
}

export type service_search_action = {
	type: "SET_SEARCH" | "SET_SPECIALTIES" | "SET_ORDER";
	payload: string;
};

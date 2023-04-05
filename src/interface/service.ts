export type iService = {
	_id?: string;
	name: string;
	description: string;
	prices: {
		atHome?: number;
		atConsultory?: number;
	};
	specialties: string[];
	doctor: string[];
	rating?: number;
};

export type services_response = {
	services: iService[];
	current_page: number;
	pages: number;
	count: number;
};
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

export type iServiceToBuy = {
	id: string;
	price: number;
	date: Date;
};

export type CartService = {
	_id: string;
	name: string;
	description: string;
	doctor: string[];
	rating: number;
	price: number;
	date: Date;
};

export type CartState = {
	services: CartService[];
	quantity: number;
};

type addToCartAction = {
	type: "ADD_TO_CART";
	payload: { service: CartService };
};

type removeFromCartAction = {
	type: "REMOVE_FROM_CART";
	payload: { service: CartService };
};

export type cartAction = addToCartAction | removeFromCartAction;

export interface CartContextProps extends CartState {
	addToCart: (services: CartService) => void;
	removeFromCart: (services: CartService) => void;
}

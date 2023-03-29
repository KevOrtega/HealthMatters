export type iService = {
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

export type buyServiceResponse = {
	global: string;
};

export type buyServiceRequest = {
	productId: string;
};

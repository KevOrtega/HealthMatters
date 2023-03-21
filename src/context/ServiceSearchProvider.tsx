import React, { useContext, useReducer } from "react";
import {
	service_search,
	service_search_action,
	service_search_context,
} from "@/interface";

const initialState: service_search = {
	search: "",
	specialties: [],
	order: "default",
	page: 1,
};

const serviceSearchContext = React.createContext<service_search_context>({
	...initialState,
	dispatch: () => ({ type: "SET_SEARCH", payload: "" }),
});

export const useServiceSearchContext = () => useContext(serviceSearchContext);

const reducer = (
	state: service_search,
	action: service_search_action
): service_search => {
	const actions = {
		SET_SEARCH: (search: string) => {
			return {
				...state,
				search,
			};
		},
		SET_SPECIALTIES: (specialty: string) => {
			return {
				...state,
				specialties: state.specialties.includes(specialty)
					? state.specialties.filter(
							(specialty_element) => specialty_element !== specialty
					  )
					: [...state.specialties, specialty],
			};
		},
		SET_ORDER: (order: string) => {
			return {
				...state,
				order,
			};
		},
		SET_PAGE: (page: string) => {
			return {
				...state,
				page: Number(page),
			};
		},
	};

	return actions[action.type](action.payload);
};

export function ServiceSearchProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [search, dispatch] = useReducer(reducer, initialState);

	return (
		<serviceSearchContext.Provider
			value={{
				...search,
				dispatch,
			}}
		>
			{children}
		</serviceSearchContext.Provider>
	);
}

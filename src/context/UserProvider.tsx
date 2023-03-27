import { user_action, user_context, user_state } from "@/interface";
import React, { Reducer, useContext, useReducer } from "react";

const initialState: user_state = {
	user: null,
	token: null,
};

const userContext = React.createContext<user_context>({
	...initialState,
	setUser: () => {},
});

export const useUserContext = () => useContext(userContext);

const reducer = (state: user_state, action: user_action) => {
	const actions = {
		SET_USER: () => {
			return { ...state, ...action.payload };
		},
	};

	return actions[action.type]();
};

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, dispatch] = useReducer<Reducer<user_state, user_action>>(
		reducer,
		initialState
	);

	const setUser = (payload: user_state) => {
		dispatch({ type: "SET_USER", payload });
	};

	return (
		<userContext.Provider
			value={{
				...user,
				setUser,
			}}
		>
			{children}
		</userContext.Provider>
	);
}

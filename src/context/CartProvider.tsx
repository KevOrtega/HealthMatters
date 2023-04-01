import { iService } from "@/interface";
import React, { createContext, useContext, useReducer } from "react";
import Swal from "sweetalert2";

interface CartState {
	services: iService[];
	quantity: number;
}

interface CartContextProps extends CartState {
	addToCart: (services: iService) => void;
	removeFromCart: (services: iService) => void;
}

const initialCartState: CartState = {
	quantity: 0,
	services: [],
};

const CartContext = createContext<CartContextProps>({
	...initialCartState,
	addToCart: () => {},
	removeFromCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

const cartReducer = (state: CartState, action: any) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const cart_item_exists = state.services.find(
				(item) => item._id === action.payload.service.id
			);

			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "The service you are trying to add was already added",
			});

			return cart_item_exists
				? {
						...state,
				  }
				: {
						...state,
						quantity: state.quantity + 1,
						services: [...state.services, action.payload.service],
				  };
		case "REMOVE_FROM_CART":
			const existingCartItemIndex = state.services.findIndex(
				(service) => service._id === action.payload.service.id
			);
			return existingCartItemIndex !== -1
				? {
						...state,
						quantity: state.quantity - 1,
						services: [
							...state.services.filter(
								(service) => service._id !== action.payload.service.id
							),
						],
				  }
				: { ...state };
		default:
			return { ...state };
	}
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [{ services, quantity }, dispatch] = useReducer(
		cartReducer,
		initialCartState
	);

	const addToCart = (service: iService) =>
		dispatch({ type: "ADD_TO_CART", payload: { service } });

	const removeFromCart = (service: iService) =>
		dispatch({ type: "REMOVE_FROM_CART", payload: { service } });

	return (
		<CartContext.Provider
			value={{
				services,
				quantity,
				addToCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

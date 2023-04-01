import { iService } from "@/interface";
import React, { createContext, useContext, useReducer } from "react";

interface CartItem {
	services: iService;
	quantity: number;
}

interface CartState {
	cartItems: CartItem[];
}

interface CartContextProps extends CartState {
	addToCart: (services: iService) => void;
	removeFromCart: (services: iService) => void;
}

const initialCartState: CartState = {
	cartItems: [],
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
			const existingCartItem = state.cartItems.find(
				(item) => item.services._id === action.payload.services.id
			);
			if (existingCartItem) {
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.services._id === action.payload.services.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			} else {
				return {
					...state,
					cartItems: [
						...state.cartItems,
						{ services: action.payload.services, quantity: 1 },
					],
				};
			}
		case "REMOVE_FROM_CART":
			const existingCartItemIndex = state.cartItems.findIndex(
				(item) => item.services._id === action.payload.services.id
			);
			if (
				existingCartItemIndex !== -1 &&
				state.cartItems[existingCartItemIndex].quantity > 1
			) {
				return {
					...state,
					cartItems: state.cartItems.map((item, index) =>
						index === existingCartItemIndex
							? { ...item, quantity: item.quantity - 1 }
							: item
					),
				};
			} else {
				return {
					...state,
					cartItems: state.cartItems.filter(
						(item) => item.services._id !== action.payload.services.id
					),
				};
			}
		default:
			return state;
	}
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);

	const addToCart = (services: iService) => {
		console.log(services);
		dispatch({ type: "ADD_TO_CART", payload: { services } });
	};

	const removeFromCart = (services: iService) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: { services } });
	};

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				addToCart,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

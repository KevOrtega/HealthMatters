import {
	CartContextProps,
	CartService,
	CartState,
	cartAction,
	iService,
} from "@/interface";
import React, { createContext, useContext, useReducer } from "react";
import Swal from "sweetalert2";

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

const cartReducer = (state: CartState, action: cartAction) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const cart_item_exists = state.services.find(
				(service) => service._id === action.payload.service._id
			);

			if (cart_item_exists) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "The service you are trying to add was already added",
				});
				return { ...state };
			}

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your service has been added successfully",
				showConfirmButton: false,
				timer: 1500,
			});

			return {
				...state,
				quantity: state.quantity + 1,
				services: [...state.services, action.payload.service],
			};
		case "REMOVE_FROM_CART":
			const existingCartItemIndex = state.services.findIndex(
				(service) => service._id === action.payload.service._id
			);

			if (existingCartItemIndex === -1) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "The service you are trying to delete does not exist",
				});
				return { ...state };
			}

			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your service has been deleted successfully",
				showConfirmButton: false,
				timer: 1500,
			});

			return {
				...state,
				quantity: state.quantity - 1,
				services: [
					...state.services.filter(
						(service) => service._id !== action.payload.service._id
					),
				],
			};
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

	const addToCart = (service: CartService) =>
		dispatch({ type: "ADD_TO_CART", payload: { service } });

	const removeFromCart = (service: CartService) =>
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

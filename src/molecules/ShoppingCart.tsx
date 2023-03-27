import { useCartContext } from "@/context/CartProvider";
import React from "react";

export default function ShoppingCart() {
	const { cartItems, removeFromCart } = useCartContext();

	const total = cartItems.reduce(
		(total, item) => total + item.quantity * item.services.price,
		0
	);

	return (
		<div>
			<h2>My Services</h2>
			<ul>
				{cartItems.map((item) => (
					<li key={item.services._id}>
						{item.services.name} - ${item.services.price} x {item.quantity} = $
						{item.quantity * item.services.price}
						<button onClick={() => removeFromCart(item.services)}>
							Remove from cart
						</button>
					</li>
				))}
			</ul>

			<h2>Total: ${total}</h2>
		</div>
	);
}

import { useCartContext } from "@/context/CartProvider";
import React from "react";

export default function ShoppingCart() {
	const { services, quantity, removeFromCart } = useCartContext();

	const total = services.reduce((prev, { price }) => prev + price, 0);

	return (
		<div>
			<h2>My Services</h2>
			<ul>
				{services.map((service) => (
					<li key={service._id}>
						{service.name} - ${service.price} x {quantity} = $
						{quantity * service.price}
						<button onClick={() => removeFromCart(service)}>
							Remove from cart
						</button>
					</li>
				))}
			</ul>

			<h2>Total: ${total}</h2>
		</div>
	);
}

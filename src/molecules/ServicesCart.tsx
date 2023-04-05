import { useCartContext } from "@/context/CartProvider";
import React from "react";

export default function ServicesCart() {
	const { services, quantity, removeFromCart } = useCartContext();

	const total = services.reduce((prev, { price }) => prev + price, 0);

	return (
		<div className="bg-white rounded-xl shadow-md p-6">
			<h2 className="text-2xl font-bold mb-4">My Services</h2>
			<ul className="divide-y divide-gray-200">
				{services.map((service) => (
					<li
						key={service._id}
						className="flex justify-between items-center py-4"
					>
						<div>
							<h3 className="text-lg font-semibold">{service.name}</h3>
							<p className="text-sm text-gray-500">
								${service.price} x {quantity} = ${quantity * service.price}
							</p>
						</div>
						<button
							onClick={() => removeFromCart(service)}
							className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
						>
							Remove from cart
						</button>
					</li>
				))}
			</ul>
			<div className="mt-6">
				<h2 className="text-2xl font-bold mb-4">Total: ${total}</h2>
				<button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-300">
					Checkout
				</button>
			</div>
		</div>
	);
}

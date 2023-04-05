import Button from "@/atoms/Button";
import Title from "@/atoms/Title";
import { useCartContext } from "@/context/CartProvider";
import useUser from "@/hooks/useUser";
import { buyService } from "@/requests";
import React from "react";
import Swal from "sweetalert2";

export default function ServicesCart() {
	const { services, removeFromCart } = useCartContext();
	const { user } = useUser();

	const total = services.reduce((prev, { price }) => prev + price, 0);

	const buyServiceHandler: React.ReactEventHandler<HTMLButtonElement> = () =>
		user
			? buyService(
					services.map((service) => ({
						id: `${service._id}`,
						price: service.price,
						date: service.date,
					})),
					{
						name: user.name,
						surname: user.lastname,
						email: user.email,
					}
			  ).then(({ global }) => {
					location.href = global;
			  })
			: Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "You should login first",
			  });

	return services.length ? (
		<div className="flex flex-col">
			<Title className="" type="medium">
				My Services
			</Title>
			<ul className="w-full p-6">
				{services.map((service) => (
					<li
						className=" shadow-xl flex items-center justify-between p-5 m-5 font-bold border-2 rounded-xl transition-colors border-egg hover:border-mine-shaft"
						key={service._id}
					>
						{service.name} {service.date.toLocaleDateString()}{" "}
						{service.date.getHours()}:{service.date.getMinutes()}
						{"hs"}
						<span className="text-caribbean-green">${service.price}</span>
						<Button
							className="bg-deep-blush text-white p-3 rounded-md transition-transform hover:scale-105 active:scale-100"
							onClick={() => removeFromCart(service)}
						>
							Remove from cart
						</Button>
					</li>
				))}
			</ul>

			<h2>Total: ${total}</h2>
			<Button className="m-3" type="primary" onClick={buyServiceHandler}>
				buy ${total}
			</Button>
		</div>
	) : (
		<div>you can add services</div>
	);
}

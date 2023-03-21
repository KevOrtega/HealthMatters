import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Title from "@/atoms/Title";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import React from "react";

export default function Order() {
	const { order, dispatch } = useServiceSearchContext();

	const dispatchOrder = (order_selected: string) =>
		dispatch({ type: "SET_ORDER", payload: order_selected });

	const setOrder = (order_selected: "price" | "rating") => {
		const change_order_methods = {
			price: () =>
				order !== "priceASC" && order !== "priceDESC"
					? dispatchOrder("priceASC")
					: order === "priceASC"
					? dispatchOrder("priceDESC")
					: dispatchOrder("default"),
			rating: () =>
				order !== "ratingASC" && order !== "ratingDESC"
					? dispatchOrder("ratingASC")
					: order === "ratingASC"
					? dispatchOrder("ratingDESC")
					: dispatchOrder("default"),
		};

		change_order_methods[order_selected]();
	};

	return (
		<div className="text-mine-shaft bg-white shadow-xl min-w-max rounded-lg w-72 overflow-hidden">
			<Title className="p-5" type="medium">
				Order by
			</Title>
			<Button
				onClick={() => setOrder("price")}
				className={`inline-flex justify-center items-center w-1/2 h-16 p-5 rounded-tr-lg rounded-bl-lg font-bold capitalize transition-colors ${
					order.includes("price") && "bg-anakiwa text-white"
				}`}
			>
				price
				{order.includes("price") && (
					<Image
						className={`text-white h-7 ${
							order === "priceDESC" && "rotate-180"
						} `}
						type="ascendant"
					/>
				)}
			</Button>
			<Button
				onClick={() => setOrder("rating")}
				className={`inline-flex justify-center items-center w-1/2 h-16 p-5 rounded-tl-lg rounded-br-lg font-bold capitalize transition-colors ${
					order.includes("rating") && "bg-anakiwa text-white"
				}`}
			>
				rating
				{order.includes("rating") && (
					<Image
						className={`text-white h-7 ${
							order === "ratingDESC" && "rotate-180"
						} `}
						type="ascendant"
					/>
				)}
			</Button>
		</div>
	);
}

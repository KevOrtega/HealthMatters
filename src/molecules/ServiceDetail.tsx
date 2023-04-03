import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import { useUserContext } from "@/context/UserProvider";
import { buyService } from "@/requests";
import Title from "@/atoms/Title";
import Button from "@/atoms/Button";
import Select from "@/molecules/Select";
import Link from "@/atoms/Link";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import Swal from "sweetalert2";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { user } = useUserContext();
	const { service } = useServicesById(serviceId);
	const { addToCart } = useCartContext();
	const select_options: string[] = [];
	const [date, setDate] = useState(new Date());
	const [price_selected, setPriceSelected] = useState<number | null>();

	if (!service) return;

	service.prices.atConsultory &&
		select_options.push(`at consultory $${service.prices.atConsultory}`);
	service.prices.atHome &&
		select_options.push(`at home $${service.prices.atHome}`);

	const addToCartHandler = () =>
		user && price_selected && date
			? addToCart({
					_id: service._id,
					name: service.name,
					description: service.description,
					price: price_selected,
					rating: service.rating,
					doctor: service.doctor,
					date: date,
			  })
			: Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "You should login first and fulfill all inputs",
			  });

	const handlePriceSelected = (price: string) => {
		price.includes("at consultory") &&
			service.prices.atConsultory &&
			setPriceSelected(service.prices.atConsultory);
		price.includes("at home") &&
			service.prices.atHome &&
			setPriceSelected(service.prices.atHome);
	};

	const buyServiceHandler: React.ReactEventHandler<HTMLButtonElement> = () =>
		user && price_selected && date
			? buyService(
					[
						{
							id: service._id,
							price: price_selected,
							date: date,
						},
					],
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
					text: "You should login first and fulfill all inputs",
			  });

	return (
		<div className="z-10 top-0 absolute w-full h-full flex bg-viking bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25">
			{service && (
				<div className="m-auto w-5/6 h-5/6 flex flex-col shadow-xl bg-white p-5 rounded-xl">
					<Link
						href="/home"
						className="absolute right-0 top-0 px-2 py-1 text-2xl font-bold text-caribbean-green"
					>
						X
					</Link>
					<p className="text-right">{service.rating}⭐</p>
					<Title className="text-4xl" type="medium">
						{service.name}
					</Title>
					<p className="mx-3 mb-5 text-egg">Doctor Gutierrez</p>
					<p className="text-xl indent-1">{service.description}</p>

					<div className="flex items-start m-auto">
						<div className="p-10 w-max flex flex-col items-center justify-center">
							<Title type="medium">Where you want your service?</Title>
							<Select onChange={handlePriceSelected} options={select_options} />
						</div>
						<div className="p-10 w-max flex flex-col items-center justify-center">
							<Title type="medium">When is right for you?</Title>
							<ReactDatePicker
								className="shadow-md transition-shadow hover:shadow-lg active:shadow-md border border-egg outline-none min-w-max w-72 h-20 flex items-center justify-center my-5 p-5 rounded-lg"
								dateFormat="dd-MMM-yyyy hh:mm a"
								showTimeSelect
								showTimeInput
								timeIntervals={30}
								selected={date}
								onChange={(date) => date && setDate(date)}
							/>
						</div>
					</div>

					<div className="flex self-end mt-auto">
						<Button className="m-3" type="primary" onClick={buyServiceHandler}>
							buy ${price_selected}
						</Button>
						<Button className="m-3" type="secondary" onClick={addToCartHandler}>
							add to my services
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import Link from "@/atoms/Link";
import { useUserContext } from "@/context/UserProvider";
import { buyService } from "@/requests";
import Title from "@/atoms/Title";
import Button from "@/atoms/Button";
import Select from "@/molecules/Select";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { user } = useUserContext();
	const { service } = useServicesById(serviceId);
	const { addToCart } = useCartContext();

	const addToCartHandler = () => service && addToCart(service);

	const buyServiceHandler: React.ReactEventHandler<HTMLButtonElement> = () =>
		service &&
		user &&
		buyService(service._id, {
			name: user.name,
			surname: user.lastname,
			email: user.email,
		}).then(({ global }) => {
			location.href = global;
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
							<Select
								options={[
									`at consultory ($${service.price})`,
									`at home ($${service.price})`,
								]}
							/>
						</div>
						<div className="p-10 w-max flex flex-col items-center justify-center">
							<Title type="medium">When is right for you?</Title>
							<input
								className="shadow-md transition-shadow hover:shadow-lg active:shadow-md border border-egg min-w-max w-72 h-20 flex items-center justify-center my-5 p-5 rounded-lg"
								type="date"
							/>
						</div>
					</div>

					<div className="flex self-end mt-auto">
						<Button className="m-3" type="primary" onClick={buyServiceHandler}>
							buy ${service.price}
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

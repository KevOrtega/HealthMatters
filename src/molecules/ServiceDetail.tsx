import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import Link from "@/atoms/Link";
import { useUserContext } from "@/context/UserProvider";
import { buyService } from "@/requests";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { user } = useUserContext();
	const { service } = useServicesById(serviceId);
	const { addToCart, cartItems } = useCartContext();

	const addToCartHandler: React.ReactEventHandler<HTMLButtonElement> = () =>
		service && addToCart(service);

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
		<div>
			{service && (
				<>
					<h1>{service.name}</h1>
					<button onClick={addToCartHandler}>add service to my services</button>
					<button onClick={buyServiceHandler}>buy</button>
				</>
			)}
			{cartItems.length ? (
				<p>Tus servicios: {cartItems.length}</p>
			) : (
				<p>No tienes servicios guardados</p>
			)}
		</div>
	);
}

import { useServicesById } from "@/hooks/useServicesById";
import { useCartContext } from "@/context/CartProvider";
import Link from "@/atoms/Link";

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
	const { service } = useServicesById(serviceId);
	const { addToCart, cartItems } = useCartContext();

	const handleClick: React.ReactEventHandler<HTMLButtonElement> = () =>
		service && addToCart(service);

	return (
		<div>
			{service && (
				<>
					<h1>{service.name}</h1>
					<button onClick={handleClick}>add service to my services</button>
					<Link href={`/buyservice?id=${service._id}`}>
						<button>buy</button>
					</Link>
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

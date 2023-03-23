import Main from "@/atoms/Main";
import CartProvider from "@/context/CartProvider";
import ShoppingCart from "@/molecules/ShoppingCart";

export default function MyServices() {
	return (
		<Main>
			<CartProvider>
				<ShoppingCart />
			</CartProvider>
		</Main>
	);
}

import React, { useState } from "react";

interface Product {
	id: number;
	name: string;
	price: number;
}

interface CartItem {
	product: Product;
	quantity: number;
}

interface Props {
	products: Product[];
}

const ShoppingCart: React.FC<Props> = ({ products }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const addToCart = (product: Product) => {
		const existingCartItem = cartItems.find(
			(item) => item.product.id === product.id
		);

		if (existingCartItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((item) =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{ product, quantity: 1 },
			]);
		}
	};

	const removeFromCart = (product: Product) => {
		const existingCartItem = cartItems.find(
			(item) => item.product.id === product.id
		);

		if (existingCartItem && existingCartItem.quantity > 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((item) =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
			);
		} else {
			setCartItems((prevCartItems) =>
				prevCartItems.filter((item) => item.product.id !== product.id)
			);
		}
	};

	const total = cartItems.reduce(
		(total, item) => total + item.quantity * item.product.price,
		0
	);

	return (
		<div>
			<h2>Products</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - ${product.price}
						<button onClick={() => addToCart(product)}>Add to cart</button>
					</li>
				))}
			</ul>

			<h2>Cart</h2>
			<ul>
				{cartItems.map((item) => (
					<li key={item.product.id}>
						{item.product.name} - ${item.product.price} x {item.quantity} = $
						{item.quantity * item.product.price}
						<button onClick={() => removeFromCart(item.product)}>
							Remove from cart
						</button>
					</li>
				))}
			</ul>

			<h2>Total: ${total}</h2>
		</div>
	);
};

export default ShoppingCart;

//*Explicacion para kev mañana, asi entiende que quise hacer. defini tres interfases Product, CartItem y Props.
//la primera describe los productos que se pueden añadir al carrito de compras,
//la segunda describe los elementos en el carrito de compras y la tercera es utilizada para describir
// las propiedade que recibe el componente. El componente ShoppingCart recibe una lista de productos y
//muestra una lista de los mismos con un botón para agregarlos al carrito.
//También muestra los elementos en el carrito y un botón para eliminarlos.
//El componente utiliza el estado para almacenar los elementos en el carrito y
//las funciones addToCart y removeFromCart para actualizar el estado del carrito.
//Finalmente, se calcula el total de la compra y se muestra en la página

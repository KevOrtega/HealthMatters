import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { UserProvider } from "@/context/UserProvider";
import CartProvider from "@/context/CartProvider";

export default function _app({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>HealthMatters</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<UserProvider>
				<CartProvider>
					<Component {...pageProps} />
				</CartProvider>
			</UserProvider>
		</div>
	);
}

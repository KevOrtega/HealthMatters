import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import CartProvider from "@/context/CartProvider";
import { ServiceSearchProvider } from "@/context/ServiceSearchProvider";

export default function _app({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<Head>
				<title>HealthMatters</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<ServiceSearchProvider>
				<CartProvider>
					<Component {...pageProps} />
				</CartProvider>
			</ServiceSearchProvider>
		</div>
	);
}

import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "../molecules/Navbar";

export default function _app({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<Navbar />
				<title>HealthMatters</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

import { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import "@/styles/globals.css";

export default function _app({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>HealthMatters</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

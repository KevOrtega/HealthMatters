import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { UserProvider } from "@/context/UserProvider";

export default function _app({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>HealthMatters</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</div>
	);
}

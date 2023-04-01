import React from "react";
declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
declare global {
	interface Window {
		MercadoPago: any;
	}
}

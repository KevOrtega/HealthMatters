import { MainProps } from "@/interface";
import React from "react";

export default function Main({ className, ...props }: MainProps) {
	return (
		<main
			className={"min-h-screen w-full lg:w-screen " + className}
			{...props}
		/>
	);
}

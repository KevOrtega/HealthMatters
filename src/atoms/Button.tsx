import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary" | "submit" | "navButton";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ type = "primary", ...props }: ButtonProps) {
	const button_types = {
		primary: () => <button {...props}></button>,
		secondary: () => <button {...props}></button>,
		submit: () => <button {...props}></button>,
		navButton: () => (
			<button className="bg-teal-400 hover:bg-teal-200 text-green 800 font-semibold py-2 px-4 rounded" {...props}></button>
		),
	};
	return button_types[type]();
}

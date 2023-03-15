type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary" | "submit";
};

export default function Button({ type = "primary", ...props }: ButtonProps) {
	const button_types = {
		primary: () => (
			<button
				className="bg-deep-sea w-40 h-16 text-white text-xl font-bold capitalize shadow-lg rounded-xl transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default"
				{...props}
			/>
		),
		secondary: () => (
			<button
				className="bg-transparent w-40 h-16 text-deep-sea text-xl font-bold capitalize shadow-lg rounded-xl outline outline-4 outline-deep-sea transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default"
				{...props}
			/>
		),
		submit: () => <button {...props} />,
	};
	return button_types[type]();
}

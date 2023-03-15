import { ButtonProps } from "@/interface";

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
		navButton: () => (
			<button className="bg-teal-400 hover:bg-teal-200 text-green 800 font-semibold py-2 px-4 rounded" {...props}></button>
		),
	};
	return button_types[type]();
}

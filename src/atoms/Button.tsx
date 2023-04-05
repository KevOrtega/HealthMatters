import { ButtonProps } from "@/interface";

export default function Button({
	className,
	type = "default",
	...props
}: ButtonProps) {
	const button_types = {
		primary: () => (
			<button
				className={
					"bg-deep-sea w-full md:w-56 h-16 text-white text-xl md:text-base font-bold capitalize shadow-lg rounded-xl transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default " +
					className
				}
				{...props}
			/>
		),
		secondary: () => (
			<button
				className={
					"bg-transparent w-full md:w-56 h-16 text-deep-sea text-xl md:text-base font-bold capitalize shadow-lg rounded-xl border-solid border-4 border-deep-sea transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default " +
					className
				}
				{...props}
			/>
		),
		pagination: () => <button className={className} {...props} />,
		submit: () => (
			<button
				className={
					"p-2 md:p-4 md:mr-3 inline-block border-b border-kaitoke-green text-kaitoke-green " +
					className
				}
				{...props}
			/>
		),
		default: () => (
			<button className={"cursor-default " + className} {...props} />
		),
	};
	return button_types[type]();
}

import { ButtonProps } from "@/interface";

export default function Button({ className, type = "default", ...props }: ButtonProps) {
	const button_types = {
		primary: () => (
			<button
				className={
					"bg-deep-sea w-56 h-16 text-white text-xl font-bold capitalize shadow-lg rounded-xl transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default " +
					className
				}
				{...props}
			/>
		),
		secondary: () => (
			<button
				className={
					"bg-transparent w-56 h-16 text-deep-sea text-xl font-bold capitalize shadow-lg rounded-xl border-solid border-4 border-deep-sea transition-transform hover:-translate-y-0.5 hover:opacity-80 active:-translate-y-0 cursor-default " +
					className
				}
				{...props}
			/>
		),
		submit: () => <button className={className} {...props} />,
		default: () => <button className={className} {...props} />,
	};
	return button_types[type]();
}

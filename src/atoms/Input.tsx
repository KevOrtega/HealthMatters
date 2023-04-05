import { InputProps } from "@/interface";

export default function Input({
	className,
	type = "text",
	...props
}: InputProps) {
	const input_types = {
		search: () => (
			<input className={"px-5 outline-none " + className} {...props} />
		),
		pagination: () => (
			<input
				type="number"
				className={
					"outline-none w-12 sm:w-20 border-egg text-center " + className
				}
				{...props}
			/>
		),
		email: () => (
			<input
				type="email"
				className={
					"outline-none w-full border-b border-egg py-2 px-3 " + className
				}
				{...props}
			/>
		),
		password: () => (
			<input
				type="password"
				className={
					"outline-none w-full border-b border-egg py-2 px-3 " + className
				}
				{...props}
			/>
		),
		text: () => (
			<input
				className={
					"outline-none w-full border-b border-egg py-2 px-3 " + className
				}
				{...props}
			/>
		),
	};

	return input_types[type]();
}

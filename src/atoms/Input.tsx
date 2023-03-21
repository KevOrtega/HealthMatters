import { InputProps } from "@/interface";

export default function Input({ className, type, ...props }: InputProps) {
	const input_types = {
		search: () => (
			<input className={"px-5 outline-none " + className} {...props} />
		),
		pagination: () => (
			<input
				type="number"
				className={"outline-none w-12 " + className}
				{...props}
			/>
		),
	};

	return input_types[type]();
}

export default function Input({
	className,
	type,
	...props
}: {
	className?: string;
	placeholder?: string;
	type: "search";
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}) {
	const input_types = {
		search: () => (
			<input className={"px-5 outline-none " + className} {...props} />
		),
	};

	return input_types[type]();
}

import { TitleProps } from "@/interface";

export default function Title({
	className,
	type = "bigger",
	...props
}: TitleProps) {
	const title_types: Record<string, Function> = {
		bigger: () => (
			<h1
				className={
					"text-5xl sm:text-7xl md:text-9xl text-white font-handwrite font-bold " +
					className
				}
				{...props}
			/>
		),
		big: () => (
			<h2
				className={
					"text-3xl sm:text-4xl md:text-5xl text-deep-sea font-handwrite font-bold " +
					className
				}
				{...props}
			/>
		),
		medium: () => (
			<h3 className={"text-xl sm:text-2xl font-bold " + className} {...props} />
		),
	};

	return title_types[type]();
}

type TitleProps = {
	children: React.ReactNode;
	type?: "bigger" | "big" | "medium";
};

export default function Title({ type = "bigger", ...props }: TitleProps) {
	const title_types: Record<string, Function> = {
		bigger: () => <h1 {...props} />,
		big: () => <h2 {...props} />,
		medium: () => <h3 {...props} />,
	};

	return title_types[type]();
}

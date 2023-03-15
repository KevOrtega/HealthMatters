import { TitleProps } from "@/interface";

export default function Title({ type = "bigger", ...props }: TitleProps) {
	const title_types: Record<string, Function> = {
		bigger: () => <h1 className="text-9xl text-white font-handwrite font-bold" {...props} />,
		big: () => <h2 {...props} />,
		medium: () => <h3 {...props} />,
	};

	return title_types[type]();
}

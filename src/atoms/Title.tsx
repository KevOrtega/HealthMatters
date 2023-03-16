import { TitleProps } from "@/interface";

export default function ({ className, type = "bigger", ...props }: TitleProps) {
	const title_types: Record<string, Function> = {
		bigger: () => <h1 className={"text-9xl text-white font-handwrite font-bold " + className} {...props} />,
		big: () => <h2 className={"text-4xl text-deep-sea font-handwrite font-bold " + className} {...props} />,
		medium: () => <h3 {...props} />,
	};

	return title_types[type]();
}

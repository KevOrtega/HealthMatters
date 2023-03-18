export type TitleProps = {
	children: React.ReactNode;
	className?: string;
	type?: "bigger" | "big" | "medium";
};

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "submit" | "default";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ImageProps = {
	type: "choose" | "map" | "medicine" | "pay" | "search" | "tune";
	className?: string;
};

export type LinkProps = {
	children: React.ReactNode;
	href: string;
	className?: string;
};

export type MainProps = {
	children: React.ReactNode;
	className?: string;
};

export type iService = {
	title: string;
	info: string;
	price: number;
	doctor: string;
	rating: number;
};

export type TitleProps = {
	children: React.ReactNode;
	type?: "bigger" | "big" | "medium";
};

export type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary" | "submit";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type LinkProps = {
	children: React.ReactNode;
	href: string;
	className: string;
};

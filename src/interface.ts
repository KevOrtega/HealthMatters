export type TitleProps = {
	children: React.ReactNode;
	type?: "bigger" | "big" | "medium";
};

export type ButtonProps = {
	children: React.ReactNode;
	type?: "primary" | "secondary" | "submit" | "navButton";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

import { iService } from "./service";

export type TitleProps = {
	children: React.ReactNode;
	className?: string;
	type?: "bigger" | "big" | "medium";
};

export type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "pagination" | "submit" | "default";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
};

export type ImageProps = {
	type:
		| "choose"
		| "map"
		| "medicine"
		| "pay"
		| "search"
		| "tune"
		| "arrow_back"
		| "arrow_forward"
		| "ascendant"
		| "doctor"
		| "error";
	className?: string;
	priority?: boolean;
};

export type InputProps = {
	name?: string;
	className?: string;
	placeholder?: string;
	type?: "search" | "pagination" | "email" | "password" | "text";
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	min?: number;
	max?: number;
	required?: boolean;
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
export interface serviceProps extends iService {
	className?: string;
}

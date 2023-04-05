import { LinkProps } from "@/interface";
import LinkNext from "next/link";

export default function Link({ className, ...props }: LinkProps) {
	return (
		<LinkNext
			className={
				"text-blue-500 hover:text-blue-600 focus:text-blue-600 " + className
			}
			{...props}
		/>
	);
}

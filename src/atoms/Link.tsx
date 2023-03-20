import { LinkProps } from "@/interface";
import LinkNext from "next/link";

export default function Link({ className, ...props }: LinkProps) {
	return <LinkNext className={className} {...props} />;
}

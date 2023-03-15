import { LinkProps } from "@/interface";
import Link from "next/link";

export default function LinkAtom({ className, ...props }: LinkProps) {
	return <Link className={className} {...props} />;
}

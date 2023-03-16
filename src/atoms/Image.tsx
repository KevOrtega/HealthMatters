import { ImageProps } from "@/interface";
import Image from "next/image";
import MedicineSVG from "../assets/medicine.svg";

export default function ({ type, className }: ImageProps) {
	const image_types = {
		medicine: () => <Image className={className} src={MedicineSVG} alt="medicine" />,
	};

	return image_types[type]();
}

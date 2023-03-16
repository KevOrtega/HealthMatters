import { ImageProps } from "@/interface";
import Image from "next/image";
import ChooseSVG from "../assets/choose.svg";
import MedicineSVG from "../assets/medicine.svg";
import MapSVG from "../assets/map.svg";
import PaySVG from "../assets/pay.svg";
import SearchSVG from "../assets/search.svg";
import TuneSVG from "../assets/tune.svg";

export default function ImageAtom({ type, className }: ImageProps) {
	const image_types = {
		choose: () => <Image className={className} src={ChooseSVG} alt="choose" />,
		map: () => <Image className={className} src={MapSVG} alt="map" />,
		medicine: () => <Image className={className} src={MedicineSVG} alt="medicine" />,
		pay: () => <Image className={className} src={PaySVG} alt="pay" />,
		search: () => <Image className={className} src={SearchSVG} alt="search" />,
		tune: () => <Image className={className} src={TuneSVG} alt="tune" />,
	};

	return image_types[type]();
}

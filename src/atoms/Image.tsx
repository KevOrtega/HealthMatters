import { ImageProps } from "@/interface";
import ImageNext from "next/image";
import ChooseSVG from "../assets/choose.svg";
import MedicineSVG from "../assets/medicine.svg";
import MapSVG from "../assets/map.svg";
import PaySVG from "../assets/pay.svg";
import SearchSVG from "../assets/search.svg";
import TuneSVG from "../assets/tune.svg";
import ArrowBack from "../assets/arrow_back.svg";
import ArrowForward from "../assets/arrow_forward.svg";

export default function Image({ type, className }: ImageProps) {
	const image_types = {
		choose: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={ChooseSVG}
				alt="choose"
			/>
		),
		map: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={MapSVG}
				alt="map"
			/>
		),
		medicine: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={MedicineSVG}
				alt="medicine"
			/>
		),
		pay: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={PaySVG}
				alt="pay"
			/>
		),
		search: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={SearchSVG}
				alt="search"
			/>
		),
		tune: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={TuneSVG}
				alt="tune"
			/>
		),
		arrow_back: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={ArrowBack}
				alt="back"
			/>
		),
		arrow_forward: () => (
			<ImageNext
				className={"w-auto h-auto " + className}
				src={ArrowForward}
				alt="forward"
			/>
		),
	};

	return image_types[type]();
}

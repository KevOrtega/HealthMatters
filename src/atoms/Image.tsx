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
import Ascendant from "../assets/ascendant.svg";
import Doctor from "../assets/doctor.svg";
import Error from "../assets/error.svg";

export default function Image({
	priority = false,
	type,
	className,
}: ImageProps) {
	const image_types = {
		choose: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={ChooseSVG}
				alt="choose"
			/>
		),
		map: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={MapSVG}
				alt="map"
			/>
		),
		medicine: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={MedicineSVG}
				alt="medicine"
			/>
		),
		pay: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={PaySVG}
				alt="pay"
			/>
		),
		search: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={SearchSVG}
				alt="search"
			/>
		),
		tune: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={TuneSVG}
				alt="tune"
			/>
		),
		arrow_back: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={ArrowBack}
				alt="back"
			/>
		),
		arrow_forward: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={ArrowForward}
				alt="forward"
			/>
		),
		ascendant: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto invert ${className}`}
				src={Ascendant}
				alt="ascendant"
			/>
		),
		doctor: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={Doctor}
				alt="doctor"
			/>
		),
		error: () => (
			<ImageNext
				priority={priority}
				className={`w-full sm:w-auto h-auto ${className}`}
				src={Error}
				alt="error"
			/>
		),
	};

	return image_types[type]();
}

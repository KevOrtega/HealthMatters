import { useState } from "react";
import Button from "@/atoms/Button";

export default function infoPopUp() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupToggle = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<div className="relative">
			<Button onClick={handlePopupToggle}>Ver información</Button>
			{isPopupOpen && (
				<div className="absolute top-0 right-0 bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
					<p>Aquí va la información que deseas mostrar</p>
				</div>
			)}
		</div>
	);
}

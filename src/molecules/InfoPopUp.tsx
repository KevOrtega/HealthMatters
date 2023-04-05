import { useState } from "react";
import Button from "@/atoms/Button";

export default function infoPopUp() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupToggle = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<div className="relative">
			<Button className="sm:text-sm lg:text-lg" onClick={handlePopupToggle}>
				Ver información
			</Button>
			{isPopupOpen && (
				<div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
					<div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
						<p>Aquí va la información que deseas mostrar</p>
					</div>
				</div>
			)}
		</div>
	);
}

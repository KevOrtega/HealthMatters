import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import useSpecialties from "@/hooks/useSpecialties";
import { useState } from "react";
import { specialties_response } from "@/interface";

export default function ChooseSpecialties() {
	const { specialties } = useSpecialties();
	const { specialties: specialties_choosen, dispatch } =
		useServiceSearchContext();
	const [specialties_section, setSpecialtiesSection] = useState(1);

	const getSpecialtiesSliced = (specialties: specialties_response[]) =>
		specialties?.slice(5 * (specialties_section - 1), 5 * specialties_section);

	return (
		<ul className="w-full py-5 px-10 flex items-center justify-around text-egg">
			{specialties_section !== 1 && (
				<li>
					<button
						onClick={() => setSpecialtiesSection(specialties_section - 1)}
						className="w-6 -rotate-90 rounded-full bg-viking transition-transform hover:scale-105 active:scale-100"
					>
						<Image type="ascendant" />
					</button>
				</li>
			)}
			{specialties &&
				getSpecialtiesSliced(specialties).map(({ name: specialty, _id }) => (
					<li key={_id}>
						<Button
							onClick={() =>
								dispatch({ type: "SET_SPECIALTIES", payload: _id })
							}
							className={`mx-2 ${
								specialties_choosen.includes(_id)
									? "text-mine-shaft transition-transform hover:scale-105 active:scale-100"
									: "transition-all hover:scale-105 active:text-mine-shaft active:scale-100"
							}`}
						>
							{specialty}
						</Button>
					</li>
				))}
			{specialties?.length && specialties.length / 5 > specialties_section && (
				<li>
					<button
						onClick={() => setSpecialtiesSection(specialties_section + 1)}
						className="w-6 rotate-90 rounded-full bg-viking transition-transform hover:scale-105 active:scale-100"
					>
						<Image type="ascendant" />
					</button>
				</li>
			)}
		</ul>
	);
}

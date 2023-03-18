import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import { useServiceSearchContext } from "@/hooks/ServiceSearchProvider";
import useSpecialties from "@/hooks/useSpecialties";

const Filter = () => {
	const { specialties } = useSpecialties();
	const { specialties: specialties_choosen, dispatch } =
		useServiceSearchContext();

	// todo: more than one specialty should be capable of filtering (maybe useReducer)
	return (
		<div>
			<ul className="w-full py-5 px-10 flex items-center justify-around text-egg">
				{specialties &&
					specialties.map((specialty, i) => (
						<li key={i}>
							<Button
								onClick={() =>
									dispatch({ type: "SET_SPECIALTIES", payload: specialty })
								}
								className={
									specialties_choosen.includes(specialty)
										? "text-mine-shaft transition-transform hover:scale-105 active:scale-100"
										: "transition-all hover:scale-105 active:text-mine-shaft active:scale-100"
								}
							>
								{specialty}
							</Button>
						</li>
					))}
				<li>
					<Button className="flex items-center shadow-md text-mine-shaft font-bold py-4 px-8 rounded-md transition-shadow hover:shadow-lg active:shadow-md">
						Filter <Image className="w-5 ml-4" type="tune" />
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default Filter;

import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Order from "@/molecules/Order";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import useSpecialties from "@/hooks/useSpecialties";
import { useState } from "react";
import { specialties_response } from "@/interface";
import { motion } from "framer-motion";

const Specialities = () => {
	const { specialties } = useSpecialties();
	const { specialties: specialties_choosen, dispatch } =
		useServiceSearchContext();
	const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
	const [specialties_section, setSpecialtiesSection] = useState(1);

	const getSpecialtiesSliced = (specialties: specialties_response[]) =>
		specialties?.slice(5 * (specialties_section - 1), 5 * specialties_section);

	const popupVariants = {
		open: {
			opacity: 1,
			scale: 1,
			translateY: "0%",
			transition: { duration: 0.2, overflowY: "unset" },
		},
		closed: {
			opacity: 0,
			scale: 0.5,
			translateY: "-50%",
			transition: { duration: 0.2 },
		},
	};

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
							className={
								specialties_choosen.includes(_id)
									? "text-mine-shaft transition-transform hover:scale-105 active:scale-100"
									: "transition-all hover:scale-105 active:text-mine-shaft active:scale-100"
							}
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
			<li className="relative">
				<Button
					className="flex h-14 items-center shadow-md text-mine-shaft font-bold py-4 px-8 rounded-md transition-shadow hover:shadow-lg active:shadow-md"
					onClick={() => setIsOrderOpen(!isOrderOpen)}
				>
					Order <Image className="h-full ml-4" type="tune" />
				</Button>
				<motion.div
					style={{
						backgroundColor: "#cefcd5",
						width: "100%",
						height: "100%",
						left: "-50%",
					}}
					className="z-10 absolute top-full mt-2 right-0"
					variants={popupVariants}
					initial="closed"
					animate={isOrderOpen ? "open" : "closed"}
				>
					<Order />
				</motion.div>
			</li>
		</ul>
	);
};

export default Specialities;

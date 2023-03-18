import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import useSpecialities from "@/hooks/useSpecialities";

const Filter = () => {
	const { specialities } = useSpecialities();

	return (
		<div>
			<ul className="w-full py-5 px-10 flex items-center justify-around text-egg">
				{specialities &&
					specialities.map((speciality, i) => (
						<li key={i}>
							<Button className="transition-colors active:text-mine-shaft">{speciality}</Button>
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

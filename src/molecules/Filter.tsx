import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import { useState } from "react";

const Filter = () => {
	const [filters, setFilters] = useState<string[]>(["surgeon", "pediatric", "dentistry", "traumatologist", "orthopedics"]);

	return (
		<div>
			<ul className="w-full py-5 px-10 flex items-center justify-around text-egg">
				{filters.map((filter, i) => (
					<li key={i}>
						<Button className="transition-colors active:text-mine-shaft">{filter}</Button>
					</li>
				))}
				<li>
					<Button className="flex items-center shadow-xl text-mine-shaft font-bold py-3 px-6 rounded-md">
						Filter <Image className="w-5 ml-4" type="tune" />
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default Filter;

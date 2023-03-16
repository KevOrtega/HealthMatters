import { useState } from "react";

const Filter = () => {
	const [filters, setFilters] = useState<string[]>(["Pediatra", "lalala"]);

	const listStyles = "list-disc pl-8";

	return (
		<div>
			<ul className={listStyles}>
				{filters.map((filter, i) => (
					<li key={i}>{filter}</li>
				))}
			</ul>
		</div>
	);
};

export default Filter;

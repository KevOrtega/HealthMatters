import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import { useState } from "react";

export default function Select({ options }: { options?: string[] }) {
	const [selection_open, setSelectionOpen] = useState(false);
	const [selected, setSelected] = useState(`${options ? options[0] : ""}`);

	const switchSelectionOpen = () => setSelectionOpen(!selection_open);

	return (
		<div className="relative">
			<Button
				onClick={switchSelectionOpen}
				className="shadow-md transition-shadow hover:shadow-lg active:shadow-md border border-egg min-w-max w-72 h-20 flex items-center justify-center my-5 rounded-lg"
			>
				{selected}
				<div className="w-7">
					<Image className="rotate-180 invert-0" type="ascendant" />
				</div>
			</Button>
			{selection_open && (
				<div className="flex flex-col absolute min-w-max w-72 h-20 text-center top-full mt-3">
					{options?.map((option, i) => (
						<div key={option + i}>
							<Button
								onClick={() => setSelected(option)}
								className="cursor-default transition-transform hover:scale-105 active:scale-100 py-5"
							>
								{option}
							</Button>
							{i !== options.length - 1 && (
								<hr className="w-4/5 mx-auto text-egg" />
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

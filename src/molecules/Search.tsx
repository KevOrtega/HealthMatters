import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Input from "@/atoms/Input";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import React, { useState } from "react";

function SearchBar() {
	const [query, setQuery] = useState("");
	const { dispatch } = useServiceSearchContext();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({
			type: "SET_SEARCH",
			payload: query,
		});
	};

	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(value);
	};

	const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
		key === "Enter" &&
			dispatch({
				type: "SET_SEARCH",
				payload: query,
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center w-1/3 h-full shadow-xl rounded-full overflow-hidden"
		>
			<Input
				className="w-full h-full"
				type="search"
				value={query}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder="find your service"
			/>
			<Button type="submit" className="p-2">
				<Image className="h-4/5 rotate-90" type="search" />
			</Button>
		</form>
	);
}

export default SearchBar;

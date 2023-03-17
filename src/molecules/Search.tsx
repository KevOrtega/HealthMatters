import React, { useState } from "react";

function SearchBar() {
	const [query, setQuery] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center justify-center mb-4">
			<input type="text" value={query} onChange={handleChange} className="border-2 border-gray-400 rounded py-2 px-4" />
			<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
				Search
			</button>
		</form>
	);
}

export default SearchBar;

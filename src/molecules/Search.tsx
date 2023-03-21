import Input from "@/atoms/Input";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";

function SearchBar() {
	const { search, dispatch } = useServiceSearchContext();

	const handleChange = ({
		target: { value: payload },
	}: React.ChangeEvent<HTMLInputElement>) =>
		dispatch({ type: "SET_SEARCH", payload });

	return (
		<Input
			className="w-1/3 shadow-xl rounded-full h-full"
			type="search"
			value={search}
			onChange={handleChange}
			placeholder="find your service"
		/>
	);
}

export default SearchBar;

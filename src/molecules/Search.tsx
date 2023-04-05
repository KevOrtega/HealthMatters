import Input from "@/atoms/Input";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";

export default function SearchBar() {
	const { search, dispatch } = useServiceSearchContext();

	const handleChange = ({
		target: { value: payload },
	}: React.ChangeEvent<HTMLInputElement>) =>
		dispatch({ type: "SET_SEARCH", payload });

	return (
		<Input
			className="w-full md:w-1/2 lg:w-1/3 shadow-xl rounded-full h-full px-4 py-2 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
			type="search"
			value={search}
			onChange={handleChange}
			placeholder="Find your service"
		/>
	);
}

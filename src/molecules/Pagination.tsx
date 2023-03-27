import Input from "@/atoms/Input";
import Image from "@/atoms/Image";
import Button from "@/atoms/Button";
import { useServiceSearchContext } from "@/context/ServiceSearchProvider";
import useServices from "@/hooks/useServices";
import { useEffect, useState } from "react";

export default function Pagination() {
	const { order, search, specialties, page, dispatch } =
		useServiceSearchContext();
	const { pages } = useServices(search, specialties, order, page);
	const [current_page, setCurrentPage] = useState<string>(page.toString());

	useEffect(() => {
		page !== Number(current_page) && setCurrentPage(page.toString());
	}, [page, setCurrentPage]);

	useEffect(() => {
		setPage("1");
	}, [order, search, specialties]);

	const setPage = (page: string) =>
		Number(page) >= 1 &&
		(pages ? Number(page) <= pages : true) &&
		dispatch({
			type: "SET_PAGE",
			payload: page,
		});

	const handleChangePage = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => setCurrentPage(value);

	const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) =>
		key === "Enter" && setPage(current_page);

	return (
		<div className="flex justify-end items-center">
			{page > 1 && (
				<Button
					onClick={() => setPage((Number(current_page) - 1).toString())}
					className="m-3 h-5"
					type="pagination"
				>
					<Image className="h-full" type="arrow_back" />
				</Button>
			)}
			<Input
				type="pagination"
				onChange={handleChangePage}
				onClick={() => setPage(current_page)}
				onKeyDown={handleKeyDown}
				onBlur={() => setPage(current_page)}
				value={current_page}
				max={pages}
				min={1}
			/>
			&nbsp; of {pages || 1}
			{!!pages && page < pages && (
				<Button
					onClick={() => setPage((Number(current_page) + 1).toString())}
					className="m-3 h-5"
					type="pagination"
				>
					<Image className="h-full" type="arrow_forward" />
				</Button>
			)}
		</div>
	);
}

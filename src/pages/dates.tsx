import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import useDates from "@/hooks/useDates";

const DatesPage = () => {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const { dates, error } = useDates();

	useEffect(() => {
		if (dates && chartRef.current) {
			new Chart(chartRef.current, {
				type: "pie",
				data: {
					labels: dates.map((date) => date.customer),
					datasets: [
						{
							data: dates.map((date) => date.amount),
							backgroundColor: [
								"#FF6384",
								"#36A2EB",
								"#FFCE56",
								"#00FF00",
								"#FF00FF",
								"#FFFF00",
							],
						},
					],
				},
			});
		}
	}, [dates]);

	if (error) return <div>Failed to load dates</div>;
	if (!dates) return <div>Loading dates...</div>;

	return (
		<>
			<h1>Dates</h1>
			<canvas ref={chartRef}></canvas>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Date</th>
						<th>Customer</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{dates.map((date) => (
						<tr key={date.id}>
							<td>{date.id}</td>
							<td>{date.date}</td>
							<td>{date.customer}</td>
							<td>{date.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default DatesPage;

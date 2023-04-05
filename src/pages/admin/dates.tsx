// import React from 'react'
// import { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";
// import useDates from "@/hooks/useDates";

// export default function DatesChart() {
//     const chartRef = useRef<HTMLCanvasElement>(null);
//     const { dates, error } = useDates();

//     useEffect(() => {
//       if (dates && chartRef.current) {
//           new Chart(chartRef.current, {
//               type: "pie",
//               data: {
//                   labels: dates.map((date) => date.customer),
//                   datasets: [
//                       {
//                           data: dates.map((date) => date.amount),
//                           backgroundColor: [
//                               "#FF6384",
//                               "#36A2EB",
//                               "#FFCE56",
//                               "#00FF00",
//                               "#FF00FF",
//                               "#FFFF00",
//                           ],
//                       },
//                   ],
//               },
//           });
//       }
//   }, [dates]);

//   if (error) return <div>Failed to load dates</div>;
//   if (!dates) return <div>Loading dates...</div>;

//   if (error) return <div className="text-center text-red-600 font-bold mt-5">Failed to load dates</div>;
//     if (!dates) return <div className="text-center text-yellow-500 font-bold mt-5">Loading dates...</div>;

//     return (
//       <div className="h-full bg-viking bg-opacity-25">
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="px-4 py-6 sm:px-0">
//             <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//              <h1 className="text-4xl font-bold text-caribbean-green px-6 py-4">Dates</h1>
//               <canvas ref={chartRef}></canvas>
//               <table className="table-auto w-full">
//                 <thead>
//                   <tr className="text-sm font-medium text-gray-500 bg-gray-50">
//                     <th className="py-3 px-4 text-left">ID</th>
//                     <th className="py-3 px-4 text-left">Date</th>
//                     <th className="py-3 px-4 text-left">Customer</th>
//                     <th className="py-3 px-4 text-left">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-sm font-normal text-gray-500 bg-white divide-y divide-gray-200">
//                   {dates.map((date,i) => (
//                     <tr key={`date-${i}`} className="hover:bg-gray-50">
//                       <td className="py-4 px-6">{date.id}</td>
//                       <td className="py-4 px-6">{date.date}</td>
//                       <td className="py-4 px-6">{date.customer}</td>
//                       <td className="py-4 px-6">{date.amount}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
import React, { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import AdminNavigation from "@/molecules/AdminNavigation";

export default function DatesChart() {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const [dates, setDates] = useState<
		Array<{ id: number; date: string; customer: string; amount: number }>
	>([
		{ id: 1, date: "2022-01-01", customer: "Customer A", amount: 100 },
		{ id: 2, date: "2022-01-02", customer: "Customer B", amount: 200 },
		{ id: 3, date: "2022-01-03", customer: "Customer C", amount: 300 },
		{ id: 4, date: "2022-01-04", customer: "Customer D", amount: 400 },
		{ id: 5, date: "2022-01-05", customer: "Customer E", amount: 500 },
	]);

	useEffect(() => {
		if (dates && chartRef.current) {
			// Destruye el gráfico anterior, si existe
			const previousChart = Chart.getChart(chartRef.current);
			if (previousChart) {
				previousChart.destroy();
			}
			// Crea un nuevo gráfico
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

	return (
		<div className="min-h-screen bg-viking bg-opacity-25">
			<AdminNavigation />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="bg-white shadow-lg rounded-xl overflow-hidden">
						<h1 className="text-4xl font-bold text-caribbean-green px-6 py-4">
							Dates
						</h1>
						<div className="flex flex-col md:flex-row">
							<div className="w-full md:w-2/3 md:pr-6">
								<canvas ref={chartRef}></canvas>
							</div>
							<div className="w-full md:w-1/3">
								<table className="table-auto w-full">
									<thead>
										<tr className="text-sm font-medium text-gray-500 bg-gray-50">
											<th className="py-3 px-4 text-left">ID</th>
											<th className="py-3 px-4 text-left">Date</th>
											<th className="py-3 px-4 text-left">Customer</th>
											<th className="py-3 px-4 text-left">Amount</th>
										</tr>
									</thead>
									<tbody className="text-sm font-normal text-gray-500 bg-white divide-y divide-gray-200">
										{dates.map((date, i) => (
											<tr key={`date-${i}`} className="hover:bg-gray-50">
												<td className="py-4 px-6">{date.id}</td>
												<td className="py-4 px-6">{date.date}</td>
												<td className="py-4 px-6">{date.customer}</td>
												<td className="py-4 px-6">{date.amount}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

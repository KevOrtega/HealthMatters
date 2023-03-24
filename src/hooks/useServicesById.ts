import useSWR from "swr";

interface Service {
	id: string;
	name: string;
	description: string;
}

const API_URL = "https://healthmattersapi-production.up.railway.app/services";

export const useServicesById = (id: string) => {
	const url = `${API_URL}?id=${id}`;
	const { data: service, error } = useSWR<Service>(url, async (url) => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Error al obtener el servicio");
		}
		const data = await response.json();
		return data[0];
	});

	return {
		service,
		isLoading: !service && !error,
		isError: error,
	};
};

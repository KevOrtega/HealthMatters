import { iService } from "./../interface";
import { Fetcher } from "swr";
import axios, { AxiosResponse } from "axios";

export const services_URL = "http://localhost:3000/api/services";

export const servicesFetcher: Fetcher<
	{ pages: number; results: iService[] },
	string
> = (url: string) =>
	axios
		.get(url)
		.then(
			({ data }: AxiosResponse<{ pages: number; results: iService[] }>) => data
		);

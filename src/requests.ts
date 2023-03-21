import {
	doctor_response,
	services_response,
	specialties_response,
} from "@/interface";
import { Fetcher } from "swr";
import axios, { AxiosResponse } from "axios";

export const servicesFetcher: Fetcher<services_response, string> = (url) =>
	axios.get(url).then(({ data }: AxiosResponse<services_response>) => data);

export const specialtiesFetcher: Fetcher<specialties_response[], string> = (
	url
) =>
	axios
		.get(url)
		.then(({ data }: AxiosResponse<specialties_response[]>) => data);

export const doctorByIdFetcher: Fetcher<doctor_response, string> = (url) =>
	axios.get(url).then(({ data }: AxiosResponse<doctor_response>) => data);

import { Fetcher } from "swr";
import axios, { AxiosResponse } from "axios";

export const specialties_URL = "http://localhost:3000/api/specialties";

export const specialtiesFetcher: Fetcher<string[], string> = (url: string) =>
	axios.get(url).then(({ data }: AxiosResponse<string[]>) => data);

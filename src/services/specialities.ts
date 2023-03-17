import { Fetcher } from "swr";
import axios, { AxiosResponse } from "axios";

export const specialities_URL = "http://localhost:3000/api/specialities";

export const specialitiesFetcher: Fetcher<string[], string> = (url: string) =>
	axios.get(url).then(({ data }: AxiosResponse<string[]>) => data);

import {
	doctor_response,
	iLoginCredentials,
	iRegisterCredentials,
	iService,
	services_response,
	specialties_response,
	user_state,
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

export const serviceByIdFetcher: Fetcher<iService> = async (url: string) =>
	axios.get(url).then(({ data }: AxiosResponse<iService>) => data);

export const loginFetcher = (
	credentials: iLoginCredentials
): Promise<user_state> =>
	axios.post(process.env.login_url || "", credentials).then(({ data }) => data);

export const registerFetcher = (
	credentials: iRegisterCredentials
): Promise<user_state> =>
	axios
		.post(process.env.register_url || "", credentials)
		.then(({ data }) => data);

export const validateDoctorFetcher = (token: string): Promise<void> =>
	axios.post(process.env.register_url || "", token);

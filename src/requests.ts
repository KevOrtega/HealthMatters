import {
	Date as iDate,
	doctor_response,
	iLoginCredentials,
	iRegisterCredentials,
	iService,
	iUser,
	services_response,
	specialties_response,
	iServiceToBuy,
	iPatient,
	user_response,
	registerRequest,
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
): Promise<user_response> =>
	axios.post(process.env.login_url || "", credentials).then(({ data }) => data);

export const registerFetcher = (
	credentials: registerRequest
): Promise<user_response> =>
	axios
		.post(process.env.register_url || "", credentials)
		.then(({ data }) => data);

export const validateUserFetcher = (url: string): Promise<iUser> =>
	axios.get(url, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("login_token")}`,
		},
	});

export const buyService = (services: iServiceToBuy[], patient: iPatient) =>
	axios
		.post(`${process.env.checkout_url}`, {
			services,
			patient,
			path_success: "https://health-matters.vercel.app/",
			path_error: "https://health-matters.vercel.app/",
		})
		.then(({ data }) => data);

export const usersFetcher = (url: string): Promise<iUser[]> =>
	axios(url).then((res) => res.data);

export const datesFetcher = (url: string): Promise<iDate[]> =>
	axios.get(url).then((res) => res.data);

export const googleLoginFetcher = (url: string): Promise<string> =>
	axios.get(url).then(({ data }) => data);

export const getUser = (url: string): Promise<iUser> =>
	axios
		.get(url, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("login_token")}`,
			},
		})
		.then(({ data }) => data);

import axios, { AxiosRequestConfig } from "axios";

export function Axios(params: AxiosRequestConfig) {
	return axios({
		// baseURL: "",
		...params,
	});
}

import axios, { AxiosRequestConfig } from "axios";


import { LOCAL_STORAGE_KEYS } from "../constant";
import { AxiosResponseSuccess } from "./types";

function createHttpClient() {
  return axios.create({
    baseURL: "http://localhost:3000",
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest<SuccessPayload>(
  config: AxiosRequestConfig
): Promise<AxiosResponseSuccess<SuccessPayload>> {
  const headersToSend: any = {};
  const tokenFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

  const token = tokenFromLocalStorage
    ? JSON.parse(tokenFromLocalStorage)
    : null;

  headersToSend["Authorization"] = `Bearer ${token}`;

  return httpClient.request<SuccessPayload>({
    headers: {
      ...headersToSend,
    },
    ...config,
  });
}

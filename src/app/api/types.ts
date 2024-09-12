import { AxiosError, AxiosResponse } from "axios";

export type BackendErrorInfo = {
  error: {
    code: string;
    message: string;
  };
};

export type AxiosResponseError = AxiosError<BackendErrorInfo>;

export type AxiosResponseSuccess<Data> = AxiosResponse<Data>;

export interface Data {
  email: string;
  password: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export interface Token {
  token: string;
}
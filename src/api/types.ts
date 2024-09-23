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

export interface User {
  userId: number;
  name: string;
  lastName: string;
  role: string;
  password: string;
  email: string;
  phone: string;
  address: string; 
  token: string | null;
  refreshToken: string | null;
  tokenExpiringIn: string;
}

export interface Product {
  id: number,
  title: string;
  description?: string
  price: number
  media: string[]; 
  category?: string;
  compareAtPrice?: number
  quantity?: number
}

export interface Order {
  orderId: number;
  ownerId: number;
  products: Product[];
  payment?: boolean;
  createdAt?: string;
  
}
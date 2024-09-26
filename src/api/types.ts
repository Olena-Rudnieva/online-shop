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

export interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  deliveryCountry: string;
  city: string;
  street?: string;
  house?: string;
  apartment?: string;
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

export interface CartType {
  product: Product;
  quantityInCart: number;
}

export interface Payment {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  deliveryCountry: string;
  city: string;
  address?: string;
  deliveryType: string;
  status: string;  
  products: CartType[]
}


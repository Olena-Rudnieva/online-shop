import { AxiosResponse } from 'axios';
import { apiPaths } from './apiPaths';
import { deleteData, getData, patchData, postData } from './crudHandlers';
import { Product, Payment } from './types';

export const apiHandlers = {


  products: {
    list(): Promise<AxiosResponse<Product[]>> {
      return getData<Product[]>(apiPaths.products.getProducts());
    },
    getProduct(id: number): Promise<AxiosResponse<Product>> {
      return getData<Product>(apiPaths.products.getOneProduct(id));
    },
    create(data: Partial<Product>): Promise<AxiosResponse<Product>> {
      return postData<Product>(apiPaths.products.createProduct(), { data });
    },
    update(data: { id: number; product: Partial<Product> }): Promise<AxiosResponse<Product>> {
      return patchData<Product>(apiPaths.products.updateProduct(data.id), { data: data.product });
    },
    delete(id: number): Promise<AxiosResponse<void>> {
      return deleteData<void>(apiPaths.products.deleteProduct(id));
    },
  },
  payments: {
  create(data: Partial<Payment>): Promise<AxiosResponse<Payment>> {
    return postData<Payment>(apiPaths.payments.createPayment(), { data });
  },
  
  },
};

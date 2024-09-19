import { AxiosResponse } from 'axios';
import { apiPaths } from './apiPaths';
import { deleteData, getData, patchData, postData } from './crudHandlers';
import { AxiosResponseSuccess, Data, RefreshToken, Token, User, Order, Product } from './types';

export const apiHandlers = {
  auth: {
    login(data: Data): Promise<AxiosResponse<User>> {
      return postData<User>(apiPaths.auth.login(), { data });
    },
    register(data: Partial<User>): Promise<AxiosResponse<User>> {
      return postData<User>(apiPaths.auth.register(), { data });
    },
    refreshToken(data: RefreshToken): Promise<AxiosResponse<Token>> {
      return postData<Token>(apiPaths.auth.refreshToken(), { data });
    },
    requestResetPassword(data: { email: string }): Promise<AxiosResponse<Token>> {
      return postData<Token>(apiPaths.auth.requestResetPassword(), { data });
    },
    resetPassword(data: { password: string; token: string }): Promise<AxiosResponse<Token>> {
      return postData<Token>(apiPaths.auth.resetPassword(), { data });
    },
  },
  users: {
    list(): Promise<AxiosResponse<User[]>> {
      return getData<User[]>(apiPaths.users.getUsers());
    },
    create(data: Partial<User>): Promise<AxiosResponse<User>> {
      return postData<User>(apiPaths.users.createUser(), { data });
    },
    update(data: { id: number; user: Partial<User> | FormData }): Promise<AxiosResponse<User>> {
      return patchData<User>(apiPaths.users.updateUser(data.id), { data: data.user });
    },
    delete(id: number): Promise<AxiosResponse<void>> {
      return deleteData<void>(apiPaths.users.deleteUser(id));
    },
    getOne(id: number): Promise<AxiosResponse<User>> {
      return getData<User>(apiPaths.users.getOneUser(id));
    },
    updatePassword(data: { userId: number; pass: { password: string } }): Promise<AxiosResponse<User>> {
      return patchData<User>(apiPaths.users.updatePassword(data.userId), { data: data.pass });
    },
  },
  orders: {
    list(userId?: number): Promise<AxiosResponse<Order[]>> {
      return getData<Order[]>(apiPaths.orders.getOrders(userId));
    },
    getOrder(id: number): Promise<AxiosResponse<Order>> {
      return getData<Order>(apiPaths.orders.getOneOrder(id));
    },
    create(data: Partial<Order> | FormData): Promise<AxiosResponse<Order>> {
      return postData<Order>(apiPaths.orders.createOrder(), { data });
    },
    update(data: { id: number; order: Partial<Order> | FormData }): Promise<AxiosResponse<Order>> {
      return patchData<Order>(apiPaths.orders.updateOrder(data.id), { data: data.order });
    },
    delete(id: number): Promise<AxiosResponse<void>> {
      return deleteData<void>(apiPaths.orders.deleteOrder(id));
    },
  },
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
};

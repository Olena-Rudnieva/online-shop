export const apiPaths = {
    auth: {
      login: () => "/users/login",
      register: () => "/users/register",
      refreshToken: () => "/users/refresh-token",
      requestResetPassword: () => "/users/request-password-reset",
      resetPassword: () => `/users/reset-password`,
    },
    users: {
      getUsers: () => "/users",
      deleteUser: (userId: number) => `/users/${userId}`,
      createUser: () => "/users",
      updateUser: (id: number) => `/users/${id}`,
      getOneUser: (id: number) => `/users/${id}`,
      updatePassword: (userId: number) => `/users/changePassword/${userId}`,
    },
    products: {
        getProducts: () => "/products",
        getOneProduct: (id: number) => `/products/${id}`,
        createProduct: () => "/products",
        updateProduct: (id: number) => `/products/${id}`,
        deleteProduct: (id: number) => `/products/${id}`,
      },
    orders: {
      getOrders: (userId?: number) =>
        userId ? `/orders?ownerId=${userId}` : `/orders`,
      getOneOrder: (id: number) => `/orders/${id}`,
      createOrder: () => "/orders",
      updateOrder: (id: number) => `/orders/${id}`,
      deleteOrder: (id: number) => `/orders/${id}`,
    },
  };
  
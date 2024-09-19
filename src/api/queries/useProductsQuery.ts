import { useQuery } from '@tanstack/react-query';
import { apiHandlers } from '../apiHandlers';
import { QUERY_KEYS } from '@/constant';

export const useProductsQuery = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.PRODUCTS],
      queryFn:  () =>  apiHandlers.products.list().then((data) => data.data)
   

    });
  };

  export const useProductQuery = (id: number) => {
    return useQuery({
      queryKey: [QUERY_KEYS.PRODUCT, id],
      queryFn:  () => apiHandlers.products.getProduct(id).then((data) => data.data),
    });
  };


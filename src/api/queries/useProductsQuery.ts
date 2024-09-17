import { useQuery } from '@tanstack/react-query';
import { apiHandlers } from '../apiHandlers';
import { QUERY_KEYS } from '@/constant';

export const useProductsQuery = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.PRODUCTS],
      queryFn: async () => {
        const response = await apiHandlers.products.list();
        return response.data;
      }
    });
  };

  export const useProductQuery = (id?: number) => {
    return useQuery({
      queryKey: [QUERY_KEYS.PRODUCT, id],
      queryFn: async () => {
        if (id === undefined) {
          throw new Error('Product ID is required');
        }
        const response = await apiHandlers.products.getProduct(id);
        return response.data;
      }
    });
  };

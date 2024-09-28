import { CartType } from '@/api';

export const calculateTotalAmount = (cart: CartType[]) => {
  const totalAmount = cart.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantityInCart;
  }, 0);

  return totalAmount;
};

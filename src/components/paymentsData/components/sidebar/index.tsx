import { CartType } from '@/api';
import { calculateTotalAmount } from '@/utils';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  cartItems: CartType[];
}

export const Sidebar = ({ cartItems }: SidebarProps) => {
  const { t } = useTranslation();
  const totalAmount = calculateTotalAmount(cartItems);

  return (
    <div className=" border border-gray-200 bg-gray-50 px-[30px] pt-[30px] pb-[15px] w-full lg:w-[400px] md:mt-[30px]">
      <h3 className="text-[24px] md:text-[32px] text-customDarkGray leading-[44px] tracking-[0.6px] mb-[40px]">
        {t('payments.sidebar_title')}
      </h3>
      {cartItems.map((cart) => (
        <div key={cart.product.id} className="flex gap-[30px] mb-4">
          <img
            src={cart.product.media[0]}
            alt={cart.product.title}
            className="w-[80px] h-[80px] object-contain"
          />
          <div>
            <h4 className="text-sm font-medium mb-[8px]">
              {cart.product.title}
            </h4>
            <p className="text-xs text-gray-500 mb-[8px]">
              ₴{cart.product.price}
            </p>
            <p className="text-xs text-gray-500">
              {t('modal.quantity')} {cart.quantityInCart}
            </p>
          </div>
        </div>
      ))}

      <p>
        <span className="font-bold text-[20px]">
          {t('payments.sidebar_total')}:{' '}
        </span>{' '}
        {totalAmount.toFixed(2)}
        {t('cart.currency')}
      </p>
    </div>
  );
};

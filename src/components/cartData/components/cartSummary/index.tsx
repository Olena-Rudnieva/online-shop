'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '../../../button';
import { Product } from '@/api';
import { useRouter } from 'next/navigation';
import { calculateTotalAmount } from '@/utils';

interface CartSummaryProps {
  cart: {
    product: Product;
    quantityInCart: number;
  }[];
}

export const CartSummary = ({ cart }: CartSummaryProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const totalAmount = calculateTotalAmount(cart);

  const handleCheckout = () => {
    router.push('/payments');
  };

  return (
    <div className="p-4 md:col-span-1 flex flex-col items-end">
      <div className="flex gap-[20px]">
        <h2 className="text-lg font-bold mb-4">{t('cart.estimated_total')}</h2>
        <p className="text-right text-xl font-semibold">
          {t('cart.currency_sign')}
          {totalAmount.toFixed(2)} {t('cart.currency')}
        </p>
      </div>
      <p className="text-gray-500 text-sm mt-1">{t('cart.taxes_included')}</p>
      <p className="text-gray-500 text-sm mb-6">
        {t('cart.discounts_shipping')}
      </p>
      <Button
        className="bg-customDarkGray text-white hover:bg-customDarkGrayDark w-[350px]"
        onClick={handleCheckout}
      >
        {t('cart.check_out')}
      </Button>
    </div>
  );
};

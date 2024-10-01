'use client';

import { ProductCard } from '../productCard';
import { Filters } from '../filters';
import { Product } from '@/api';
import { useTranslation } from 'react-i18next';
import { useFilterContext } from '@/context';

interface ProductsSectionProps {
  products?: Product[];
}

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const { t } = useTranslation();

  const { minPrice, maxPrice } = useFilterContext();

  if (!products) {
    return <div> {t('home.no_products')}</div>;
  }

  const filteredProducts = products.filter((product) => {
    const price = product.price;
    return (
      (minPrice === null || price >= minPrice) &&
      (maxPrice === null || price <= maxPrice)
    );
  });

  return (
    <div className="relative w-full flex justify-center ">
      <div className="px-[15px] md:px-[32px] lg:px-[50px] pt-[20px] lg:pt-[25px] pb-[20px] lg:pb-[36px] w-full max-w-[1200px]">
        <h2 className="text-foreground text-[40px] leading-[52px] tracking-[0.6px] mb-[60px]">
          {t('home.products_title')}
        </h2>
        <Filters />
        <div className="flex flex-col justify-center items-center md:flex-row lg:gap-[8px] gap-[8px]">
          {filteredProducts.map((card) => (
            <ProductCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import { Product } from '@/api';
import { useTranslation } from 'react-i18next';
import { Carousel } from '../carousel';
import { Counter } from '../counter';
import { useCount, useModal } from '../../hooks';
import { useCart } from '@/context';
import { Modal } from '../modal';
import { AddToCartModal } from '../modal/components';
import { Button } from '../button';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const router = useRouter();

  console.log('product', product);

  const {
    quantity,
    activeImage,
    handleIncrement,
    handleDecrement,
    handleImageClick,
  } = useCount(product.media);

  const { isOpen, openModal, closeModal } = useModal();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openModal();
  };

  const handleCheckout = () => {
    addToCart(product, quantity);
    router.push('/payments');
  };

  return (
    <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex flex-col md:flex-row gap-[50px] w-full max-w-[1200px]">
      <div className="flex flex-col items-center">
        <img
          src={activeImage}
          alt={`${product.title} large`}
          className="w-[315px] md:w-[605px] h-[315px] md:h-[605px] object-contain"
        />
        <Carousel
          items={product.media.map((image) => ({ id: image, media: image }))}
          renderSlide={(item) => (
            <img
              src={item.media}
              alt={`${product.title} thumbnail`}
              onClick={() => handleImageClick(item.media)}
              className={`w-[60px] md:w-[100px] h-[60px] md:h-[100px] object-contain cursor-pointer border ${
                activeImage === item.media ? 'border-black' : 'border-gray-300'
              }`}
            />
          )}
        />
      </div>

      <div className="flex flex-col w-[345px]">
        <p className="text-customGray text-[10px] leading-[12px] tracking-[1.3px] uppercase">
          {t('product_details.store_name')}
        </p>
        <h2 className="text-foreground text-[30px] md:text-[40px] leading-[52px] tracking-[0.6px] mb-[15px]">
          {product.title}
        </h2>
        <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] ">
          {t('cart.currency_sign')}
          {product.price} {t('home.currency')}
        </p>
        <p className="text-[12px] text-customGray leading-[20px] tracking-[0.7px] mb-[15px]">
          {t('product_details.taxes')}
        </p>
        <p className="text-[13px] text-customGray leading-[20px] tracking-[0.4px]">
          {t('product_details.quantity_text')} ({quantity} {''}
          {t('product_details.in_cart')})
        </p>
        <Counter
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <div className="flex flex-col gap-[10px] mb-[20px]">
          <Button
            onClick={handleAddToCart}
            className="w-full hover:border-black"
          >
            {t('product_details.button_add')}
          </Button>
          <Button
            className="bg-customDarkGray text-white w-full hover:bg-customDarkGrayDark"
            onClick={handleCheckout}
          >
            {t('product_details.button_buy')}
          </Button>
        </div>
        <div className="overflow-y-auto max-h-[400px]">
          <p
            className="text-[16px] text-customGray leading-[28px] tracking-[0.6px]"
            dangerouslySetInnerHTML={{
              __html:
                product.description || 'product_details.default_description',
            }}
          />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <AddToCartModal product={product} quantity={quantity} />
      </Modal>
    </div>
  );
};

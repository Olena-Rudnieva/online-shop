import { Product } from "@/api";

interface ProductCardProps {
  card: Product;
}

export const ProductCard = ({ card }: ProductCardProps) => {
  return (
    <div>
      <img
        src={card.image}
        alt={card.title}
        className="w-[269px] h-[269px] mb-[20px]"
      />
      <h3 className="text-[13px] text-customGray leading-[17px] tracking-[0.6px]">
        {card.title}
      </h3>
      <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] mb-[66px]">
        ₴{card.price} UAH
      </p>
    </div>
  );
};

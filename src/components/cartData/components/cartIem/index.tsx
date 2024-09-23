import { Product } from "@/api";
import DeleteIcon from "../../../../../public/icons/delete.svg";
import { Counter } from "@/components/counter";
import { useCount } from "@/hooks";
import { useTranslation } from "react-i18next";

interface CartItemProps {
  item: {
    product: Product;
    quantityInCart: number;
  };
  removeFromCart: (productId: number) => void;
}

export const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  const { t } = useTranslation();
  const { handleDecreaseQuantity, handleIncreaseQuantity } = useCount();

  return (
    <tr key={item.product.id} className="border-b">
      <td className="py-4">
        <div className="flex justify-start items-center">
          <img
            src={item.product.media[0]}
            alt={item.product.title}
            className="w-[80px] h-[80px] object-contain mr-4"
          />
          <div>
            <h4>{item.product.title}</h4>
            <p className="text-gray-500">
              {t("cart.currency_sign")}
              {Number(item.product.price).toFixed(2)}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 text-center">
        <div className="flex gap-[20px] justify-center items-center">
          <Counter
            quantity={item.quantityInCart}
            handleDecrement={() => handleDecreaseQuantity(item.product.id)}
            handleIncrement={() => handleIncreaseQuantity(item.product.id)}
          />
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-customDarkGray hover:text-red-700 w-[20px] h-[20px]"
          >
            <DeleteIcon />
          </button>
        </div>
      </td>
      <td className="py-4 text-right">
        {t("cart.currency_sign")}
        {(Number(item.product.price) * item.quantityInCart).toFixed(2)}
      </td>
    </tr>
  );
};

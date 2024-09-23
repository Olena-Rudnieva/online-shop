import { Product } from "@/api";
import { useTranslation } from "react-i18next";
import { CartItem } from "../cartIem";
import { useCount } from "@/hooks";

interface CartTableProps {
  cart: {
    product: Product;
    quantityInCart: number;
  }[];
  removeFromCart: (productId: number) => void;
}

export const CartTable = ({ cart, removeFromCart }: CartTableProps) => {
  const { t } = useTranslation();

  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b-2 border-gray-300 py-2 text-left uppercase">
            {t("cart.product")}
          </th>
          <th className="border-b-2 border-gray-300 py-2 text-center uppercase">
            {t("cart.quantity")}
          </th>
          <th className="border-b-2 border-gray-300 py-2 text-right uppercase">
            {t("cart.total")}
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </tbody>
    </table>
  );
};

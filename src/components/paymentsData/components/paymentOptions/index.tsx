"use client";

import { useTranslation } from "react-i18next";

interface PaymentOptionsProps {
  paymentType: string;
  setPaymentType: (type: string) => void;
}

export const PaymentOptions = ({
  paymentType,
  setPaymentType,
}: PaymentOptionsProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-[32px] text-customDarkGray leading-[44px] tracking-[0.6px] mb-[40px]">
        {t("payments.payment_title")}
      </h2>

      <div
        className={`relative w-full pl-[60px] py-[30px] pr-[30px] mb-[20px] border-2 ${
          paymentType === "bankTransfer"
            ? "border-customLightGray"
            : "border-none"
        }`}
      >
        <label className="flex items-center absolute top-[30px] left-[20px]">
          <input
            type="radio"
            value="bankTransfer"
            checked={paymentType === "bankTransfer"}
            onChange={() => setPaymentType("bankTransfer")}
            className="custom-radio"
          />
        </label>

        <div>
          <p className="text-[16px]">
            {t("payments.payment_bank_transfer_title")}
          </p>
        </div>
      </div>

      <div
        className={`relative w-full pl-[60px] py-[30px] pr-[30px] mb-[20px] border-2 ${
          paymentType === "cashOnDelivery"
            ? "border-customLightGray"
            : "border-none"
        }`}
      >
        <label className="flex items-center absolute top-[30px] left-[20px]">
          <input
            type="radio"
            value="cashOnDelivery"
            checked={paymentType === "cashOnDelivery"}
            onChange={() => setPaymentType("cashOnDelivery")}
            className="custom-radio"
          />
        </label>

        <div>
          <p className="text-[16px]">
            {t("payments.payment_cash_on_delivery_title")}
          </p>
        </div>
      </div>
    </>
  );
};

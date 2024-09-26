"use client";

import { Button } from "../button";
import { ContactForm, DeliveryOptions, PaymentOptions } from "./components";
import { usePaymentsData } from "./hooks";
import { useTranslation } from "react-i18next";

export const PaymentsData = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    errors,
    selectedCity,
    setSelectedCity,
    setValue,
    deliveryType,
    setDeliveryType,
    paymentType,
    setPaymentType,
    branchControl,
    branchErrors,
    branchesLoading,
    branchesError,
    branchOptions,
    onBranchSelect,
    onSubmit,
  } = usePaymentsData();

  return (
    <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex flex-col w-full mx-auto max-w-[1200px]">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-[40px] text-customDarkGray leading-[52px] tracking-[0.6px] mb-[40px]">
          {t("payments.title")}
        </h1>
        <ContactForm
          control={control}
          errors={errors}
          setSelectedCity={setSelectedCity}
          setValue={setValue}
        />

        <DeliveryOptions
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          branchControl={branchControl}
          branchErrors={branchErrors}
          branchesLoading={branchesLoading}
          branchesError={branchesError}
          control={control}
          errors={errors}
          branchOptions={branchOptions}
          onBranchSelect={onBranchSelect}
        />

        <PaymentOptions
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />

        <div className="flex justify-end w-full mt-[40px]">
          <Button
            className="bg-customDarkGray text-white w-[300px] hover:bg-customDarkGrayDark"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {t("payments.submit")}
          </Button>
        </div>
      </div>
    </div>
  );
};

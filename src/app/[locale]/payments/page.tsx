"use client";

import { useCart } from "@/context";
import { useTranslation } from "react-i18next";
import { FieldValues, useForm } from "react-hook-form";
import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { contactsFormSchema } from "@/shemas";

export interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  deliveryCountry: string;
  city: string;
}

export default function Payments() {
  const { cart } = useCart();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(contactsFormSchema),
  });

  useEffect(() => {
    setValue("deliveryCountry", t("payments.country_ukraine"));
  }, [setValue, t]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex flex-col w-full mx-auto max-w-[1200px]">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-[40px] text-customDarkGray leading-[52px] tracking-[0.6px] mb-[40px]">
          {t("payments.title")}
        </h1>
        <form className="flex flex-wrap gap-[30px] w-[900px] justify-between">
          <Input
            name="firstName"
            label={t("payments.first_name")}
            control={control}
            error={errors.firstName}
          />

          <Input
            name="lastName"
            label={t("payments.last_name")}
            control={control}
            error={errors.lastName}
          />

          <Input
            name="phoneNumber"
            label={t("payments.phone")}
            placeholder="+38 (0__) ___ __ __"
            control={control}
            type="tel"
            error={errors.phoneNumber}
          />

          <Input
            name="email"
            label={t("payments.email")}
            control={control}
            type="email"
            error={errors.email}
          />

          <Input
            name="deliveryCountry"
            label={t("payments.country")}
            placeholder={t("payments.select_country")}
            control={control}
            defaultValue="Україна"
            disabled
          />

          <Input
            name="city"
            label={t("payments.city")}
            control={control}
            error={errors.city}
          />

          <div className="ml-auto">
            <Button
              className="bg-customDarkGray text-white w-[300px] hover:bg-customDarkGrayDark"
              onClick={handleSubmit(onSubmit)}
            >
              {t("payments.submit")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

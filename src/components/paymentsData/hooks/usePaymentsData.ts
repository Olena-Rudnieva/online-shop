import { useEffect, useState } from "react";
import { useCart } from "@/context";
import { useBranchesQuery, useCreatePaymentMutation, UserData } from "@/api";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactsFormSchema } from "@/shemas";
import { useTranslation } from "react-i18next";

interface Branch {
  id: string;
  description: string;
}

export const usePaymentsData = () => {
  const { cart } = useCart();
  const { t } = useTranslation();
  const { mutate: createElementMutation } = useCreatePaymentMutation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(contactsFormSchema),
  });

  const {
    control: branchControl,
    handleSubmit: handleBranchSubmit,
    formState: { errors: branchErrors },
  } = useForm<{ selectedBranch: string }>();

  const [selectedCity, setSelectedCity] = useState<null | {
    Ref: string;
    Description: string;
  }>(null);
  const [selectedBranchDescription, setSelectedBranchDescription] =
    useState<string>("");

  const [deliveryType, setDeliveryType] = useState<string>("novaPoshta");
  const [paymentType, setPaymentType] = useState<string>("bankTransfer");

  const {
    data: branches,
    isLoading: branchesLoading,
    error: branchesError,
  } = useBranchesQuery(selectedCity?.Ref);

  useEffect(() => {
    if (branches && branches.length > 0) {
      setSelectedBranchDescription(branches[0].description);
    }
  }, [branches]);

  useEffect(() => {
    setValue("deliveryCountry", t("payments.country_ukraine"));
  }, [setValue, t]);

  const branchOptions = branches
    ? branches.map((branch: Branch) => ({
        value: branch.id,
        label: branch.description,
      }))
    : [];

  const onBranchSelect = (selectedBranchId: string) => {
    const selectedBranch = branches.find(
      (branch: Branch) => branch.id === selectedBranchId
    );
    if (selectedBranch) {
      setSelectedBranchDescription(selectedBranch.description);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const address =
      deliveryType === "courier"
        ? [data.street, data.house, data.apartment].filter(Boolean).join(", ")
        : selectedBranchDescription ||
          [data.street, data.house, data.apartment].filter(Boolean).join(", ");

    const paymentData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      deliveryCountry: "Ukraine",
      city: selectedCity?.Description,
      address: address,
      deliveryType: deliveryType,
      status: "New",
      products: cart,
    };

    createElementMutation(paymentData);
  };

  return {
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
  };
};
import { useMutation } from "@tanstack/react-query";
import { apiHandlers } from "../apiHandlers";

export const useCreatePaymentMutation = () => {
  return useMutation({
    mutationFn: apiHandlers.payments.create,
    onSuccess: (data) => {
      console.log("Payment successfully created", data);
    },
    onError: (error) => {
      console.error("Error creating payment", error);
    },
  });
};

import * as yup from "yup";

export const contactsFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\+38\s?\(?0\d{2}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/,
      "Phone number must follow the format +38 (0__) ___ __ __"
    ),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  deliveryCountry: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
});
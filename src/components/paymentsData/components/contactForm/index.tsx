import { UserData } from "@/api";
import { Input, CityAutoComplete } from "@/components";
import { UseFormSetValue } from "react-hook-form";

interface ContactFormProps {
  control: any;
  errors: any;
  setSelectedCity: (city: any) => void;
  setValue: UseFormSetValue<UserData>;
}
export function ContactForm({
  control,
  errors,
  setSelectedCity,
  setValue,
}: ContactFormProps) {
  return (
    <form className="flex flex-wrap gap-[50px] w-full justify-center mb-[40px]">
      <Input
        name="firstName"
        label="First Name"
        control={control}
        error={errors.firstName}
      />

      <Input
        name="lastName"
        label="Last Name"
        control={control}
        error={errors.lastName}
      />

      <Input
        name="phoneNumber"
        label="Phone Number"
        placeholder="+38 (0__) ___ __ __"
        control={control}
        type="tel"
        error={errors.phoneNumber}
      />

      <Input
        name="email"
        label="Email"
        control={control}
        type="email"
        error={errors.email}
      />

      <Input
        name="deliveryCountry"
        label="Country"
        placeholder="Select Country"
        control={control}
        defaultValue="Ukraine"
        disabled
      />

      <CityAutoComplete
        name="city"
        label="City"
        control={control}
        error={errors.city}
        placeholder="Select City"
        onChange={(city) => {
          setSelectedCity(city);
          setValue("city", city.Description);
        }}
      />
    </form>
  );
}

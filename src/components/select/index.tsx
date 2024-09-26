"use client";

import { Controller } from "react-hook-form";

interface SelectProps {
  name: string;
  label: string;
  control: any;
  options: Array<{ value: string; label: string }>;
  error?: any;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Select = ({
  name,
  label,
  control,
  options,
  error,
  placeholder,
  onChange,
}: SelectProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-[14px] text-foreground">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => {
              field.onChange(e);
              if (onChange) {
                onChange(e.target.value);
              }
            }}
            className={`border border-customLightGray p-2 w-full outline-none focus:border-customDarkGray ${
              error ? "border-red-500" : ""
            } custom-select`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};

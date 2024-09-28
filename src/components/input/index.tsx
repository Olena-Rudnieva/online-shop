'use client';

import { Control, Controller, FieldError } from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  control: Control<any>;
  sx?: string;
  type?: string;
  error?: FieldError;
  required?: boolean;
  defaultValue?: string;
  disabled?: boolean;
}

export const Input = ({
  control,
  name,
  label,
  placeholder,
  sx,
  type = 'text',
  required = false,
  error,
  defaultValue,
  disabled = false,
}: InputProps) => {
  return (
    <div className="w-[350px] flex flex-col  gap-[8px]">
      <label className={`text-[14px] text-foreground`}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...field } }) => (
          <input
            ref={ref}
            {...field}
            type={type}
            required={required}
            className={`text-customDarkGray py-[11px] px-[13px] text-[14px]
              border-customLightGray border-[1px] outline-0 focus:border-customDarkGray ${sx}`}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={defaultValue}
          />
        )}
      />
      {error && (
        <p className="text-red-500 text-xs mt-[10px]">{error.message}</p>
      )}
    </div>
  );
};

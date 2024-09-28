'use client';

import { Controller } from 'react-hook-form';
import { useState } from 'react';
import { useCitiesQuery } from '@/api/queries';

interface City {
  Ref: string;
  Description: string;
}

interface CityInputProps {
  name: string;
  label: string;
  control: any;
  error?: any;
  placeholder?: string;
  onChange?: (city: City) => void;
}

export const CityAutoComplete = ({
  name,
  label,
  control,
  error,
  placeholder,
  onChange,
}: CityInputProps) => {
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const { data: cities = [], isLoading } = useCitiesQuery(query);

  return (
    <div className="w-[350px] flex flex-col gap-[8px]">
      <label className="text-[14px] text-foreground">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="relative">
            <input
              {...field}
              type="text"
              className="text-customDarkGray py-[11px] px-[13px] text-[14px] w-full
                border-customLightGray border-[1px] outline-0 focus:border-customDarkGray"
              placeholder={placeholder}
              value={selectedCity ? selectedCity.Description : query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setSelectedCity(null);
                field.onChange(value);
              }}
            />
            {isLoading ? (
              <p className="absolute z-10 bg-white border border-gray-300 mt-1 p-2">
                Завантаження...
              </p>
            ) : (
              query &&
              cities.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 mt-1 max-h-60 overflow-auto">
                  {cities.map((city: City) => (
                    <li
                      key={city.Ref}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCity(city);
                        setQuery('');
                        field.onChange(city.Description);
                        onChange && onChange(city);
                      }}
                    >
                      {city.Description}
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        )}
      />
      {error && (
        <p className="text-red-500 text-xs mt-[10px]">{error.message}</p>
      )}
    </div>
  );
};

'use client';

import { Select, Input } from '@/components';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface BranchOption {
  value: string;
  label: string;
}

interface DeliveryOptionsProps {
  deliveryType: string;
  setDeliveryType: (type: string) => void;
  branchControl: Control<any>;
  branchErrors: any;
  branchesLoading: boolean;
  branchesError: any;
  branchOptions: BranchOption[];
  onBranchSelect: (branch: string) => void;
  control: Control<any>;
  errors: any;
}

export const DeliveryOptions = ({
  deliveryType,
  setDeliveryType,
  branchControl,
  branchErrors,
  branchOptions,
  onBranchSelect,
  branchesLoading,
  branchesError,
  control,
  errors,
}: DeliveryOptionsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-[32px] text-customDarkGray leading-[44px] tracking-[0.6px] mb-[40px]">
        {t('payments.delivery_title')}
      </h2>
      <div className="hidden justify-center items-center bg-gray-50  border-customLightGray border w-full py-[20px] mb-[20px]">
        <p className="text-[16px]">{t('payments.delivery_empty_text')}</p>
      </div>

      <div
        className={`relative w-full pl-[60px] py-[30px] pr-[30px] mb-[20px] border-2 ${
          deliveryType === 'novaPoshta'
            ? 'border-customLightGray'
            : 'border-none'
        }`}
      >
        <label className="flex items-center absolute top-[30px] left-[20px]">
          <input
            type="radio"
            value="novaPoshta"
            checked={deliveryType === 'novaPoshta'}
            onChange={() => setDeliveryType('novaPoshta')}
            className="custom-radio"
          />
        </label>

        <div>
          <div className="flex justify-between items-baseline mb-[20px]">
            <p className="text-[16px]">
              {t('payments.delivery_nova_poshta_title')}
            </p>
            <p className="text-[12px]">
              {t('payments.delivery_carries_rates')}
            </p>
          </div>
          <p className="text-[12px] text-gray-500">
            {t('payments.delivery_nova_poshta_text')}
          </p>
          {deliveryType === 'novaPoshta' && (
            <div className="w-full">
              <Select
                name="selectedBranch"
                label=""
                control={branchControl}
                options={branchOptions}
                error={branchErrors.selectedBranch}
                placeholder={t('payments.delivery_nova_poshta_select')}
                onChange={onBranchSelect}
              />
              {branchesLoading && <p>Loading branches...</p>}
              {branchesError && (
                <p>Error fetching branches: {branchesError.message}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`relative w-full pl-[60px] py-[30px] pr-[30px] mb-[20px] border-2 ${
          deliveryType === 'courier' ? 'border-customLightGray' : 'border-none'
        }`}
      >
        <label className="flex items-center absolute top-[30px] left-[20px]">
          <input
            type="radio"
            value="novaPoshta"
            checked={deliveryType === 'courier'}
            onChange={() => setDeliveryType('courier')}
            className="custom-radio"
          />
        </label>

        <div className="">
          <div className="flex justify-between items-baseline mb-[20px]">
            <p className="text-[16px]">
              {t('payments.delivery_courier_title')}
            </p>
            <p className="text-[12px]">
              {t('payments.delivery_carries_rates')}
            </p>
          </div>
          <p className="text-[12px] text-gray-500 mb-[30px]">
            {t('payments.delivery_courier_text')}
          </p>
          {deliveryType === 'courier' && (
            <div className="w-full flex flex-col md:flex-row gap-[10px] lg:gap-[20px]">
              <Input
                name="street"
                label={t('payments.delivery_courier_street')}
                control={control}
                type="text"
                error={errors.street}
              />
              <Input
                name="house"
                label={t('payments.delivery_courier_house')}
                control={control}
                type="text"
                error={errors.house}
              />
              <Input
                name="apartment"
                label={t('payments.delivery_courier_apartment')}
                control={control}
                type="text"
                error={errors.apartment}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

'use client';

import { useTranslation } from 'react-i18next';

export const ConfirmationData = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full flex justify-center">
      <div className="px-[15px] md:px-[32px] lg:px-[50px] pt-[20px] lg:pt-[25px] pb-[20px] lg:pb-[36px] w-full max-w-[1200px]">
        <h2 className="text-[24px] md:text-[32px] text-customDarkGray leading-[44px] tracking-[0.6px] mb-[40px]">
          {t('confirmation.title')}
        </h2>
        <p className="text-[14px] md:text-[20px]">{t('confirmation.text')}</p>
      </div>
    </div>
  );
};

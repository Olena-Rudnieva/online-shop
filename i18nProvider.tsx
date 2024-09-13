"use client";
import { I18nextProvider } from "react-i18next";
import initTranslation from "./src/app/locales/i18n";
import { createInstance } from "i18next";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  locale: string;
}

export default function TranslationsProvider({ children, locale }: Props) {
  const i18n = createInstance();

  useEffect(() => {
    initTranslation(locale, i18n);
  }, [locale, i18n]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

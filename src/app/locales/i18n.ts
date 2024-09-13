import { createInstance, i18n, Resource, InitOptions } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig from "../../../i18nConfig";

export default async function initTranslations(
  locale: string,          
  i18nInstance?: i18n,              
  resources?: Resource               
): Promise<{
  i18n: i18n,                        
  resources: Resource,               
  t: i18n['t']                      
}> {
 
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    preload: resources ? [] : i18nConfig.locales,
  } as InitOptions); 
  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data as Resource,
    t: i18nInstance.t,
  };
}
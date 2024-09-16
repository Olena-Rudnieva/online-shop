import TranslationsProvider from "@/providers/translationsProvider";
import initTranslations from "../i18n";
import { Footer, Header, MainPage } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["translation"];

export default async function Layout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      {children}
      <Footer />
    </TranslationsProvider>
  );
}

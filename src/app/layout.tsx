import type { Metadata } from "next";
import "./globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import i18nConfig from "@/app/i18nConfig";
import { queryClient } from "@/api";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}

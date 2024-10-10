import clsx from "clsx";
import { Inter } from "next/font/google";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import { locales } from "@/config";
import Footer from "@/components/Footer/Footer";
// import { NextIntlClientProvider } from "next-intl";
import NavigationTwo from "@/components/NavigationTwo";
import GoogleAnalytics from "../googleAnalytics/googleAnalytics";
// import ScrollToTop from "@/components/ScrollToTop";
import PhoneIcon from "@/components/PhoneIcon";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  //Metadata for keywords
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "KeywordsMeta" });

  return {
    keywords: t("words"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <GoogleAnalytics />
      <body
        className={clsx(inter.className, "flex h-full flex-col bg-gray-900")}
      >
        <Navigation />
        {children}
        {/* Getting error with fill-rule in footer component */}
        <Footer />
        <PhoneIcon />
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}

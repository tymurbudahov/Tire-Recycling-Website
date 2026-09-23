import clsx from "clsx";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer/Footer";
import { routing } from "@/i18n/routing";
import GoogleAnalytics from "../googleAnalytics/googleAnalytics";
// import ScrollToTop from "@/components/ScrollToTop";
// import PhoneIcon from "@/components/PhoneIcon";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  //Metadata for keywords
  params,
}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "KeywordsMeta" });

  return {
    keywords: t("words"),
    metadataBase: new URL("https://tirerecycling.com.ua"),
    openGraph: {
      siteName: "Tire Recycling UA",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Tire Recycling UA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <GoogleAnalytics />
      <body
        className={clsx(inter.className, "flex h-full flex-col bg-gray-900")}
      >
        {/* Makes messages available to all Client Components */}
        <NextIntlClientProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          {/* Getting error with fill-rule in footer component */}
          <Footer />
          {/* <PhoneIcon /> */}
          {/* <ScrollToTop /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

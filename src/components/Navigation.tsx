import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "./Navbar/Navbar";

export default function Navigation() {
  const message = useMessages();

  return (
    // NextIntlClientProvider passes messages(translatiosn) as props to client component Navbar, from there we can import translations and use it.
    <NextIntlClientProvider messages={message}>
      <Navbar />
    </NextIntlClientProvider>
  );
}

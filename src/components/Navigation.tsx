import { NextIntlClientProvider, useMessages } from "next-intl";
import NavigationTwo from "./NavigationTwo";
import NavigationThree from "./NavigationThree";

export default function Navigation() {
  const message = useMessages();

  return (
    // NextIntlClientProvider passes messages(translatiosn) as props to client component Navbar, from there we can import translations and use it.
    <NextIntlClientProvider messages={message}>
      <NavigationTwo />
    </NextIntlClientProvider>
  );
}

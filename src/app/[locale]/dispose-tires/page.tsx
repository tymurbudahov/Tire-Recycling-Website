import DisposeForm from "./DisposeForm/DisposeForm";
import { unstable_setRequestLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  params: { locale: string };
};

export default async function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section>
        <DisposeForm />
      </section>
    </NextIntlClientProvider>
  );
}

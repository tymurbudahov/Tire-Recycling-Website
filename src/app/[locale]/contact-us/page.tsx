import ContactForm from "./ContactForm/ContactForm";
import Information from "./Information/Information";
import { unstable_setRequestLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  //Metadata for contact us
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "ContactUsMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default async function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section>
        <Information />
        <ContactForm />
      </section>
    </NextIntlClientProvider>
  );
}

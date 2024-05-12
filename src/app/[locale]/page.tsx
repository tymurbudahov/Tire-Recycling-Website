import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import FirstSectionMain from "@/components/FirstSectionMain/FirstSectionMain";
import DisposeTires from "@/components/DisposeTires/DisposeTires";
import OurProducts from "@/components/OurProducts/OurProducts";
import ApplicationSectionMain from "@/components/ApplicationsSectionMain/ApplicationSectionMain";
// import SubEmail from "@/components/SubEmail/SubEmail";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default async function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();

  return (
    <>
      {/* //New section */}
      <FirstSectionMain />

      {/* //New section */}
      <DisposeTires />

      {/* //New section */}
      <OurProducts />

      {/* //New section */}
      <ApplicationSectionMain />

      {/* Subscribe to email list */}
      {/* <NextIntlClientProvider messages={messages}>
        <SubEmail />
      </NextIntlClientProvider> */}
    </>
  );
}

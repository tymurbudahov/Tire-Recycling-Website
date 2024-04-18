import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import FirstSectionMain from "@/components/FirstSectionMain/FirstSectionMain";
import DisposeTires from "@/components/DisposeTires/DisposeTires";
import OurProducts from "@/components/OurProducts/OurProducts";
import ApplicationSectionMain from "@/components/ApplicationsSectionMain/ApplicationSectionMain";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("MainPage");

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
    </>
  );
}

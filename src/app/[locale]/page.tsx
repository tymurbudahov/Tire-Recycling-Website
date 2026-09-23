import { setRequestLocale } from "next-intl/server";
import FirstSectionMain from "@/components/FirstSectionMain/FirstSectionMain";
import DisposeTires from "@/components/DisposeTires/DisposeTires";
import OurProducts from "@/components/OurProducts/OurProducts";
import ApplicationSectionMain from "@/components/ApplicationsSectionMain/ApplicationSectionMain";
import SubEmail from "@/components/SubEmail/SubEmail";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MainPageMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

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
      {/* <SubEmail /> */}
    </>
  );
}

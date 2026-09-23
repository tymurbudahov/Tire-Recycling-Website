import FirstSectionAbout from "./FirstSectionAbout/FirstSectionAbout";
import SecondSectionAbout from "./SecondSectionAbout/SecondSectionAbout";
import Applications from "./Applications/Applications";
import Facts from "./Facts/Facts";
import OurHistory from "./OurHistory/OurHistory";
import OurGoals from "./OurGoals/OurGoals";
import OurTeam from "./OurTeam/OurTeam";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  //Metadata for about us
  params,
}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutUsMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <FirstSectionAbout />
      <Facts />
      <OurHistory />
      <OurGoals />
      <OurTeam />
      <SecondSectionAbout />
      <Applications />
    </>
  );
}

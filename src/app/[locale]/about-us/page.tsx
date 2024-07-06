import FirstSectionAbout from "./FirstSectionAbout/FirstSectionAbout";
import SecondSectionAbout from "./SecondSectionAbout/SecondSectionAbout";
import Applications from "./Applications/Applications";
import Facts from "./Facts/Facts";
import OurHistory from "./OurHistory/OurHistory";
import OurGoals from "./OurGoals/OurGoals";
import OurTeam from "./OurTeam/OurTeam";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  //Metadata for about us
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "AboutUsMetadata" });

  return {
    title: t("title"), //web title
    description: t("description"),
  };
}

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

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

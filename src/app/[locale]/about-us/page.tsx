import FirstSectionAbout from "./FirstSectionAbout/FirstSectionAbout";
import SecondSectionAbout from "./SecondSectionAbout/SecondSectionAbout";
import Applications from "./Applications/Applications";
import Facts from "./Facts/Facts";
import OurHistory from "./OurHistory/OurHistory";
import OurGoals from "./OurGoals/OurGoals";
import OurTeam from "./OurTeam/OurTeam";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

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

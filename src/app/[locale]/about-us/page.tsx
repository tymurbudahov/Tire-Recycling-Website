import FirstSectionAbout from "./FirstSectionAbout/FirstSectionAbout";
import SecondSectionAbout from "./SecondSectionAbout/SecondSectionAbout";
import Applications from "./Applications/Applications";
import Facts from "./Facts/Facts";
import OurHistory from "./OurHistory/OurHistory";
import OurGoals from "./OurGoals/OurGoals";
import OurTeam from "./OurTeam/OurTeam";

export default function Page() {
  return (
    <>
      <FirstSectionAbout />
      <Facts />
      <OurHistory />
      <OurGoals />
      <OurTeam />
      <SecondSectionAbout />
    </>
  );
}

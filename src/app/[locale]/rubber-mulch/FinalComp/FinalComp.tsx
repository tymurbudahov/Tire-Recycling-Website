import Gallery from "../Gallery/Gallery";
import Applications from "../Applications/Applications";
import Examples from "../Examples/Examples";
import Contact from "../Contact/Contact";
import { useTranslations } from "next-intl";

const FinalComp: React.FC = () => {
  const t = useTranslations("RubberMulchPage");

  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg sm:text-lg text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            {t("rubber-mulch-title")}
          </h2>
          <p className="mb-4 font-light">{t("rubber-mulch-description-one")}</p>
          <p className="mb-4 font-medium">
            {t("rubber-mulch-description-two")}
          </p>
        </div>
        <Gallery />
      </div>
      <Applications />
      <Examples />
      <Contact />
    </section>
  );
};

export default FinalComp;

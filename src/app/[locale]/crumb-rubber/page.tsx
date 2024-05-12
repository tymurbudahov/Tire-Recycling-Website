import Gallery from "./Gallery/Gallery";
import Applications from "./Applications/Applications";
import Contact from "./Contact/Contact";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("CrumbRubberPage");

  return (
    <section className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg  sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            {t("crumb-rubber-title")}
          </h2>
          <p className="mb-4 font-light">{t("crumb-rubber-description-one")}</p>
          <p className="mb-4 font-medium">
            {t("crumb-rubber-description-two")}
          </p>
        </div>
      </div>
      <Gallery />
      <Applications />
      <Contact />
    </section>
  );
}

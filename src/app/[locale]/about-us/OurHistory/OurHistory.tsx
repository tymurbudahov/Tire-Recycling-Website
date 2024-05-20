import { useTranslations } from "next-intl";
const OurHistory: React.FC = () => {
  const t = useTranslations("AboutUsPage");
  const historyOne = "/images/aboutUs/about-one.webp";

  return (
    <section className=" bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage: `url(${historyOne})`,
            }}
          ></div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold  text-white md:text-3xl">
            {t("our-text")}{" "}
            <span className="text-blue-500">{t("our-history-title")}</span>
          </h2>

          <p className="mt-4 text-gray-300">{t("our-history-description")}</p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;

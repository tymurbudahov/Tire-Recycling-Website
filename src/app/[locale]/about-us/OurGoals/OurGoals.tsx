import React from "react";
import { useTranslations } from "next-intl";

const OurGoals: React.FC = () => {
  const t = useTranslations("AboutUsPage");
  const GoalsOne = "/images/aboutUs/about-two.webp";

  return (
    <section className=" bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden  bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage: `url(${GoalsOne})`,
            }}
          ></div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold  text-white md:text-3xl">
            {t("our-goals-text")}{" "}
            <span className="text-blue-500">{t("our-goals-title-one")}</span>
          </h2>

          <p className="mt-4 text-gray-300">{t("our-goals-description")}</p>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;

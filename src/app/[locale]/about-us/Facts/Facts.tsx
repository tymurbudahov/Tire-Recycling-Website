import React from "react";
import { useTranslations } from "next-intl";

const Facts: React.FC = () => {
  const t = useTranslations("AboutUsPage");

  return (
    <section className=" bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            {t("stat-title")}
          </h2>

          {/* <p className="mt-4sm:text-xl text-gray-400">
            {t("stat-description")}
          </p> */}
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border  px-4 py-8 text-center border-gray-800">
              <dt className="order-last text-lg font-medium text-gray-400">
                {t("stat-one")}
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                500+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border px-4 py-8 text-center border-gray-800">
              <dt className="order-last text-lg font-medium text-gray-400">
                {t("stat-two")}
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                2,000,000
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border px-4 py-8 text-center border-gray-800">
              <dt className="order-last text-lg font-medium text-gray-400">
                {t("stat-three")}
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                15,000,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Facts;

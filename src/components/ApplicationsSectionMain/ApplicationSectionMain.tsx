import { useTranslations } from "next-intl";

export default function ApplicationSectionMain() {
  const t = useTranslations("IndexPage");

  return (
    <section className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold  text-white">
            {t("title-two")}
          </h2>
          <p className="mb-4 font-light">{t("title-two-description")}</p>
          <p className="mb-4 font-medium">{t("title-two-description-two")}</p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 text-primary-500 hover:text-primary-700"
          >
            {t("title-two-button")}
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

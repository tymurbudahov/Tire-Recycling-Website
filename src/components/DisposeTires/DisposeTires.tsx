import { useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink";

export default function DisposeTires() {
  const t = useTranslations("IndexPage");
  const disposeTiresIcon =
    "/images/indexPage/light-blue-tire-disposal-icon.webp";

  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 mx-auto gap-12 lg:grid-cols-12 lg:items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            {t("dispose-title")}
          </h2>
          <p className="max-w-2xl mb-8 md:text-lg lg:text-xl text-gray-400">
            {t("dtires-text")}
          </p>
          <NavigationLink
            href={"/dispose-tires" as any}
            className="inline-flex items-center justify-center px-6 py-3 mr-3 text-sm font-bold text-center rounded-full bg-primary-700 hover:bg-primary-800"
          >
            {t("dtires-button")}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </NavigationLink>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <img className="max-h-[28rem] object-contain" src={disposeTiresIcon} alt="" />
        </div>
      </div>
    </section>
  );
}

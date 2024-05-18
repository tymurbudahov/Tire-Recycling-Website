import { useTranslations } from "next-intl";

const Examples: React.FC = () => {
  const one = "/images/rubberMulch/mulch-one.webp";
  const two = "/images/rubberMulch/playground-one.webp";
  const t = useTranslations("RubberMulchPage");

  return (
    <div className=" bg-gray-900 mt-10">
      {/* First application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full block" src={one} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-3xl">
            {t("house-landscape-title")}
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400 sm:text-base">
            {t("house-landscape-description")}
          </p>
        </div>
      </div>

      {/* Second application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full block" src={two} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-3xl">
            {t("coating-title")}
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400 sm:text-base">
            {t("coating-description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Examples;

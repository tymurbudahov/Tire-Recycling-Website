import { useTranslations } from "next-intl";
import NavigationLink from "@/components/NavigationLink";

const Contact: React.FC = () => {
  const t = useTranslations("MetalCordPage");

  return (
    <div className="bg-gray-900 mb-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
            {t("contact-title")}
          </h2>
          <p className="mb-8 font-light  sm:text-xl text-gray-400">
            {t("contact-description-one")}
          </p>
          <p className="mb-8 font-light sm:text-xl text-gray-400">
            {t("contact-description-two")}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <NavigationLink
              href={"/contact-us" as any} //Contact us page link
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600"
            >
              {t("contact-button")}
            </NavigationLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink";

export default function OurProducts() {
  const crumbRubberImage = "/images/products/crumb-rubber.webp";
  const rubberMulchImage = "/images/products/rubber-mulch.webp";
  const metalCordImage = "/images/products/metal-cord-one.webp";
  const textileCordImage = "/images/products/textile-cord.webp";
  const beadRingImage = "/images/products/bead-ring.webp";
  const rubberProductsImage = "/images/products/rubber-products.webp";

  const t = useTranslations("IndexPage.our-products");

  return (
    <section className="bg-gray-900 border-y border-gray-800">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-5 text-4xl tracking-tight font-bold text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="sm:text-xl text-gray-400">{t("title-description")}</p>
        </div>
        <div className="product-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div>
              <NavigationLink href={"/crumb-rubber" as any}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={crumbRubberImage}
                  alt="image description"
                />
              </NavigationLink>
            </div>
            <NavigationLink href={"/crumb-rubber" as any}>
              <h3 className="mb-2 text-xl font-bold text-white">
                {t("crumb-rubber-title")}
              </h3>
            </NavigationLink>
            <p className=" text-gray-400">{t("crumb-rubber-description")}</p>
          </div>
          <div>
            <div>
              <NavigationLink href={"/rubber-mulch" as any}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={rubberMulchImage}
                  alt="image description"
                />
              </NavigationLink>
            </div>
            <NavigationLink href={"/rubber-mulch" as any}>
              <h3 className="mb-2 text-xl font-bold text-white">
                {t("rubber-mulch-title")}
              </h3>
            </NavigationLink>
            <p className="text-gray-400">{t("rubber-mulch-description")}</p>
          </div>
          <div>
            <div>
              <NavigationLink href={"/metal-cord" as any}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={metalCordImage}
                  alt="image description"
                />
              </NavigationLink>
            </div>
            <NavigationLink href={"/metal-cord" as any}>
              <h3 className="mb-2 text-xl font-bold text-white">
                {t("metal-cord-title")}
              </h3>
            </NavigationLink>
            <p className="text-gray-400">{t("metal-cord-description")}</p>
          </div>
          <div>
            <div>
              <NavigationLink href={"/textile-cord" as any}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={textileCordImage}
                  alt="image description"
                />
              </NavigationLink>
            </div>
            <NavigationLink href={"/textile-cord" as any}>
              <h3 className="mb-2 text-xl font-bold text-white">
                {t("textile-cord-title")}
              </h3>
            </NavigationLink>
            <p className=" text-gray-400">{t("textile-cord-description")}</p>
          </div>
          <div>
            <div>
              <NavigationLink href={"/bead-ring" as any}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={beadRingImage}
                  alt="image description"
                />
              </NavigationLink>
            </div>
            <NavigationLink href={"/bead-ring" as any}>
              <h3 className="mb-2 text-xl font-bold text-white">
                {t("onboard-ring-title")}
              </h3>
            </NavigationLink>
            <p className=" text-gray-400">{t("onboard-ring-description")}</p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={rubberProductsImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              {t("product-name-title")}
            </h3>
            <p className="text-gray-400">{t("product-name-description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

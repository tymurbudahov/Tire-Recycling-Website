import { Facebook, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <NavigationLink href={"/" as any} className="site-brand">
              <img src="/images/logo/trua-logo.png" alt="" />
              <span className="site-brand__name">
                Tire Recycling UA
              </span>
            </NavigationLink>
          </div>

          <div>
            <h2>{t("who-are-we")}</h2>
            <ul>
              <li>
                <NavigationLink href={"/" as any}>
                  {t("who-are-we-home")}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink href={"/about-us" as any}>
                  {t("who-are-we-about-us")}
                </NavigationLink>
              </li>
            </ul>
          </div>

          <div>
            <h2>{t("our-products")}</h2>
            <ul>
              <li>
                <NavigationLink href={"/crumb-rubber" as any}>
                  {t("our-products-crumb-rubber")}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink href={"/rubber-mulch" as any}>
                  {t("our-products-rubber-mulch")}
                </NavigationLink>
              </li>
            </ul>
          </div>

          <div>
            <h2>{t("contact")}</h2>
            <ul>
              <li>
                <NavigationLink href={"/dispose-tires" as any}>
                  {t("contact-dispose-tires")}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink href={"/contact-us" as any}>
                  {t("contact-us")}
                </NavigationLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © 2026 Tire Recycling UA {t("all-rights-reserved")}
          </span>
          <div className="site-footer__social">
            <a
              href="https://www.facebook.com/tirerecycling.com.ua/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://www.linkedin.com/company/tirerecycling-ua/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

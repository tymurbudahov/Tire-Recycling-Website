"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function NavigationTwo() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeNavigation = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const productLinks = [
    ["crumb-rubber", "/crumb-rubber"],
    ["rubber-mulch", "/rubber-mulch"],
    ["metal-cord", "/metal-cord"],
    ["bead-ring", "/bead-ring"],
    ["textile-cord", "/textile-cord"],
  ] as const;

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav__inner">
        <NavigationLink href="/" className="site-brand" onClick={closeNavigation}>
          <img src="/images/logo/trua-logo.png" alt="" />
          <span className="site-brand__name">
            {t("company-name")}
          </span>
        </NavigationLink>

        <button
          type="button"
          className="site-nav__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <ul
          id="main-menu"
          className={`site-nav__links ${isOpen ? "is-open" : ""}`}
        >
          <li>
            <NavigationLink href="/" className="site-nav__link" onClick={closeNavigation}>
              {t("home")}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              href={"/about-us" as any}
              className="site-nav__link"
              onClick={closeNavigation}
            >
              {t("about-us")}
            </NavigationLink>
          </li>
          <li className="relative">
            <button
              type="button"
              className="site-nav__dropdown-button"
              onClick={() => setIsDropdownOpen((open) => !open)}
              aria-expanded={isDropdownOpen}
            >
              {t("our-products")}
              <ChevronDown
                size={15}
                className={isDropdownOpen ? "rotate-180" : ""}
              />
            </button>
            {isDropdownOpen && (
              <div className="site-nav__dropdown">
                {productLinks.map(([label, href]) => (
                  <NavigationLink
                    key={href}
                    href={href as any}
                    onClick={closeNavigation}
                  >
                    {t(label)}
                  </NavigationLink>
                ))}
              </div>
            )}
          </li>
          <li>
            <NavigationLink
              href={"/contact-us" as any}
              className="site-nav__link"
              onClick={closeNavigation}
            >
              {t("contact-us")}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              href={"/dispose-tires" as any}
              className="site-nav__link site-nav__link--cta"
              onClick={closeNavigation}
            >
              {t("dispose-tires")}
            </NavigationLink>
          </li>
          <LocaleSwitcher />
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function NavigationTwo() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const setClose = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-gray-700">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <NavigationLink
            href="/"
            className="self-center text-2lg font-semibold whitespace-nowrap text-white"
          >
            {t("company-name")}
          </NavigationLink>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 ${isOpen ? "transform rotate-90" : ""}`}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Our Products</span>
          <svg
            className="w-6 h-6 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto transition-opacity duration-500 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 rounded-lg bg-gray-800 lg:bg-gray-900 border-gray-700 p-6 lg:p-0 mt-4 lg:mt-0">
            <NavigationLink href="/">
              <li className="w-60 m-1 p-3 border-b w-border-gray-300 border-gray-600 lg:m-0 lg:border-0 lg:p-0 lg:w-auto">
                <p
                  className="py-2 px-3 text-white text-center roundedlg:p-0 lg:text-blue-500 bg-blue-600 lg:bg-transparent rounded"
                  onClick={setClose}
                >
                  {t("home")}
                </p>
              </li>
            </NavigationLink>
            <NavigationLink href={"/about-us" as any}>
              <li className="w-60 m-1 p-3 border-b w-border-gray-300 border-gray-600 lg:m-0 lg:border-0 lg:p-0 lg:w-auto">
                <p
                  className="py-2 px-3 text-white text-center lg:p-0 lg:bg-transparent lg:hover:text-blue-500"
                  onClick={setClose}
                >
                  {t("about-us")}
                </p>
              </li>
            </NavigationLink>
            <li className="relative w-60 m-1 p-3 border-b w-border-gray-300 border-gray-600 lg:m-0 lg:border-0 lg:p-0 lg:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-full py-2 px-3 rounded lg:border-0 lg:p-0 lg:w-auto text-white lg:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent"
              >
                {t("our-products")}
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`${isDropdownOpen ? "block" : "hidden"} absolute left-1/2 transform -translate-x-1/2 text-center z-10 font-normal divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 transition-opacity duration-500 ease-in-out`}
              >
                <ul className="py-1 text-sm text-gray-400">
                  <li>
                    <NavigationLink
                      href={"/crumb-rubber" as any}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={setClose}
                    >
                      {t("crumb-rubber")}
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/rubber-mulch" as any}
                      className="block px-4 py-2  hover:bg-gray-600 hover:text-white"
                      onClick={setClose}
                    >
                      {t("rubber-mulch")}
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/metal-cord" as any}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={setClose}
                    >
                      {t("metal-cord")}
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/bead-ring" as any}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={setClose}
                    >
                      {t("bead-ring")}
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/textile-cord" as any}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                      onClick={setClose}
                    >
                      {t("textile-cord")}
                    </NavigationLink>
                  </li>
                </ul>
              </div>
            </li>
            <NavigationLink href={"/dispose-tires" as any}>
              <li className="w-60 m-1 p-3 border-b w-border-gray-300 border-gray-600 lg:m-0 lg:border-0 lg:p-0 lg:w-auto">
                <p
                  className="py-2 px-3 text-white text-center lg:p-0 lg:bg-transparent lg:hover:text-blue-500"
                  onClick={setClose}
                >
                  {t("dispose-tires")}
                </p>
              </li>
            </NavigationLink>
            <NavigationLink href={"/contact-us" as any}>
              <li className="w-60 m-1 p-3 border-b w-border-gray-300 border-gray-600 lg:m-0 lg:border-0 lg:p-0 lg:w-auto">
                <p
                  className="py-2 px-3 text-white text-center lg:p-0 lg:bg-transparent lg:hover:text-blue-500"
                  onClick={setClose}
                >
                  {t("contact-us")}
                </p>
              </li>
            </NavigationLink>
            <LocaleSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  );
}

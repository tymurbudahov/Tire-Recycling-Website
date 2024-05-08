"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function NavigationTwo() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <NavigationLink
            href="/"
            className="self-center text-2lg font-semibold whitespace-nowrap dark:text-white"
          >
            {t("company-name")}
          </NavigationLink>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isOpen ? "transform rotate-90" : ""}`}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
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
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 rounded-lg bg-gray-50 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 p-4 lg:p-0 mt-4 lg:mt-0">
            <li>
              <NavigationLink
                href="/"
                className="py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent"
              >
                {t("home")}
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                href={"/about-us" as any}
                className="py-2 px-3 text-white lg:bg-transparent lg:p-0 lg:dark:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500"
              >
                {t("about-us")}
              </NavigationLink>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
              >
                More Options
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
                className={`${isDropdownOpen ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-opacity duration-500 ease-in-out`}
              >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <NavigationLink
                      href={"/crumb-rubber" as any}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Crumb Rubber
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/option-2" as any}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Option 2
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/option-2" as any}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Option 3
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/option-2" as any}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Option 4
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink
                      href={"/option-2" as any}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Option 5
                    </NavigationLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavigationLink
                href="/"
                className="py-2 px-3 text-white lg:bg-transparent lg:p-0 lg:dark:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500"
              >
                {t("dispose-tires")}
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                href="/"
                className="py-2 px-3 text-white lg:bg-transparent lg:p-0 lg:dark:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500"
              >
                {t("contact-us")}
              </NavigationLink>
            </li>
            <LocaleSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  );
}

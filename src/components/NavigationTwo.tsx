"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function NavigationTwo() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Only needed if dropdown functionality is required

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Assume this is a placeholder for your logo */}
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
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
                href="/about-us"
                className="py-2 px-3 text-white lg:bg-transparent lg:p-0 lg:dark:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500"
              >
                {t("about-us")}
              </NavigationLink>
            </li>
            {/* LocaleSwitcher within the burger menu */}

            <LocaleSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  );
}

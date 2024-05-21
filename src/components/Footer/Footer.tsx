import { useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink";

export default function Footer() {
  const t = useTranslations("Footer");
  const logo = "/images/logo/trua-logo.png";
  const flagh = "/images/flagIcon/ukraineIcon.png";

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-5">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavigationLink href={"/" as any} className="flex items-center">
              <img
                src={logo}
                className="h-16 me-3"
                alt="Tire Recycling UA Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white mr-2">
                Tire Recycling UA
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 32 32"
              >
                <path
                  d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z"
                  fill="#2455b2"
                ></path>
                <path
                  d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z"
                  fill="#f9da49"
                ></path>
                <path
                  d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
            </NavigationLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {t("who-are-we")}
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <NavigationLink href={"/" as any} className="hover:underline">
                    {t("who-are-we-home")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href={"/about-us" as any}
                    className="hover:underline"
                  >
                    {t("who-are-we-about-us")}
                  </NavigationLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                {t("our-products")}
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <NavigationLink
                    href={"/crumb-rubber" as any}
                    className="hover:underline "
                  >
                    {t("our-products-crumb-rubber")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href={"/rubber-mulch" as any}
                    className="hover:underline"
                  >
                    {t("our-products-rubber-mulch")}
                  </NavigationLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                {t("contact")}
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <NavigationLink
                    href={"/dispose-tires" as any}
                    className="hover:underline"
                  >
                    {t("contact-dispose-tires")}
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink
                    href={"/contact-us" as any}
                    className="hover:underline"
                  >
                    {t("contact-us")}
                  </NavigationLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2024{" "}
            <a href={"/" as any} className="hover:underline">
              Tire Recycling UA
            </a>
            {t("all-rights-reserved")}
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/tirerecycling.com.ua/"
              className="text-gray-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#3F51B5"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://www.linkedin.com/company/tirerecycling-ua/"
              className="text-gray-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                ></path>
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                ></path>
                <path
                  d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                ></path>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

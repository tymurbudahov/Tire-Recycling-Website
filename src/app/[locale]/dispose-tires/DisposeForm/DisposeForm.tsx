"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

const DisposeForm: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const t = useTranslations("DisposeTiresPage");

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIdDispose = process.env
    .NEXT_PUBLIC_TEMPLATE_ID_DISPOSE as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current === null || isDisabled) return;

    setIsDisabled(true);

    emailjs
      .sendForm(serviceID, templateIdDispose, form.current, publicKEY)
      .then(
        (result) => {
          setMessageSent(true);
          setShowModal(true);
          console.log(`${result.text}, message sent. Thank you.`);
        },
        (error) => {
          setErrorMessage(true);
          setShowModal(true);
          console.log(`${error.text}, error occurred.`);
        }
      );
  };

  return (
    <div className="bg-gray-900 relative">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          {t("dispose-tires-title")}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          {t("dispose-tires-description")}
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          {/* Name */}
          <div>
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.name-up")}
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              required
              className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.name-inside")}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.email-up")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.email-inside")}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.phone-up")}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder=""
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.company-up")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder=""
            />
          </div>

          {/* Tire Type */}
          <div>
            <label
              htmlFor="tiretype"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.tire-type-up")}
            </label>
            <input
              type="text"
              id="tiretype"
              name="tiretype"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.tire-type-inside")}
            />
          </div>

          {/* How many tires */}
          <div>
            <label
              htmlFor="howmanytires"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.tire-quantity-up")}
            </label>
            <input
              type="text"
              id="howmanytires"
              name="howmanytires"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder=""
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.location-up")}
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.location-inside")}
            />
          </div>

          {/* Delivery */}
          <div>
            <label
              htmlFor="delivery"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {t("form.delivery-up")}
            </label>
            <input
              type="text"
              id="delivery"
              name="delivery"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder=""
            />
          </div>

          {/* Comments */}
          <div className="sm:col-span-2">
            <label
              htmlFor="addcomments"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              {t("form.additional-comments-up")}
            </label>
            <textarea
              id="addcomments"
              name="addcomments"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.additional-comments-inside")}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className={`py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit focus:ring-4 focus:outline-none text-white
              ${isDisabled && messageSent ? "bg-green-600 cursor-not-allowed" : ""}
              ${isDisabled && errorMessage ? "bg-red-600 cursor-not-allowed" : ""}
              ${!isDisabled ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : ""}`}
          >
            {isDisabled && messageSent && t("form.message-success")}
            {isDisabled && errorMessage && t("form.message-error")}
            {!isDisabled && t("form.send-message")}
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {messageSent
                ? t("form.message-success")
                : t("form.message-error")}
            </h2>
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisposeForm;

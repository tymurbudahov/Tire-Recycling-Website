"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ContactForm: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const t = useTranslations("ContactUsPage");

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIDContact = process.env
    .NEXT_PUBLIC_TEMPLATE_ID_CONTACT as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null || isDisabled) return;

    setIsDisabled(true);

    emailjs
      .sendForm(serviceID, templateIDContact, form.current, publicKEY)
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
          {t("fill-up-form-title")}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          {t("fill-up-form-description")}
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
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
              placeholder={t("form.phone-inside")}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              {t("form.message-up")}
            </label>
            <textarea
              id="message"
              name="additional-comments"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder={t("form.message-inside")}
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

export default ContactForm;

"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const ContactForm: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const serviceID = ""; //insert EmailJS serviceID
  const templateIDContact = ""; //insert EMAILJS templateIDContact
  const publicKEY = ""; //Insert publicKey here

  const router = useRouter();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //ensure form.currect is not null
    if (form.current !== null) {
      emailjs
        .sendForm(serviceID, templateIDContact, form.current, publicKEY)
        .then(
          (result) => {
            setMessageSent(true);
            setIsDisabled(true);
            console.log(`${result.text}, message sent. Thank you.`);
          },
          (error) => {
            setErrorMessage(true);
            setIsDisabled(true);
            console.log(`${error.text}, error occurred.`);
          }
        );
    } else {
      //Handle the case where form.current is null
      console.log("The form is not available.");
      setErrorMessage(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        {/* Email  */}
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              name="fname"
            />
          </div>
          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              name="email"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              name="phone"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              // rows="6" commented out, gives error on vercel deployment.
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              name="additional-comments"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={isDisabled}
          >
            Send message
          </button>
          {messageSent ? (
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-white border border-blue-500 p-5 bg-blue-500 rounded">
              Your message sent, thank you!
            </h2>
          ) : (
            ""
          )}

          {errorMessage ? (
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-white border border-red-500 p-5 bg-red-500 rounded">
              Hmm... Some error occured, please refresh page and try again.
            </h2>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

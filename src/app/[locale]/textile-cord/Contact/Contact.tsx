const Contact: React.FC = () => {
  return (
    <div className=" bg-gray-900 mb-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            We offer best products to our customers
          </h2>
          <p className="mb-8 font-light sm:text-xl text-gray-400">
            We offer high quality metal cord on the market. Flowbite helps you
            connect with friends, family and communities of people who share
            your interests. Connecting with your friends and family as well as
            discovering new ones is easy with features like Groups, Watch and
            Marketplace.
          </p>
          <p className="mb-8 font-light sm:text-xl text-gray-400">
            Interested?
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="/contact-us" //Contact us page link
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

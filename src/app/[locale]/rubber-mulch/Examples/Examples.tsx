const Examples: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-10">
      {/* First application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-3xl">
            Landscape for your house
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 sm:text-base">
            Rubber mulch is an environmentally sustainable alternative to wood
            mulch that offers improved durability and wind resistance due to its
            weight. This material effectively passes rainwater to plant roots
            without retaining it and does not attract termites, making it safe
            for landscaping. Rubber mulch is an investment in the long-term
            beauty of your garden: it does not require annual replacement and
            retains its vibrant color for a decade, unlike wood mulch, which
            quickly deteriorates when exposed to the elements.
          </p>
        </div>
      </div>

      {/* Second application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-3xl">
            Coating for playgrounds
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 sm:text-base">
            Rubber playground mulch is a safe, durable surface designed to
            provide maximum protection and comfort. Made from recycled car
            tires, this material is an excellent choice for any play area due to
            its impact-absorbing properties that reduce the risk of injury from
            falls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Examples;

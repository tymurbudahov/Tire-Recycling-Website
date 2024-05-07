import React from "react";
//Add what we do section here, using 5 iamges, files in public/whatWeDo folder.

const SecondSectionAbout: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            What We Do
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Our services cover the acceptance of used tires from businesses and
            individuals without restrictions on quantity. We process these tires
            into valuable raw materials - rubber granules, which are widely used
            in the production of a variety of rubber products. In the near
            future, we will expand the network of tire collection points to
            simplify recycling anywhere in Ukraine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSectionAbout;

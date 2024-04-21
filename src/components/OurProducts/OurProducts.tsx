export default function OurProducts() {
  const crumbRubberImage = "/mainPage/crumb-rubber.webp";

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our products
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Our recycled tire products combine quality and durability. We use
            the durable properties of our raw materials to ensure superior
            reliability in every product.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Crumb Rubber
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Rubber Mulch
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Metal Cord
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Textile Cord
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Onboard Ring
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div>
              <img
                className="h-auto max-w-full rounded-md"
                src={crumbRubberImage}
                alt="image description"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Product Name
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

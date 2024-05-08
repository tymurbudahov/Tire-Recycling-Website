const Applications: React.FC = () => {
  const one = "/images/example/55-crumb.webp";
  const two = "/images/example/100-crumb.webp";

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
            Rubberized asphalt
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 sm:text-base">
            Rubberized asphalt concrete is an advanced road surface that
            combines standard asphalt concrete with the addition of rubber
            granules made from recycled car tires. These granules, occupying
            from 15% to 22% of the volume of the road mixture, improve the
            characteristics of asphalt, making it more elastic and resistant to
            various weather conditions. Using rubberized asphalt is a
            time-tested practice that has been used for over four decades. This
            material does not require specialized equipment for installation,
            which makes it convenient to use on a par with traditional asphalt
            mixtures.
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
            Sport coverings
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 sm:text-base">
            Sports surfaces made from rubber granules are an ideal solution for
            creating safe and comfortable sports fields. These surfaces have
            excellent shock absorption, which reduces the risk of injury for
            athletes. In addition, they provide excellent grip and can be
            adapted for a variety of sports, from athletics to football and
            basketball. Rubber granules make the surface resistant to changing
            weather conditions, as well as being easy to maintain and durable,
            making them a cost-effective choice for sports facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;

import { useTranslations } from "next-intl";

export default function FirstSectionMain() {
  const t = useTranslations("IndexPage");

  return (
    <section className=" bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Tire Recycling UA
          </h2>
          <p className="mb-4">
            Saving nature, tire by tire. We are your reliable partner in
            recycling used tires in Ukraine. Over 210,000 tons of used tires
            pollute our country every year, we strive to reduce this number by
            recycling every tire to protect and restore our ecology. Together we
            can create a clean and green future for Ukraine.
          </p>
          <p>
            Our product is ideal for creating rubber products, durable rubber
            flooring, pavers, durable rubberized asphalt, playground safety
            surfaces, functional landscape mulch and shock-absorbing sports
            surfaces.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

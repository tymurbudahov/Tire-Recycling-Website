import Gallery from "./Gallery/Gallery";
import Applications from "./Applications/Applications";
import Examples from "./Examples/Examples";
import Contact from "./Contact/Contact";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Rubber Mulch
          </h2>
          <p className="mb-4 font-light">
            Using rubber mulch made from recycled tires is an eco-innovative
            solution for landscaping, children's playgrounds and sports fields.
            This material not only performs all the functions of traditional
            wood mulch, but also surpasses it, providing durability, safety and
            low maintenance requirements. Rubber mulch is highly
            weather-resistant, does not attract pests, and retains its color for
            many years, making it an ideal choice for any landscaping project.
          </p>
          <p className="mb-4 font-medium">
            We offer high quality rubber mulch with a lot of different
            applications.
          </p>
        </div>
        <Gallery />
      </div>
      <Applications />
      <Examples />
      <Contact />
    </section>
  );
}

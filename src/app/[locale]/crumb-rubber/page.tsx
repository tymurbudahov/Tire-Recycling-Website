import Gallery from "./Gallery/Gallery";
import Applications from "./Applications/Applications";
import Contact from "./Contact/Contact";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Crumb Rubber
          </h2>
          <p className="mb-4 font-light">
            Rubber granules, produced by shredding used tires, are a versatile
            product suitable for a wide range of industrial applications. With
            the ability to produce fractions down to 0.55 mm, our crumb rubber
            is ideal for creating safe sports surfaces, effective sound
            insulation materials and durable road surface elements. Our rubber
            granule production meets the strictest quality and environmental
            standards, providing customers with a reliable and sustainable
            product for their projects.
          </p>
          <p className="mb-4 font-medium">
            We offer high quality crumb rubber with particle sizes down to
            0.55mm, ideal for a variety of industrial and commercial
            applications.
          </p>
        </div>
      </div>
      <Gallery />
      <Applications />
      <Contact />
    </section>
  );
}

import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

export default function Page() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg sm:text-lg text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            Textile Cord
          </h2>
          <p className="mb-4 font-light">
            Textile cord is a fibrous material that is part of the tire carcass
            and gives it strength and flexibility. After tire wear, textile cord
            can be separated and used as a secondary raw material in various
            industries, such as in construction to strengthen mortars, in the
            production of nonwovens, or as filler for car mats and seats.
            Recycling textile cord helps reduce waste.
          </p>
        </div>
        <Gallery />
      </div>
      <Contact />
    </section>
  );
}

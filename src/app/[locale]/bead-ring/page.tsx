import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Bead Ring
          </h2>
          <p className="mb-4 font-light">
            The bead ring is a reinforced element of the tire that ensures
            reliable fixation of the tire on the wheel rim. After the tire's
            life, the bead ring is removed during recycling and can be recycled
            into new products such as O-rings and protective rims. It is a
            valuable resource for the recycling industry as it contains quality
            materials that promote sustainable production and waste
            minimization.
          </p>
        </div>
        <Gallery />
      </div>
      <Contact />
    </section>
  );
}

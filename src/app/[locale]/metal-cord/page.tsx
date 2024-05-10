import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

export default function Page() {
  return (
    <section className=" bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg sm:text-lg text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            Metal Cord
          </h2>
          <p className="mb-4 font-light">
            Metal cord is a steel wire that strengthens tires and gives them
            structural integrity. After the tire's life cycle, this cord is
            recovered through recycling and can be reused or melted down to
            create new steel products. Metal cord is a valuable recycling
            material because steel is easily recyclable and has a wide range of
            applications in a variety of industries, from construction to the
            production of new metal products.
          </p>
        </div>
        <Gallery />
      </div>
      <Contact />
    </section>
  );
}

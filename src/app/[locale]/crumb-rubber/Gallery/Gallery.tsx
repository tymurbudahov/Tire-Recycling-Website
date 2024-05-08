const Gallery: React.FC = () => {
  const one = "/images/example/55-crumb.webp";
  const two = "/images/example/100-crumb.webp";

  return (
    <div className="container mx-auto px-4rounded">
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <img
              alt="Photo 1"
              className="block object-cover object-center w-full h-full rounded-lg"
              src={one}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="w-full p-1 md:p-2">
            <img
              alt="Photo 2"
              className="block object-cover object-center w-full h-full rounded-lg"
              src={two}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

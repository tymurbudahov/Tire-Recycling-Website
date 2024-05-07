const OurHistory: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          ></div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Our <span className="text-blue-500">History</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            What happens to worn tires? This issue forced us, tire manufacturers
            in Ukraine, to look for ways to effectively dispose them. In 2019 we
            developed!!or found!! an environmentally friendly process for
            recycling tires into secondary raw materials. Since 2021, we have
            been actively pursuing our mission to return used tires back into
            the life cycle with minimal impact on the environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;

const OurTeam: React.FC = () => {
  return (
    <section className=" bg-gray-900 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden  bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full">
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
          <h2 className="text-2xl font-semibold  text-white md:text-3xl">
            Our <span className="text-blue-500">Team</span>
          </h2>

          <p className="mt-4 text-gray-300">
            Engineers, designers and environmentalists with a deep understanding
            of the tire industry. Our team is strengthened by young, ambitious
            specialists, distinguished by an innovative approach. We value
            teamwork and maintain high standards in everything we do. Together,
            these talented professionals form the strong core of our company,
            advancing the development of sustainable tire recycling solutions
            for the benefit of society and the environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

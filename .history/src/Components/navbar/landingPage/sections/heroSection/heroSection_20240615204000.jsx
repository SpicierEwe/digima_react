function HeroSection() {
  return (
    <section className="bg-gray-100 py-20 flex flex-col justify-center items-center w-screen h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-md font-semibold  text-center mb-6 tracking-widest bg-accent rounded-full p-1 ">
          DIGITAL MARKETING
        </h2>
        <h1 className="text-3xl font-bold text-center mt-10">
          Social Media ist zu 90% immer kostenlos, aber nie umsonst!
        </h1>
        <p className="text-lg text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Get Started
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 ml-4">
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

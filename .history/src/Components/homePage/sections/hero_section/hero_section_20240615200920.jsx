import React from "react";

function NavBar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <h1 className="ml-4 text-2xl font-bold">Digima</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline">
              SEO
            </a>
            <a href="/" className="hover:underline">
              Content Marketing
            </a>
            <a href="/" className="hover:underline">
              Analytics
            </a>
          </nav>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default furnction HeroSection   () {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          DIGITAL MARKETING
        </h2>
        <h1 className="text-6xl font-bold text-center mb-8">
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
};

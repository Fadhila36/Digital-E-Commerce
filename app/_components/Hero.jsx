import React from "react";

function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 lg:flex lg:h-screen items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Discover Scuti,
            <br className="sm:hidden" />{" "}
            <span className="text-primary">Your Marketplace for Free</span>{" "}
            <br className="sm:hidden" />{" "}
            <span className="text-primary">Code & Assets</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 mb-8">
            Access free source code and assets for all projects with membership.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="block rounded-full bg-primary px-8 py-3 text-sm font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary-200 transition duration-300"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

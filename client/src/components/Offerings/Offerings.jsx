import React from "react";
import Header from "../Layouts/Header";

const Offerings = () => {
  return (
    <div>
      <Header bannerImage="bg2.jpg" bannerTitle="Offerings" />
      <main className="container mx-auto px-6 py-12">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Premier Student Accommodations</h2>
          <p className="text-gray-600">Choose from a variety of options that suit your lifestyle and budget.</p>
        </section>

        {/* Single Room Section */}
        <section className="mb-12 flex items-center gap-6">
          <img src="bg2.jpg" alt="Single Room" className="w-1/2 rounded-lg shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Single Room</h3>
            <p className="text-gray-600 mb-4">
              Experience privacy and comfort in our single rooms, designed for students who value their own space.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </section>

        {/* Sharing Room Section */}
        <section className="mb-12 flex items-center gap-6 flex-row-reverse">
          <img src="bg2.jpg" alt="Sharing Room" className="w-1/2 rounded-lg shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sharing Room</h3>
            <p className="text-gray-600 mb-4">
              Affordable and sociable, our sharing rooms are ideal for students looking to build connections.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </section>

        {/* Fully Furnished Section */}
        <section className="mb-12 flex items-center gap-6">
          <img src="bg2.jpg" alt="Fully Furnished" className="w-1/2 rounded-lg shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Fully Furnished</h3>
            <p className="text-gray-600 mb-4">
              Move in hassle-free with our fully furnished options, complete with all the essentials.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Masondo Real Estates for Accommodation?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            At Masondo Real Estates, we prioritize your comfort, safety, and affordability. Here's why we're the best choice.
          </p>
          <div className="flex justify-center gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Affordability</h3>
              <p className="text-gray-600">High-quality accommodation at prices you'll love.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safety</h3>
              <p className="text-gray-600">Secure and monitored environments for peace of mind.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comfort</h3>
              <p className="text-gray-600">Modern amenities to ensure a stress-free experience.</p>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitments</h2>
          <div className="flex justify-center gap-6">
            <div>
              <img src="bg2.jpg" alt="Quality Assurance" className="rounded-lg shadow-lg mb-2" />
              <h3 className="text-xl font-bold text-gray-800">Quality Assurance</h3>
            </div>
            <div>
              <img src="bg2.jpg" alt="Affordable Pricing" className="rounded-lg shadow-lg mb-2" />
              <h3 className="text-xl font-bold text-gray-800">Affordable Pricing</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Offerings;

import React from "react";
import Header from "../Layouts/Header";

const AboutUs = () => {
  return (
    <div>
      <Header bannerImage="bg2.jpg" bannerTitle="About Us" />
      <main className="container mx-auto px-6 py-12">
        {/* The Story Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2">
            <img
              src="aboutUs.jpg"
              alt="The story behind Masondo Real Estate"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Story Behind Masondo Real Estate</h2>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in the student accommodation sector, Masondo Real Estate has grown into a trusted name in providing exceptional living solutions for students. 
              Our journey started with a vision to create affordable, safe, and comfortable spaces for students to thrive. Over time, we have cultivated a reputation for excellence 
              by prioritizing the needs of our clients and continuously improving our services.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-gray-100 py-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 text-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1.447.894L10 15.618l-5.553 4.276A1 1 0 013 19V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Affordability</h3>
              <p className="text-gray-600 mt-2">
                We believe in providing high-quality accommodations that remain accessible and affordable to all students.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3a1 1 0 102 0V6a3 3 0 10-6 0v3a1 1 0 102 0V6a1 1 0 011-1z" clipRule="evenodd" />
                  <path d="M4 9a1 1 0 011 1v7a1 1 0 001 1h8a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H6a3 3 0 01-3-3v-7a1 1 0 011-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Safety</h3>
              <p className="text-gray-600 mt-2">
                Our properties are located in secure areas and equipped with modern safety features to give our clients peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 text-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-11a1 1 0 01-1.707-.707l-.293-.293a1 1 0 01-.707-1.707l3-3a1 1 0 011.414 1.414L13.414 6l.293.293a1 1 0 01-1.707.707z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 9a1 1 0 01-1 1H5a1 1 0 100 2h4a3 3 0 100-6H6a1 1 0 100 2h3a1 1 0 011 1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Comfort</h3>
              <p className="text-gray-600 mt-2">
                Every property is designed with comfort in mind, ensuring students feel at home away from home.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

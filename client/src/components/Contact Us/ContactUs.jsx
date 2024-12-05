import React from "react";
import Header from "../Layouts/Header";

const ContactUs = () => {
  return (
    <div>
      <Header bannerImage="bg2.jpg" bannerTitle="Contact Us" />
      <main className="container mx-auto px-6 py-12">
        {/* Reach Out Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Reach Out to Masondo Real Estates</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="mb-2"><strong>Address:</strong> 123 Real Estate Street, Masondo City</p>
            <p className="mb-2"><strong>Phone:</strong> +27 123 456 7890</p>
            <p className="mb-2"><strong>Email:</strong> info@masondorealestate.com</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;

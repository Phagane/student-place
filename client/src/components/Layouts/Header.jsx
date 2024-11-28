// src/components/Header.jsx
import React from "react";

const Header = ({ bannerImage, bannerTitle }) => {
  return (
    <header 
      className="relative bg-cover bg-center bg-no-repeat h-[400px]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-white">
            <a href="/">Property<span className="text-yellow-400">Hub</span></a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-yellow-300 transition">Home</a>
            <a href="/about" className="text-white hover:text-yellow-300 transition">About Us</a>
            <a href="/offerings" className="text-white hover:text-yellow-300 transition">Offerings</a>
            <a href="/contact" className="text-white hover:text-yellow-300 transition">Contact Us</a>
          </nav>
          <button className="md:hidden bg-yellow-400 text-blue-600 px-4 py-2 rounded-md">
            Menu
          </button>
        </div>
      </div>

      {/* Banner Title */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{bannerTitle}</h1>
      </div>
    </header>
  );
};

export default Header;

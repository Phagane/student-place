// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">Property<span className="text-yellow-400">Hub</span></p>
          <p className="text-sm mt-2">© 2024 PropertyHub. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-2">
        <p className="text-sm">Follow us on 
          <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">Facebook</a>, 
          <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">Twitter</a>, and 
          <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">Instagram</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center shadow-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="m-8 w-full md:w-1/2 object-cover"
      />
      <div className="p-6 md:w-1/2">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-700 mb-6">{description}</p>
        <Link
          to="/contact"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;

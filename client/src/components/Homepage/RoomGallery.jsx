// src/components/RoomGallery.jsx
import React from "react";

const RoomGallery = () => {
  const rooms = [
    {
      id: 1,
      image: "bg2.jpg",
      name: "Deluxe Room",
      description: "Spacious room with a queen-size bed, ensuite bathroom, and a beautiful view.",
      price: "R120 per night",
    },
    {
      id: 2,
      image: "bg2.jpg",
      name: "Standard Room",
      description: "Comfortable room with a double bed and essential amenities.",
      price: "R80 per night",
    },
    {
      id: 3,
      image: "bg2.jpg",
      name: "Suite",
      description: "Luxury suite with a king-size bed, living area, and premium facilities.",
      price: "R200 per night",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-yellow-500 font-bold">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;

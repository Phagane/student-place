import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Lerato M.",
      feedback: "Masondo Real Estates provided me with the perfect student accommodation. The process was smooth, and the staff were incredibly helpful.",
      rating: 5,
    },
    {
      id: 2,
      name: "Thabo K.",
      feedback: "Great experience! The rooms are clean, well-furnished, and close to campus. Highly recommended.",
      rating: 4,
    },
    {
      id: 3,
      name: "Nthabiseng P.",
      feedback: "I appreciate their professionalism and attention to detail. It's the best service I've experienced.",
      rating: 5,
    },
  ];

  return (
    <section className="mt-4 py-12 shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 italic mb-4">"{review.feedback}"</p>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 font-semibold">{review.name}</h3>
                
              </div>
              <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.219c.969 0 1.371 1.24.588 1.81l-3.417 2.486a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.539 1.118L10 13.347l-3.417 2.486c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.549 9.401c-.783-.57-.381-1.81.588-1.81h4.219a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

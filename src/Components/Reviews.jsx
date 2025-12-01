import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reviews from the public folder (JSON file)
    fetch("/ReviewsJsonData.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold"><HashLoader size={50} color="#FF6347" /> Loading reviews...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-linear-to-r from-purple-100 to-indigo-100 rounded-xl">
      <h2 className="text-4xl font-extrabold text-center text-[#FF6347] mb-8">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <div
            key={review.reviewId}
            className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.customerPhoto}
                alt={review.customerName}
                className="w-16 h-16 rounded-full mr-4 border-4 border-white"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{review.customerName}</h3>
                <p className="text-sm text-gray-200">{review.toyName}</p>
              </div>
            </div>
            <div className="mb-4">
              <img
                src={review.toyImage}
                alt={review.toyName}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${index < review.rating ? "text-yellow-400" : "text-gray-400"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M12 17.75l-6.16 3.24c-.36.19-.76-.19-.66-.58l1.18-6.88-5-4.88c-.27-.26-.12-.72.26-.78l6.88-1.04 3.07-6.2c.17-.34.63-.34.79 0l3.07 6.2 6.88 1.04c.38.06.53.52.26.78l-5 4.88 1.18 6.88c.1.39-.3.77-.66.58L12 17.75z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-200 text-sm mb-4">{review.reviewText}</p>
            <p className="text-xs text-gray-300">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

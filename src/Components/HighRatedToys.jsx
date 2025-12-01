import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const HighRatedToys = () => {
  const [highRatedToys, setHighRatedToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch toys data from the public folder (JSON file)
    fetch("/ToysJsonData.json") 
      .then((response) => response.json())
      .then((data) => {
        // Filter toys based on rating (rating = 5)
        const filteredToys = data.filter((toy) => toy.rating === 5);
        setHighRatedToys(filteredToys); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching high-rated toys:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold"><ScaleLoader size={50} color="#FF6347" loading={loading} /></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-50 mb-8">
        Premium 5-Star Toys
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {highRatedToys.map((toy) => (
          <div
            key={toy.toyId}
            className="transition-transform transform hover:scale-105 hover:shadow-lg p-5 rounded-lg border border-gray-300 hover:border-[#FF6347] cursor-pointer"
          >
            {/* Toy Image */}
            <div className="overflow-hidden mb-5">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Toy Details */}
            <div>
              <h3 className="text-xl font-bold text-[#1a202c] mb-2">{toy.toyName}</h3>
              <p className="text-md text-gray-600 mb-3">{toy.sellerName}</p>

              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${index < toy.rating ? "text-yellow-500" : "text-gray-300"}`}
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

              {/* Description */}
              <p className="text-sm text-gray-200 mb-3">{toy.description.slice(0, 100)}...</p>

              {/* Price */}
              <p className="text-lg font-bold text-[#FF6347] mb-5">${toy.price}</p>

              {/* Button (aligned to right) */}
              <div className="text-right">
                <a
                  href={`/details/${toy.toyId}`}
                  className="inline-block bg-[#FF6347] text-gray-200 py-2 px-4 rounded-lg hover:bg-[#FF4500] hover:underline text-center transition duration-300 ml-auto"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighRatedToys;

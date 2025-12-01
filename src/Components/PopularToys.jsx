import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const PopularToys = () => {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('/ToysJsonData.json')
        .then((response) => response.json())
        .then((data) => {
          setToysData(data.slice(0, 6));  // Display the first 6 toys
          setLoading(false);  
        })
        .catch((error) => {
          console.error('Error fetching the toys data:', error);
          setLoading(false);  
        });
    }, 2000); // 2-second delay before fetching data
  }, []);

  if (loading) {
    // Displaying spinner while data is loading
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-500 to-purple-500">
        <ScaleLoader size={50} color="#FF6347" loading={loading} />
      </div>
    );
  }

  return (
    <div className="popular-toys-container p-8 bg-linear-to-r from-purple-100 to-indigo-100">
      <h2 className="text-center text-4xl font-bold mb-10 text-purple-700">Popular Toys</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toysData.map((toy) => (
          <div key={toy.toyId} className="card bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-40 object-contain mx-auto"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-gray-800">{toy.toyName}</h3>
              <p className="text-sm text-gray-600">{toy.description.slice(0, 60)}...</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-teal-500">${toy.price}</span>
                <span className="text-sm text-yellow-500">{toy.rating} ★</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">Qty: {toy.availableQuantity}</span>
                <Link
                  to={`/details/${toy.toyId}`}
                  className="btn btn-ghost rounded-lg bg-pink-500 text-gray-200 hover:text-blue-700 hover:underline py-2 px-4 "
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Toys Button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/store"
          className="inline-block bg-linear-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-md text-lg font-semibold hover:bg-linear-to-r hover:from-teal-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
        >
          Go to Toys Store
        </Link>
      </div>
    </div>
  );
};

export default PopularToys;

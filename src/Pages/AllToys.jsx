import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";  // Importing GridLoader from react-spinners
import { Link } from "react-router-dom";
import useDocumentTitle from "../Hook/useDocumentTitle";

const AllToys = () => {
   useDocumentTitle('Toys Store - ToyPark');
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);  // State to manage loading

  useEffect(() => {
    setTimeout(() => {
      fetch('/ToysJsonData.json')  // Adjust the path to your JSON file
        .then((response) => response.json())
        .then((data) => {
          setToysData(data);  // Set all the toys data
          setLoading(false);  // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching the toys data:", error);
          setLoading(false);  // Set loading to false even if there's an error
        });
    }, 2000); // 2-second delay
  }, []);

  if (loading) {
    // Show spinner while loading data
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
        <GridLoader size={50} color="#FF6347" loading={loading} />
      </div>
    );
  }

  return (
    <div className="all-toys-container mt-24 p-8 bg-linear-to-r from-teal-100 via-green-100 to-yellow-100">
      <h2 className="text-center text-4xl font-bold mb-10 text-[#552820]">Toys Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {toysData.map((toy) => (
          <div key={toy.toyId} className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={toy.pictureURL} 
              alt={toy.toyName} 
              className="w-full h-40 object-cover mx-auto"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl text-blue-600">{toy.toyName}</h3>
              <p className="text-sm text-gray-600">{toy.description.slice(0, 60)}...</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-teal-500">${toy.price}</span>
                <span className="text-sm text-yellow-500">{toy.rating} ★</span>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-500">Qty: {toy.availableQuantity}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Category: {toy.Category}</span>
                <Link 
                  to={`/details/${toy.toyId}`} 
                  className="btn btn-ghost rounded-lg bg-pink-500 text-white hover:text-blue-700 hover:underline py-2 px-4"
                >
                  View More
                </Link>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <span className="block">Seller: {toy.sellerName}</span>
                <span className="block">Email: {toy.sellerEmail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;

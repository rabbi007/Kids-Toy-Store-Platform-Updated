import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader, GridLoader } from "react-spinners";
import { toast } from "react-toastify";
import useDocumentTitle from "../Hook/useDocumentTitle";

const ToyDetails = () => {
  useDocumentTitle("Toys Details - ToyPark");
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  // Try Now form
  const [tryNowFormData, setTryNowFormData] = useState({ name: "", email: "" });
  const [tryNowSuccessMessage, setTryNowSuccessMessage] = useState("");

  // Feedback form
  const [feedbackFormData, setFeedbackFormData] = useState({
    feedback: "",
    rating: "",
  });
  const [feedbackSuccessMessage, setFeedbackSuccessMessage] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated delay to match your original behavior
    setTimeout(() => {
      fetch("/ToysJsonData.json")
        .then((response) => response.json())
        .then((data) => {
          const toyDetails = data.find((toy) => toy.toyId === parseInt(id));
          setToy(toyDetails);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching toy details:", error);
          setLoading(false);
        });
    }, 2000);
  }, [id]);

  const handleTryNowInputChange = (e) => {
    const { name, value } = e.target;
    setTryNowFormData({
      ...tryNowFormData,
      [name]: value,
    });
  };

  const handleFeedbackInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackFormData({
      ...feedbackFormData,
      [name]: value,
    });
  };

  const handleTryNowSubmit = (e) => {
    e.preventDefault();
    if (tryNowFormData.name && tryNowFormData.email) {
      setTryNowSuccessMessage(
        "Thank you for your interest! We’ve received your trial request for this toy. Our team will reach out to you shortly."
      );
      setTryNowFormData({ name: "", email: "" });
      toast.success("Your trial request has been received!");
    } else {
      setTryNowSuccessMessage("Please fill in both fields.");
      toast.error("Please fill in both fields.");
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedbackFormData.feedback && feedbackFormData.rating) {
      setFeedbackSuccessMessage("Thank you for your feedback and rating!");
      setFeedbackFormData({ feedback: "", rating: "" });
      toast.success("Your feedback and rating have been submitted!");
    } else {
      setFeedbackSuccessMessage("Please fill in all fields.");
      toast.error("Please fill in all fields.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
        <GridLoader size={50} color="#4285F4" loading={loading} />
      </div>
    );
  }

  if (!toy) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-linear-to-r from-blue-50 via-green-50 to-yellow-50">
        <div className="flex items-center gap-3 text-gray-700">
          <ClipLoader size={26} color="#EA4335" />
          <span>Loading…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24">
      <div className="bg-linear-to-br from-blue-50 via-amber-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Toy Details
          </h2>
          

          {/* Details section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Image card */}
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden">
              <div className="bg-linear-to-r from-[#4285F4]/10 via-[#FBBC05]/10 to-[#34A853]/10 h-2" />
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-40 sm:h-80 object-contain "
              />
            </div>

            {/* Info card */}
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-[#1a73e8]">{toy.toyName}</h3>
                <span className="inline-flex items-center rounded-full bg-[#E8F0FE] text-[#1a73e8] px-3 py-1 text-sm font-semibold">
                  ${toy.price}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#5f6368] leading-relaxed">
                {toy.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Rating</p>
                  <p className="mt-1 font-semibold text-gray-900">{toy.rating} ★</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Category</p>
                  <p className="mt-1 font-semibold text-gray-900">{toy.Category}</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Available Quantity
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {toy.availableQuantity}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Seller</p>
                  <p className="mt-1 font-semibold text-gray-900">{toy.sellerName}</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 border border-gray-200">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Contact
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Email:&nbsp;</span>
                  <a
                    href={`mailto:${toy.sellerEmail}`}
                    className="text-[#1a73e8] hover:underline"
                  >
                    {toy.sellerEmail}
                  </a>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Mobile:&nbsp;</span>
                  01234567890
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="mt-10 grid grid-cols-4 gap-2">
            <div className="h-1 rounded bg-[#4285F4]" />
            <div className="h-1 rounded bg-[#EA4335]" />
            <div className="h-1 rounded bg-[#FBBC05]" />
            <div className="h-1 rounded bg-[#34A853]" />
          </div>

          {/* Forms */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Try Now */}
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#34A853]">Try Now</h3>
                
              </div>

              {tryNowSuccessMessage && (
                <div className="mt-4 bg-[#E6F4EA] text-[#137333] p-3 rounded-lg border border-[#CEEAD6]">
                  {tryNowSuccessMessage}
                </div>
              )}

              <form onSubmit={handleTryNowSubmit} className="mt-6 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#202124]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={tryNowFormData.name}
                    onChange={handleTryNowInputChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-[#4285F4]/30 focus:border-[#4285F4] transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#202124]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={tryNowFormData.email}
                    onChange={handleTryNowInputChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-[#34A853]/30 focus:border-[#34A853] transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] text-white font-medium py-3 hover:bg-[#145dbf] focus:outline-none focus:ring-4 focus:ring-[#1a73e8]/30 transition"
                >
                  Try Now
                </button>
              </form>
            </div>

            {/* Feedback */}
            <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#EA4335]">
                  Feedback & Rating
                </h3>
              </div>

              {feedbackSuccessMessage && (
                <div className="mt-4 bg-[#E6F4EA] text-[#137333] p-3 rounded-lg border border-[#CEEAD6]">
                  {feedbackSuccessMessage}
                </div>
              )}

              <form onSubmit={handleFeedbackSubmit} className="mt-6 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-sm font-medium text-[#202124]"
                  >
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={feedbackFormData.feedback}
                    onChange={handleFeedbackInputChange}
                    className="mt-2 w-full p-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-[#FBBC05]/30 focus:border-[#FBBC05] transition"
                    rows="4"
                    required
                  />
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#202124]">
                    Rating
                  </span>
                  <div className="mt-3 flex flex-wrap items-center justify-start gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <label
                        key={star}
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="radio"
                          name="rating"
                          value={star}
                          checked={feedbackFormData.rating === `${star}`}
                          onChange={handleFeedbackInputChange}
                          className="accent-[#EA4335] scale-125"
                        />
                        <span className="text-sm font-medium text-gray-800">
                          {star} ★
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#34A853] text-white font-medium py-3 hover:bg-[#278a3e] focus:outline-none focus:ring-4 focus:ring-[#34A853]/30 transition"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

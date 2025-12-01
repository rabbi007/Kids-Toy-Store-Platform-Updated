import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase";
import useDocumentTitle from "../Hook/useDocumentTitle";

const Profile = () => {
  useDocumentTitle ('Profile - ToyPark');
    // auto scroll to top of this page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { currentUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Declare to edit name and photoURL
  const [name, setName] = useState(currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "/default-avatar.png");
  const [loading, setLoading] = useState(false); // General loading state
  const [signOutLoading, setSignOutLoading] = useState(false); // Sign out specific loading state

  const handleSignOut = () => {
    setSignOutLoading(true); // Set signOut loading state
    signOutUser()
      .then(() => {
        toast.success("Successfully logged out.");
        navigate("/login", { replace: true });
      })
      .catch(() => {
        toast.error("Failed to log out. Try again.");
      })
      .finally(() => {
        setSignOutLoading(false); // Reset loading after sign out
      });
  };

  // Handle saving the profile changes
  const handleSaveChanges = () => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
        toast.error("Error updating profile. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!currentUser) {
    // while authentication is being checked
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
        <p className="mt-4 text-lg text-gray-600">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-400 via-purple-500 to-pink-600 flex items-center justify-center p-4 mt-24">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg sm:max-w-md text-center">
        <div className="border-2 border-gray-300 rounded-2xl p-4 m-4">
          {/* Profile Image with Hover Effect */}
          <img
            src={
              currentUser.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full border-4 border-purple-400 shadow-lg transform transition-transform duration-300 animate-pulse"
          />

          {/* User Name */}
          <h2 className="text-2xl font-bold mt-4 text-purple-700">
            Name:{" "}
            <span className="text-red-700">
              {currentUser.displayName || "No User Logged-in"}
            </span>
          </h2>

          {/* User Email */}
          <p className="text-gray-600 mt-1 text-sm">
            Email ID: {currentUser.email || "Not found!"}
          </p>
        </div>

        {/* Editable Name and PhotoURL */}
        <div className="text-left text-gray-700 text-sm space-y-4 mb-6">
          <label className="font-semibold text-purple-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full mb-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />

          <label className="font-semibold text-purple-600">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter photo URL"
          />
        </div>

        {/* Save Changes Button */}
        <button
          onClick={handleSaveChanges}
          className="mt-4 w-full bg-linear-to-r from-purple-500 to-purple-700 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Save Changes"
          )}
        </button>

        {/* Logout Button with Loader */}
        <button
          onClick={handleSignOut}
          className="mt-6 w-full bg-red-500 text-white font-semibold py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          disabled={signOutLoading}
        >
          {signOutLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Sign Out"
          )}
        </button>
      </div>
    </div>
  );
};

export default Profile;

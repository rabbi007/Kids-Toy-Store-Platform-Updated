import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser, signOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("Successfully logged out."))
      .catch(() => toast.error("Failed to log out. Try again."));
  };

  return (
    <>
      <header className="navbar fixed top-0 z-50 w-full bg-linear-to-r from-gray-900 via-purple-800 to-black h-16 sm:h-20 md:h-24 shadow">
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile menu */}
              <div className="dropdown">
                <button
                  tabIndex={0}
                  aria-label="Open menu"
                  className="btn btn-ghost lg:hidden p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow-lg"
                >
                  <li>
                    <Link to="/" className="text-teal-500 hover:text-teal-600">
                      Home
                    </Link>
                  </li>

                    <li>
                      <Link to="/register" className="text-teal-500 hover:text-teal-600">
                        Register
                      </Link>
                    </li>
                  
                  <li>
                    <Link to="/profile" className="text-teal-500 hover:text-teal-600">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/store" className="text-teal-500 hover:text-teal-600">
                      Toys-Store
                    </Link>
                  </li>

                  {currentUser ? (
                    <li>
                      <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login" className="text-teal-500 hover:text-teal-600">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>

              {/* Logo + Brand */}
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="ToyPark Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain mr-2 ml-4"
                />
                <Link
                  to="/"
                  className="btn btn-ghost px-2 text-xl sm:text-2xl md:text-3xl text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:border-teal-500 hover:text-orange-400"
                >
                  ToyPark
                </Link>
              </div>
            </div>

            {/* Center: desktop menu */}
            <nav className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white gap-1">
                <li>
                  <Link to="/" className="hover:text-teal-200 transition-all duration-300">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/register" className="hover:text-teal-200 transition-all duration-300">
                    Register
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="hover:text-teal-200 transition-all duration-300">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to="/profile" className="hover:text-teal-200 transition-all duration-300">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/store" className="hover:text-teal-200 transition-all duration-300">
                    Toys-Store
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right area */}
            <div className="flex items-center">
              <div className="hidden sm:flex items-center gap-3">
                {currentUser ? (
                  <div className="relative">
                    <img
                      src={currentUser.photoURL || "/default-avatar.png"}
                      alt="User"
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-xl border-2 border-white shadow"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl text-white opacity-0 hover:opacity-100 transition-opacity bg-linear-to-r from-blue-500/70 via-purple-500/70 to-pink-500/70 px-2 text-sm text-center">
                      <span className="max-w-40">{currentUser.displayName}</span>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-ghost text-base sm:text-lg text-white transition-all duration-300 hover:bg-gray-800 hover:text-blue-400 mr-6"
                  >
                    <FaSignInAlt className="mr-2" />
                    Login
                  </Link>
                )}

                {currentUser && (
                  <button
                    className="btn btn-ghost text-base sm:text-lg text-white transition-all duration-300 hover:bg-gray-800 hover:text-red-500 mr-6"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

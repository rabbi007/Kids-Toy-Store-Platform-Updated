import React, { useState, useContext, useEffect } from "react";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TermsPopup from "./TermsPopup";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import useDocumentTitle from "../Hook/useDocumentTitle";

const Register = () => {
  useDocumentTitle("Register - ToyPark");
    // auto scroll to top of this page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  // Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Google login successful!", { position: "top-center" });
        navigate(location.state || "/profile"); 
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google sign-in failed!", { position: "top-center" });
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    const photoURL = event.target.photoURL.value;
    const terms = event.target.terms.checked;

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, include a uppercase and a lowercase"
      );
      return;
    }

    // Terms check
    if (!terms) {
      toast.warning("Please accept the Terms & Conditions!");
      return;
    }

    setLoading(true);

    // Create new user
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update profile (name + photo)
        return updateProfile(user, {
          displayName: username,
          photoURL: photoURL,
        }).then(() => user);
      })
      .then(() => {
        // Immediately sign out to prevent auto-login
        signOut(auth);
        // Navigate to login page
        navigate("/login");
        event.target.reset();
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
      })
      .finally(() => {
        console.log("Current User:", user);
        setLoading(false);
      });
  };

  return (
    <div className="bg-linear-to-r from-blue-400 via-red-400 to-yellow-400">
      <div className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-4 lg:gap-4">
            {/* Left copy */}
            <div className="text-center lg:text-left max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Register now!
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white">
                Create an account <br className="hidden sm:block" /> to get
                started
              </p>
            </div>

            {/* Card */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-md">
              <div className="card bg-white shadow-xl rounded-xl">
                <div className="card-body p-5 sm:p-8">
                  <form onSubmit={handleRegister} noValidate>
                    <fieldset className="fieldset">
                      {/* Email */}
                      <label htmlFor="email" className="label text-gray-800">
                        Email ID
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="input w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        required
                      />

                      {/* Password */}
                      <label htmlFor="password" className="label text-gray-800">
                        Password
                      </label>
                      <div className="relative mb-1">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="input w-full p-3 pr-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Password"
                          required
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                          {showPassword ? (
                            <IoEye size={20} />
                          ) : (
                            <IoEyeOff size={20} />
                          )}
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        Min. 6 characters with 1 uppercase & 1 lowercase
                      </p>

                      {/* Full Name */}
                      <label htmlFor="username" className="label text-gray-800">
                        Full Name
                      </label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        className="input w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Full Name"
                        required
                      />

                      {/* Photo URL */}
                      <label htmlFor="photoURL" className="label text-gray-800">
                        Photo URL
                      </label>
                      <input
                        id="photoURL"
                        type="url"
                        name="photoURL"
                        className="input w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Photo URL"
                        required
                      />

                      {/* Terms */}
                      <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <label className="label text-blue-600 flex gap-2 items-center">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="terms"
                          />
                          <span className="text-sm">
                            Accept Terms & Conditions
                          </span>
                        </label>
                        <div className="self-end">
                          <TermsPopup />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="btn bg-blue-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                          "Register"
                        )}
                      </button>
                    </fieldset>
                  </form>

                  <p className="text-center mt-5 text-sm sm:text-base">
                    Already have an account?{" "}
                    <Link
                      className="text-blue-600 underline font-extrabold"
                      to="/login"
                    >
                      Login
                    </Link>{" "}
                    here
                  </p>

                  {/* Google Login Button */}
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full flex items-center justify-center gap-3 mt-5 bg-white border-2 border-gray-300 rounded-lg text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  >
                    <svg
                      aria-label="Google logo"
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="shrink-0"
                    >
                      <g>
                        <path fill="#fff" d="m0 0H512V512H0"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
            {/* End card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

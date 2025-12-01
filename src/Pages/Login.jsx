import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useDocumentTitle from "../Hook/useDocumentTitle";

const Login = () => {
  useDocumentTitle ('Login - ToyPark');
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please fill all fields!");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(location.state || "/profile"); 
      })
      .catch((error) => {
        toast.error("Login failed! " + error.message);
      })
      .finally(() =>{console.log('Current User:',user); setLoading(false) } );
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-500 via-green-500 to-yellow-500 flex items-center justify-center p-4 mt-24">
      <div className="bg-gray-50 shadow-lg rounded-lg w-full max-w-4xl p-8 flex flex-col md:grid md:grid-cols-2 gap-6">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center bg-white rounded-lg">
          <img
            src="https://i.ibb.co.com/sJFm3x7W/banner-new-8.jpg" // Replace with your desired image URL
            alt="Login Image"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Welcome Back!</h2>
          <h3 className="text-sm text-center mb-6 text-gray-600">Please enter your login details below</h3>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <label className="label text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mb-4 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <label className="label text-gray-700">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
              </span>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center mb-4">
              <a
                href={`/forget-Password?email=${email}`}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button with loader */}
            <button
              type="submit"
              className="btn btn-neutral w-full bg-linear-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center mt-5">
            <hr className="grow border-t border-gray-300" />
            <span className="mx-4 text-gray-600">OR</span>
            <hr className="grow border-t border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-lg text-blue-500 hover:bg-gray-100 mt-5"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
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

          {/* Register Link */}
          <div className="text-sm mt-6 text-center">
            <p>
              New to our website?{" "}
              <Link
                className="text-blue-600 underline font-semibold"
                to="/register"
              >
                Register
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

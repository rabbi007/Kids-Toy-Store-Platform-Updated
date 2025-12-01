import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // React Icons
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-linear-to-r from-gray-900 via-purple-800 to-black text-white p-10 flex flex-col md:flex-row justify-between items-center gap-10">
      {/* <aside className="text-center">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="font-extralight text-2xl">
          KHANDAKER
        </p>
      </aside> */}
      <div className="">
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

      <div className="gap-10 mt-15">
        <nav className="flex justify-center gap-10">
          {/* Links for Terms and Privacy */}
          <a
            className="link link-hover text-white hover:text-gray-200"
            href="/about-us"
          >
            About us
          </a>
          <a
            className="link link-hover text-white hover:text-gray-200"
            href="/contact-us"
          >
            Contact us
          </a>
          <a
            className="link link-hover text-white hover:text-gray-200"
            href="/terms-and-conditions"
          >
            Terms and Conditions
          </a>
          <a
            className="link link-hover text-white hover:text-gray-200"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </nav>

        <nav className="flex justify-center gap-25">
          {/* Social Media Links */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={30} />
          </a>
        </nav>
      </div>

      <aside className="text-center mt-6">
        <div className="text-center">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-extralight text-2xl mt-5">
            KHANDAKER Horizon Ltd.
            <br />
            <span className="text-sm font-light">
              Providing reliable tech solutions since 2015
            </span>
          </p>
        </div>
        <p className="text-sm text-white text-center">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

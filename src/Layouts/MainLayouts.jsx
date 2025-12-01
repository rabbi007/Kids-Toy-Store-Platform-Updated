import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div className="bg-linear-to-r from-purple-100 to-indigo-100">
      <div>
        <NavBar />
      </div>

      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>

      <ToastContainer autoClose={1000} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default MainLayouts;

import React, { useEffect } from "react";
import useDocumentTitle from "../Hook/useDocumentTitle";


const AboutUs = () => {
  useDocumentTitle('About Us - ToyPark');
    // auto scroll to top of this page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
      <div className="p-8 bg-linear-to-r from-blue-500 via-purple-600 to-pink-500 text-white mt-24">
        <div className="max-w-4xl mx-auto text-center text-wrap ">
          <h2 className="text-3xl font-extralight mb-6">About Us</h2>
          <p className="text-lg font-light mb-4">
            Welcome to our Toy Store, where we bring joy to children of all ages
            with the finest selection of toys. We are dedicated to providing you
            with top-quality products and excellent customer service.
          </p>
          <p className="text-lg font-light mb-4">
            Founded in 2020, our mission is to offer a diverse collection of
            toys that inspire creativity, learning, and play. Whether it's
            educational toys, action figures, or arts & crafts, we have
            something for every child.
          </p>
          <p className="text-lg font-light">
            We pride ourselves on customer satisfaction and aim to make every
            shopping experience fun and easy. If you have any questions or need
            assistance, feel free to contact us. We're here to help!
          </p>
        </div>
      </div>
  );
};

export default AboutUs;

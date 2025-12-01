import React from "react";
import Hero from "../Components/Hero";
import PopularToys from "../Components/PopularToys";
import useDocumentTitle from "../Hook/useDocumentTitle";
import Reviews from "../Components/Reviews";
import HighRatedToys from "../Components/HighRatedToys";

const Home = () => {
  useDocumentTitle ('Home - ToyPark');
  return (
       <div>
        <Hero />
        <PopularToys />
        <HighRatedToys/>
        <Reviews/>
      </div>
  );
};

export default Home;

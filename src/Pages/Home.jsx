import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import PopularToys from "../Components/PopularToys";
import useDocumentTitle from "../Hook/useDocumentTitle";
import Reviews from "../Components/Reviews";
import HighRatedToys from "../Components/HighRatedToys";
import Faq from "../Components/FAQ";

const Home = () => {
  useDocumentTitle ('Home - ToyPark');
    // auto scroll to top of this page
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
       <div>
        <Hero />
        <PopularToys />
        <HighRatedToys/>
        <Reviews/>
        <Faq/>
      </div>
  );
};

export default Home;

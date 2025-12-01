import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <div className="text-center p-5 mt-20"> 
      <Swiper
        style={{ background: "blue" }}
        loop={true}
        navigation={true}
        pagination={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jP2PKxPB/banner-new-2.jpg"
            alt="Image 1"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/HLHt4F7Q/banner-new-1.jpg"
            alt="Image 2"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/fzhSsFZd/banner-3.jpg"
            alt="Image 3"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/6czdTgD7/banner-new-4.jpg"
            alt="Image 4"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/SDFCdJs1/banner-new-7.jpg"
            alt="Image 5"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/GQJWdKhG/banner-6.jpg"
            alt="Image 6"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;

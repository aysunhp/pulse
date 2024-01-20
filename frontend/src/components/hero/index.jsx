import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./hero.scss";

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
   
     
    >
      <SwiperSlide>
        {" "}
        <div className="hero hero1">
          <div className="container">
            <h1>
              Food and more <span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="hero hero2">
          <div className="container">
            <h1>
              Special Dish <span>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero3">
          <div className="container">
            <h1>
              Hygienic Food <span>.</span>
            
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;

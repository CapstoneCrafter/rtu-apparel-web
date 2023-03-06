//SLIDESHOW COMPONENT

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SlideOne from "./slideshow-1";
import SlideTwo from "./slideshow-2";
import SlideThree from "./slideshow-3";
import SlideFour from "./slideshow-4";
import SlideFive from "./slideshow-5";

// import required modules
import { Pagination } from "swiper";

export default function SliderComponent() {
  return (
    <div className="max-w-7xl mx-auto">
    
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
                 <SlideOne/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideTwo/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideThree/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideFour/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideFive/>
              </SwiperSlide>
          </Swiper>
    
      </div>
  );
}
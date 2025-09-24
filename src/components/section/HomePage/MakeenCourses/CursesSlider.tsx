"use client";
import React from "react";
import { CardsInformation } from "@/app/(URLS)/courses/page";
import Cards from "@/app/(URLS)/courses/cards";

// Swiper React imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

function CoursesSlider() {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-semibold text-3xl">دوره های مکین</h2>
      </div>

      {/* اسلایدر اول (چپ به راست) */}
      <div className="flex pb-9">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={16}
          dir="ltr"   // 👈 جهت چپ به راست
        >
          {CardsInformation.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards
                image={item.image}
                status={item.status}
                title={item.title}
                text={item.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* اسلایدر دوم (راست به چپ) */}
      <div className="flex">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={16}
          dir="rtl"   // 👈 جهت راست به چپ
        >
          {CardsInformation.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards
                image={item.image}
                status={item.status}
                title={item.title}
                text={item.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center mt-12">
        <button className="w-48 text-blue-600 border p-2 rounded-full border-blue-600">
          <a href="/">مشاهده همه دوره ها</a>
        </button>
      </div>
    </div>
  );
}

export default CoursesSlider;

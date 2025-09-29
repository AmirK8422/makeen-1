"use client";
import React from "react";

// Swiper React imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardsInformation } from "@/app/site/(URL)/courses/page";
import Cards from "@/app/site/(URL)/courses/cards";

function CoursesSlider() {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-semibold text-3xl">دوره های مکین</h2>
      </div>

      {/* اسلایدر اول (چپ به راست) */}
      <div className="flex pb-9">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          speed={2000}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
          }}
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
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          loop={true}
          dir="rtl"
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
          }}
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
          <a href="site/courses">مشاهده همه دوره ها</a>
        </button>
      </div>
    </div>
  );
}

export default CoursesSlider;

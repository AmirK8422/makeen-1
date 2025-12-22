"use client" 
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Mentor {
  id: string;
  fullName: string;
  position?: string;
  courseName: string;
  description: string;
  imagePath: string;
  side: string; // اضافه شد
}

const API_URL = "http://194.36.174.46:2000/api/Mentor";

function Mentors() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: Mentor[]) => {
        setMentors(data);
        setLoading(false);
      })
      .catch(() => {
        setMentors([]);
        setLoading(false);
      });
  }, []);

  const getImageUrl = (path: string) => `http://194.36.174.46:2000/${path}`;

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">
        در حال بارگذاری منتورها...
      </div>
    );
  }

  if (mentors.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">
        منتوری برای نمایش وجود ندارد.
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <img
        src="img/imagesInSite/3.svg"
        alt=""
        className="hidden lg:block absolute -top-25 left-0 z-1"
      />
      <img
        src="img/imagesInSite/4.svg"
        alt=""
        className="hidden lg:block absolute left-0 -top-10 z-10"
      />

      <div className="mt-16 md:mt-24 mx-6 md:mx-20 lg:mx-36">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center">
          منتورهای مکین
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* توضیحات متن */}
          <div className="md:w-1/2 text-right order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {mentors[activeIndex].fullName}
            </h3>

            <p className="text-gray-600 mb-2">
              {mentors[activeIndex].position}
            </p>

            {/* ✔ side نمایش */}
            <p className="text-gray-600 mb-2">
              {mentors[activeIndex].side === "mentor" ? "منتور" : mentors[activeIndex].side}
            </p>

            <p className="text-gray-600 font-medium mb-4">
              {mentors[activeIndex].courseName}
            </p>

            <p className="leading-relaxed">
              {mentors[activeIndex].description}
            </p>

            <div className="hidden md:flex flex-row-reverse justify-center md:justify-start gap-4 mt-6">
              <button className="mentor-next px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <FaArrowRightLong />
              </button>
              <button className="mentor-prev px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                <FaArrowLeftLong />
              </button>
            </div>
          </div>

          {/* اسلایدر */}
          <div className="md:w-1/2 order-1 md:order-2 w-full">
            <Swiper
              navigation={{ nextEl: ".mentor-next", prevEl: ".mentor-prev" }}
              modules={[Navigation]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 16, centeredSlides: true },
                640: { slidesPerView: 2.5, spaceBetween: 24, centeredSlides: true },
                1024: { slidesPerView: 3, spaceBetween: -100, centeredSlides: true },
                1280: { slidesPerView: 4, spaceBetween: -150, centeredSlides: true },
              }}
            >
              {mentors.map((mentor, index) => {
                const diff = Math.abs(index - activeIndex);
                let scale = diff === 0 ? 1 : diff === 1 ? 0.8 : diff === 2 ? 0.6 : 0.5;

                return (
                  <SwiperSlide
                    key={mentor.id}
                    className="rounded-2xl transition-transform duration-300 flex justify-center"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: diff > 2 ? 0.4 : 1,
                      zIndex: 10 - diff,
                    }}
                  >
                    <img
                      src={getImageUrl(mentor.imagePath)}
                      alt={mentor.fullName}
                      className="rounded-2xl object-cover w-[180px] h-[260px] md:w-[200px] md:h-[300px] lg:w-[220px] lg:h-[320px] shadow-lg"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mentors;

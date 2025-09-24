"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Mentors() {
  const mentors = [
    {
      name: "محمد صادقی کیا",
      position: "CEO at Makeen",
      course: "منتور دوره UI/UX",
      description:
        "اینجا توی مکین یاد میگیری چطوری یادبگیری. یعنی چی؟ یعنی ما علاوه بر اینکه بهت آموزش های تخصصی میدیم، یادت میدیم که بتونی از پس...",
      picture: "/img/Mentors/2.jpg",
    },
    {
      name: "علی رضایی",
      position: "Senior Developer",
      course: "منتور دوره Frontend",
      description:
        "با من یاد میگیری پروژه‌هات رو چطور مثل یک حرفه‌ای مدیریت و اجرا کنی...",
      picture: "/img/Mentors/1.jpg",
    },
    {
      name: "سارا محمدی",
      position: "Product Designer",
      course: "منتور دوره UX",
      description:
        "من اینجام که بهت کمک کنم تجربه کاربری جذاب‌تری برای محصولت بسازی...",
      picture: "/img/Mentors/3.jpg",
    },
    {
      name: "امیر احمدی",
      position: "Software Architect",
      course: "منتور دوره Backend",
      description:
        "با هم یاد می‌گیریم چطور سیستم‌های بزرگ و مقیاس‌پذیر طراحی کنی...",
      picture: "/img/Mentors/4.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="releive relative" >
            <img
        src="img/imagesInSite/3.svg"
        alt=""
        className="hidden lg:block absolute -top-25 left-0 -z-1"
      />
      <img
        src="img/imagesInSite/4.svg"
        alt=""
        className="hidden lg:block absolute left-0 -top-11 -z-10"
      />
      <div className="mt-16 md:mt-24 mx-6 md:mx-20 lg:mx-36">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center">
        منتورهای مکین
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left side: mentor text */}
        <div className="md:w-1/2 text-right order-2 md:order-1">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            {mentors[activeIndex].name}
          </h3>
          <p className="text-gray-600 mb-2">{mentors[activeIndex].position}</p>
          <p className="text-gray-600 font-medium mb-4">
            {mentors[activeIndex].course}
          </p>
          <p className="leading-relaxed">{mentors[activeIndex].description}</p>

          {/* Navigation buttons (only desktop) */}
          <div className="hidden flex-row-reverse md:flex  justify-center md:justify-start gap-4 mt-6">
            {/* Prev button = left */}
            <button className="mentor-prev px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaArrowRightLong />
            </button>
            {/* Next button = right */}
            <button className="mentor-next px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaArrowLeftLong />
            </button>
          </div>
        </div>

        {/* Right side: swiper */}
        <div className="md:w-1/2 order-1 md:order-2 w-full">
          <Swiper
            navigation={{ nextEl: ".mentor-next", prevEl: ".mentor-prev" }}
            modules={[Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
            breakpoints={{
              0: { slidesPerView:1, spaceBetween: -420, centeredSlides: false },
              640: { slidesPerView: 3, spaceBetween: -100, centeredSlides: false },
              1024: { slidesPerView: 3, spaceBetween: -200, centeredSlides: true },
              1280: { slidesPerView: 4, spaceBetween: -300, centeredSlides: true },
            }}
          >
            {mentors.map((mentor, index) => {
              const diff = Math.abs(index - activeIndex);

              let scale = 0.5;
              if (diff === 0) scale = 1;
              else if (diff === 1) scale = 0.7;
              else if (diff === 2) scale = 0.6;

              return (
                <SwiperSlide
                  key={index}
                  className="rounded-2xl transition-transform duration-300 flex justify-center"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: diff > 2 ? 0.4 : 1,
                    zIndex: 999 - diff,
                  }}
                >
                  <img
                    src={mentor.picture}
                    alt={mentor.name}
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

"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Slider() {
  const swiperRef = useRef(null); 

  const vidio = [
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 1 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 2 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 3 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 4 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 5 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 6 },
    { title: "ویژه برنامه نوروزی مکین رو (پارت دوم)", academy: "آکادمی مکین", view: "۲۳ هزار بازدید", src: "/video/sample.mp4", id: 7 },
  ];

  return (
    <div className="relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // ✅ save swiper instance
        }}
        className="mySwiper"
      >
        {vidio.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[250px] sm:!w-[300px] lg:!w-[350px]"
          >
            <div className="shadow p-2 rounded-2xl bg-white">
              <video className="rounded w-full" controls>
                <source src={item.src} type="video/mp4" />
                مرورگر شما از ویدیو پشتیبانی نمی‌کند
              </video>
              <div className="text-right p-1">
                <h3 className="text-[14px] font-bold">{item.title}</h3>
                <div className="text-right flex flex-row-reverse items-center mt-2">
                  <img src="img/icons/logoo.svg" className="w-6" alt="" />
                  <p className="text-[#8E8E93] text-[12px]">{item.academy}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#8E8E93] text-[12px]">{item.view}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Navigation Buttons  */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 z-20 hidden sm:flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#F2F2F7] text-black p-3 rounded-full shadow transition"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#F2F2F7] text-black p-3 rounded-full shadow transition"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default Slider;

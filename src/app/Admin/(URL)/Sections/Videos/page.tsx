'use client'
import VidioSlider from "@/components/section/HomePage/VidioSlider/VidioSlider";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Videos() {
  const vidio = [
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت دوم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 1,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت سوم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 2,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت چهارم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 3,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت دوم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 4,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت دوم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 5,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت دوم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 6,
    },
    {
      title: "ویژه برنامه نوروزی مکین رو (پارت هشتم)",
      academy: "آکادمی مکین",
      view: "۲۳ هزار بازدید",
      src: "/video/sample.mp4",
      id: 7,
    },
  ];
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 m-4">
      <div className="gap-4 flex flex-row-reverse justify-end mr-6 mt-[66px] mb-[80px]">
        <button className="h-[53px] w-[140px] rounded-lg py-[12px] px-6 bg-[#F28C28] text-white text-lg font-medium">
          افزودن ویدیو
        </button>
        <input
          className="w-[532px] h-[53px] rounded-lg py-3 pr-4 pl-6 shadow-[0_0_7px_rgba(0,0,0,0.15)]"
          placeholder="لینک ویدیو رو اینجا وارد کنید"
        ></input>
      </div>
      <div className="flex">
         <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
          >
        {vidio.map((item,index) => (
         
            <SwiperSlide key={index} className="!w-auto">
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
          
        ))}</Swiper>
      </div>
    </div>
  );
}

export default Videos;

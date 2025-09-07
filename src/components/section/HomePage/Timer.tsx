"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./paginasionCoustom.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
function Timer() {
  const courses = [
    {
      url: "/ds",
      time: { day: 5, hour: 16, minute: 8, second: 2 },
      pic: "/img/courseImg.svg",
      cours: "دوره UX/UI",
      description:
        "اگردوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده",
    },
    {
      url: "/ds2",
      time: { day: 2, hour: 3, minute: 15, second: 2 },
      pic: "/img/courseImg.svg",
      cours: "دوره فرانت‌اند",
      description: "این دوره مخصوص عاشقان طراحی وب و توسعه فرانت‌اند است",
    },
    {
      url: "/ds3",
      time: { day: 10, hour: 8, minute: 30, second: 50 },
      pic: "/img/courseImg.svg",
      cours: "دوره بک‌اند",
      description: "یادگیری Node.js و دیتابیس برای ورود به دنیای بک‌اند",
    },
  ];
  return (
    <div>
      {/* باکس اسلایدر */}
      <div>
        <div className="flex items-center flex-col shadow-2xl rounded-2xl px-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            className="w-[280px] sm:w-[320px]"
          >
            {courses.map((cours, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between items-center mx-4">
                  <div className="text-center">
                <div>
                  <p className="text-orange-500 text-[18px] font-semibold mb-4">
                    مهلت ثبت نام
                  </p>
                </div>
                  {/* تایمر */}
                  <div>
                    <div className="flex items-center justify-between flex-row-reverse text-center gap-6">
                      <span className="border-b w-11 text-[20px] font-bold">
                        {cours.time.day}
                      </span>
                      <span className="border-b w-11 text-[20px] font-bold">
                        {cours.time.hour}
                      </span>
                      <span className="border-b w-11 text-[20px] font-bold">
                        {cours.time.minute}
                      </span>
                      <span className="border-b border-black w-11 font-bold text-[20px] text-orange-500">
                        {cours.time.second}
                      </span>
                    </div>

                    {/* لیبل تایمر */}
                    <div className="flex items-center justify-between flex-row-reverse text-center gap-10 mt-2 border-b">
                      <span className="text-gray-400">روز</span>
                      <span className="text-gray-400">ساعت</span>
                      <span className="text-gray-400">دقیقه</span>
                      <span className="text-gray-400">ثانیه</span>
                    </div>
                  </div>

                  </div>

                  <div className="">

                  {/* عکس دوره */}
                  <div>
                    <img src={cours.pic} alt={cours.cours} />
                  </div>

                  {/* توضیحات دوره */}
                  <div className="flex items-center flex-col gap-2 justify-center">
                    <h3 className="text-[20px] font-semibold">{cours.cours}</h3>
                    <p className="text-[#8E8E93] w-[229px] text-[14px]">
                      {cours.description}
                    </p>
                    <button className="bg-[#36A8D9] text-white w-[229px] p-2 rounded-[80px] text-[18px] mt-9 mb-5">
                      مشاهده دوره
                    </button>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* custom pagination bullets */}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
}

export default Timer;

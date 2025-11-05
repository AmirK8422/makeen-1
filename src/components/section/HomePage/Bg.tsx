"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Pagination, Autoplay } from "swiper/modules"; 

function Bg() {
  const bg = [
    { src: "/img/homeBg.svg" },
    { src: "/img/homeBg.svg" },
    { src: "/img/homeBg.svg" },
    { src: "/img/homeBg.svg" },
  ];

  return (
    
      <Swiper
        modules={[Pagination, Autoplay]} // ✅ فعال‌سازی autoplay
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // ✅ تکرار بی‌نهایت
        autoplay={{
          delay: 2000, // هر ۲.۵ ثانیه اسلاید بعدی
          disableOnInteraction: false, // با کلیک متوقف نشه
        }}
         pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
        className="-mt-4 w-full flex justify-center"
        
      >
        {bg.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt="PosterImg"/>
          </SwiperSlide>
        ))}
      </Swiper>
      

  );
}

export default Bg;

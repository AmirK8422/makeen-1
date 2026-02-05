"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useRef, useState } from "react";

// MUI Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type SlideItem = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

const slides: SlideItem[] = [
  {
    id: 1,
    name: "محمد صادقی کیا",
    role: "CEO at Makeen",
    description: "متن توضیحات اسلاید اول",
    image: "/img/mentors/2.jpg",
  },
  {
    id: 2,
    name: "اسم نفر دوم",
    role: "UI/UX Designer",
    description: "متن توضیحات اسلاید دوم",
    image: "/img/mentors/3.jpg",
  },
  {
    id: 3,
    name: "اسم نفر سوم",
    role: "Frontend Dev",
    description: "متن توضیحات اسلاید سوم",
    image: "/img/mentors/1.jpg",
  },
];

export default function ProfileSlider() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section dir="rtl" className="w-full py-20">

      <div className="mx-auto flex max-w-6xl items-center gap-14 px-6 md:flex-row-reverse flex-col">
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-2xl font-bold mb-2">
            {slides[activeIndex].name}
          </h3>
          <span className="block text-sm text-gray-500 mb-4">
            {slides[activeIndex].role}
          </span>
          <p className="leading-8 text-gray-700 max-w-md mx-auto md:mx-0">
            {slides[activeIndex].description}
          </p>

          
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center
                         rounded-full border hover:bg-black hover:text-white transition"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center
                         rounded-full border hover:bg-black hover:text-white transition"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            slidesPerView="auto"
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
            coverflowEffect={{
              rotate: 0,
              stretch: -70,
              depth: 200,
              modifier: 2,
              slideShadows: false,
            }}
            className="max-w-md"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id} className="!w-auto">
                <div className="relative w-[240px] aspect-[6/9]
                                overflow-hidden rounded-2xl
                                shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

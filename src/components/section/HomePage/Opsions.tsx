"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Opsions() {
  const advanteges = [
    {
      title: "اساتید حرفه‌ای",
      description:
        "در مکین شما با منتورهایی کار می‌کنید که خودشان این مسیر را رفته‌اند و چندین پروژه دارند.",
      logo: "/img/icons/User.svg",
      bg: "#CED9F8",
    },
    {
      title: "تضمین استخدام",
      description:
        "۷۰٪ هزینه رو بعد از استخدام به صورت قسطی از حقوقت توی یک‌سال پس میدی.",
      logo: "/img/icons/shield-tick.svg",
      bg: "#B5F7B0",
    },
    {
      title: "محیط صمیمی",
      description:
        "کارآموزا در بوتکمپ مکین، توی یک محیط صمیمی با همکاری و هم‌افزایی، سعی می‌کنن به موفقیت برسن.",
      logo: "/img/icons/heart.svg",
      bg: "#EB57574D",
    },
    {
      title: "کارگاه‌های همراه دوره",
      description:
        "در این دوره کارگاه‌های مختلفی خواهیم داشت مثل کارگاه استخدام، کارگاه حضور در جلسه مصاحبه و کارگاه انتقال تجربه فارغ‌التحصیلان.",
      logo: "/img/icons/designtools.svg",
      bg: "#F7D3A6",
    },
    {
      title: "پرداخت قسطی",
      description:
        "کارآموزهایی که در این دوره شرکت می‌کنن تمام هزینه‌ها را به صورت قسطی تو ۲۰ ماه پرداخت می‌کنند.",
      logo: "/img/icons/empty-wallet.svg",
      bg: "#A9DAEF",
    },
    {
      title: "آموزه‌های کاربردی",
      description:
        "در دوره‌های ما چیزهایی آموزش داده میشه که به درد بازار کار می‌خوره و شرکت‌ها به اون نیاز دارن.",
      logo: "/img/icons/Star.svg",
      bg: "#E2B93B4D",
    },
  ];

  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 mt-24 text-right">
      {/* موبایل*/}
      <div className="block sm:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.2}>
          {advanteges.map((opsion, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-xl rounded-2xl p-6 flex flex-col gap-3 bg-white">
                <div className="flex flex-row-reverse items-center gap-2 mb-2">
                  <div
                    className="p-1 rounded-xl"
                    style={{ backgroundColor: opsion.bg }}
                  >
                    <img
                      src={opsion.logo}
                      alt={opsion.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {opsion.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {opsion.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* تبلت و دسکتاپ */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advanteges.map((opsion, index) => (
          <div
            key={index}
            className="shadow-xl rounded-2xl p-6 flex flex-col gap-3 bg-white"
          >
            <div className="flex flex-row-reverse items-center gap-2 mb-2">
              <div
                className="p-1 rounded-xl"
                style={{ backgroundColor: opsion.bg }}
              >
                <img
                  src={opsion.logo}
                  alt={opsion.title}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {opsion.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {opsion.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opsions;

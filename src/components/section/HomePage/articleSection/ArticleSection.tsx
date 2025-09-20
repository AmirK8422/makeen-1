"use client";
import React from "react";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Article() {
  const articlesData = [
    {
      pic: "/img/ArticlePictures/1.png",
      title: "بهترین انتخاب لپ تاپ برای طراحان گرافیک در بازه قیمتی ۵۰ میلیون",
      description:
        "اثر کنکورد یا هزینه غرق‌شده، به پدیده‌ای اشاره دارد که در آن مدیران به دلیل سرمایه‌گذاری‌های قبلی، پروژه‌های ناموفق را ادامه می‌دهند.",
      date: "۲۲ دی ۱۴۰۳",
    },
    {
      pic: "/img/ArticlePictures/2.png",
      title: "۱۰ نکته مهم برای موفقیت در طراحی UI/UX",
      description:
        "در این مقاله یاد می‌گیریم چه عواملی تجربه کاربری رو به شدت بهبود میدن...",
      date: "۱۵ بهمن ۱۴۰۳",
    },
    {
      pic: "/img/ArticlePictures/3.png",
      title: "چطور فرانت‌اند رو مثل یک حرفه‌ای یاد بگیریم",
      description:
        "این مقاله بهت مسیر و نکات مهم برای یادگیری بهتر و سریع‌تر فرانت‌اند رو میگه.",
      date: "۲۰ بهمن ۱۴۰۳",
    },
    {
      pic: "/img/ArticlePictures/1.png",
      title: "بهترین لپ‌تاپ‌ها برای برنامه‌نویسان در سال ۲۰۲۵",
      description:
        "بررسی دقیق بهترین لپ‌تاپ‌ها برای برنامه‌نویسی با توجه به قدرت پردازشی و قیمت.",
      date: "۲۵ بهمن ۱۴۰۳",
    },
  ];

  // کارت مقاله (برای جلوگیری از تکرار کد)
  const ArticleCard = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform flex flex-col text-right">
      <Image
        src={item.pic}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-40 md:h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <a
            href="#"
            className="flex items-center gap-1 text-gray-700 text-sm font-medium transition hover:text-blue-600"
          >
            <GoArrowLeft />
            مشاهده مطلب
          </a>
          <span className="text-gray-400 text-sm">{item.date}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-6 md:mx-16 lg:mx-32 mt-16 md:mt-28 text-center">
      {/* عنوان */}
      <h2 className="font-bold text-2xl md:text-3xl mb-12">مقالات</h2>


      <div className="block sm:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.1}>
          {articlesData.map((item, index) => (
            <SwiperSlide key={index}>
              <ArticleCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articlesData.map((item, index) => (
          <ArticleCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Article;

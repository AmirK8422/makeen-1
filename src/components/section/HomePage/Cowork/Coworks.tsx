import React from "react";

function Coworks() {
  return (
    <div className="mx-5 md:mx-16 lg:mx-32 mt-16 md:mt-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* تصاویر */}
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 items-center justify-center relative">
          <div className="pl-0 md:pl-6">
            <img
              src="img/coworks/2.jpg"
              alt=""
              className="w-55 h-48 md:w-36 md:h-40 rounded-2xl object-cover"
            />
          </div>
          <img src="img/imagesInSite/9.svg" className=" hidden lg:block absolute right-27" alt="" />
          <img
            src="img/coworks/1.jpg"
            alt=""
            className="w-55 h-48 md:w-52 md:h-60 rounded-2xl object-cover"
          />
        </div>
        <div className="flex gap-6 items-center justify-center relative">
          <img
            src="img/coworks/4.jpg"
            alt=""
            className="w-55 h-48 md:w-52 md:h-60 rounded-2xl object-cover"
          />
          <img src="img/imagesInSite/5.svg" className=" hidden lg:block absolute  left-35" alt="" />

          <div>
            <img
              src="img/coworks/2.jpg"
              alt=""
              className="w-55 h-48 md:w-36 md:h-40 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* متن */}
      <div className="text-right max-w-lg">
        <h2 className="font-semibold text-2xl md:text-3xl">
          معرفی فضای کار اشتراکی مکین
        </h2>
        <p className="mt-6 md:mt-8 text-gray-500 text-base md:text-lg leading-relaxed">
          فضای کار اشتراکی مکین بر شکل‌گیری روابط کاری و تعاملات سازنده در یک
          محیط کاری متفاوت و پویا متمرکز شده است تا کارآفرینان، صاحبان کسب‌وکار
          و تیم‌های خلاق به دور از دغدغه‌ها بر روی اولویت‌های اصلی و راهکارهای
          خلاقانه خود متمرکز شوند.
        </p>
        <button className="colorMakeen mt-6 rounded-3xl px-4 py-2 w-52">
          رزرو فضای کار
        </button>
      </div>
    </div>
  );
}

export default Coworks;

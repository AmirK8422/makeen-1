import React from "react";

function AboutMakeen() {
  return (
    <div className="relative">
      <img
        src="img/imagesInSite/2.svg"
        alt=""
        className="hidden lg:block absolute -bottom-1 right-0 z-10"
      />
      <img
        src="img/imagesInSite/1.svg"
        alt=""
        className="hidden lg:block absolute right-0 bottom-10 z-10"
      />

      <div className="mx-4 sm:mx-20 mt-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex">
            <div className="-mt-20">
              <img src="img/poster/2.png" alt="" />
            </div>
            <div>
              <img src="img/poster/3.png" alt="" />
            </div>
            <div className="-mt-18">
              <img src="img/poster/4.png" alt="" />
            </div>
          </div>

          {/* متن */}
          <div className="text-right">
            <h2 className="font-semibold sm:text-4xl text-2xl">
              اینجا در مکین
            </h2>
            <h3 className="sm:text-[20px] text-[18px] my-2 sm:my-8 font-semibold">
              ما اینجا در مکین برای ساخت آینده شغلی تو <br />
              در تلاشیم چرای که آینده از آن توست
            </h3>
            <p className="text-[16px]">
              از پس اینجا توی مکین یاد میگیری چطوری یادبگیری <br /> بر اینکه بهت
              آموزش های تخصصی میدیم ، یادت میدیم که بتونی <br />
              اینجا توی مکین یاد میگیری چطوری یادبگیری . یعنی چی؟ یعنی ما علاوه{" "}
            </p>
            <button className="colorMakeen min-w-52 text-[18px] rounded-4xl p-3 mt-8 cursor-pointer">
              <a href="/">مشاوره رایگان</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMakeen;

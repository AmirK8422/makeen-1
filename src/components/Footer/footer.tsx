import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="mx-20 mt-24 text-center">
      <footer>
        <h3 className="text-3xl font-medium">با مکین همراه شو</h3>
        <p className="my-2 font-normal text-[18px]">
          برای اطلاع از اخبار و برگزاری دوره های مکین <br /> !در خبر نامه ما عضو
          شوید
        </p>
        <div className="flex items-center justify-center mb-9">
          <button className="bg-[#36A8D9]  text-white p-1 -mr-2 z-20 rounded w-24">
            عضویت
          </button>
          <input
            type="text"
            placeholder="شماره تماس خود را وارد کنید"
            className="w-3xs bg-white rounded shadow text-right p-1 text-gray-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 my-8 text-center">
          <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
            <p className="text-gray-500">
              مترو علم و صنعت، خیابان سلیمانی مدائن پلاک ۵۲۰
            </p>
            <FiMapPin className="text-[#F28C28]" size={20} />
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500">example@example.com</p>
            <FiMail className="text-[#F28C28]" size={20} />
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500">۰۲۱-۷۷۱۸۸۱۸۵-۶</p>
            <FiPhone className="text-[#F28C28]" size={20} />
          </div>
        </div>

        <hr />
        <div className="flex items-center justify-center gap-5 my-7  ">
          <PiInstagramLogoLight size={45} className="text-gray-500" />
          <FaTelegramPlane size={45} className="text-gray-500" />
          <FiYoutube size={45} className="text-gray-500" />
          <CiTwitter size={45} className="text-gray-500" />
        </div>
        <p className="mb-3">
           کلیه حقوق این سایت محفوظ و متعلق به ایده عال رسانه{" "}
          <span className="text-[#36A8D9]">مکین</span> است.
        </p>
      </footer>
    </div>
  );
}

export default Footer;

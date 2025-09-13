import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="mx-20  text-center">
      <footer>
        

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
          {/* <CiTwitter size={45} className="text-gray-500" /> */}
          <img src="/img/icons/telegram.svg" alt="" className="text-gray-500 w-8" />
          <img src="/img/icons/insta.svg" alt="" className="text-gray-500 w-8"  />
          <img src="/img/icons/ble.svg" alt="" className="text-gray-500 w-7" />
          <img src="/img/icons/youtube.svg" alt="" className="text-gray-500 w-8"  />
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

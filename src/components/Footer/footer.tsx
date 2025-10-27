"use client";
import React, { useEffect, useState } from "react";
import { Call, Google, Location } from "iconsax-reactjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../PanelAdminSection/SettingAdmin/Footer/FooterSetong";

function Footer() {
  const [footerData, setFooterData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await api.get("/api/Footer");
        console.log("Fetched Data:", response.data);
        setFooterData(response.data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
        // console.log("خطا در دریافت اطلاعات فوتر");
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری اطلاعات فوتر...
      </div>
    );
  }



  return (
    <div className="mx-20 text-center">
      <ToastContainer position="top-center" />
      <footer>
        {/* بخش آدرس، ایمیل و شماره تلفن */}
        <div className="flex flex-wrap flex-row-reverse justify-center gap-6 my-8 text-center">
          <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
            <p className="text-gray-500">{footerData?footerData.address:"مترو علم صنعت، خیابان سلیمانی مدائن پلاک ۵۲۰"}</p>
            <Location size="20" color="#F28C28" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500">{footerData?footerData.email:"example@example.com"}</p>
            <Google size="20" color="#F28C28" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-500">{footerData?footerData.phoneNumber:"۰۲۱-۷۷۱۸۸۱۸۵-۶"}</p>
            <Call size="20" color="#F28C28" />
          </div>
        </div>

        <hr />

        {/* بخش آیکون‌های شبکه اجتماعی */}
        <div className="flex items-center justify-center gap-5 my-7">
          {/* {footerData.telegram && ( */}
            <a href={footerData?footerData.telegram:"/"} target="_blank">
              <img
                src="/img/icons/telegram.svg"
                alt="Telegram"
                className="w-8"
              />
            </a>
          {/* )} */}
         
            <a href={footerData?footerData.instagram:"/"} target="_blank">
              <img src="/img/icons/insta.svg" alt="Instagram" className="w-8" />
            </a>
          
          {/* {footerData.bale && ( */}
            <a href={footerData?footerData.bale:"/"} target="_blank">
              <img src="/img/icons/ble.svg" alt="Bale" className="w-7" />
            </a>
          {/* )} */}
          {/* {footerData.aparat && ( */}
            <a href={footerData?footerData.aparat:"/"} target="_blank">
              <img src="/img/icons/youtube.svg" alt="Aparat" className="w-8" />
            </a>
          {/* )} */}
        </div>

        <p className="mb-3">
          کلیه حقوق این سایت محفوظ و متعلق به ایده‌ آل رسانه{" "}
          <span className="text-[#36A8D9]">مکین</span> است.
        </p>
      </footer>
    </div>
  );
}

export default Footer;

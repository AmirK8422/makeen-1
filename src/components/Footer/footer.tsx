"use client";
import React, { useEffect, useState } from "react";
import { Call, Google, Location } from "iconsax-reactjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../PanelAdminSection/SettingAdmin/Footer/FooterSetting";


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
      <div className="flex items-center justify-center my-5">
 <div role="status">
    <svg aria-hidden="true" className="w-9 h-9 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only text-black">Loading...</span>
</div>

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

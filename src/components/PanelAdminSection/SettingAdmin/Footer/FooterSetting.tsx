"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FooterInput from "./FooterInput";

export const api = axios.create({
  baseURL: "http://194.36.174.46:2000",
  timeout: 7000,
});

function FooterSetting() {
   const[footerData, setFooterData] = useState({
    address: "",
    phoneNumber: "",
    email: "",
    eta: "",
    bale: "",
    instagram: "",
    telegram: "",
    aparat: "",
  });
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await api.get("/api/Footer");
        console.log("Fetched Data:", response.data);
        setFooterData(response.data); 
      } catch (error) {
        console.error("Error fetching footer data:", error);
        alert("خطا در دریافت داده‌های فوتر ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  
  const handleChange = (key: string, value: string) => {
    setFooterData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

 
  const handleSubmit = async () => {
    if (Object.values(footerData).some((v) => !v.trim())) {
      alert("تمام فیلدها باید پر شوند ❌");
      return;
    }

    try {
      const response = await api.put("/api/Footer", footerData);
      console.log("Response:", response.data);
      alert("تغییرات با موفقیت ثبت شد ✅");
    } catch (error) {
      console.error("Error updating footer:", error);
      alert("خطا در ارسال داده ❌");
    }
  };

  
  if (loading) {
    return <div className="text-center py-10">در حال بارگذاری اطلاعات...</div>;
  }

  return (
    <div className="px-6 py-11">
      <ul>
        <li className="w-[90px] border-orange-400 border-b-3">تنظیمات فوتر</li>
      </ul>

      <div className="bg-white w-full p-5 flex flex-col items-center justify-center gap-5 rounded-md">
        <div className="grid grid-cols-2 items-center justify-center gap-x-32 gap-y-14">
          <FooterInput
            label="آدرس"
            placeholder="برای تغییر آدرس اینجا بنویسید"
            value={footerData.address}
            onChange={(v) => handleChange("address", v)}
          />
          <FooterInput
            label="شماره تلفن"
            placeholder="برای تغییر شماره تلفن اینجا بنویسید"
            value={footerData.phoneNumber}
            onChange={(v) => handleChange("phoneNumber", v)}
          />
          <FooterInput
            label="ایمیل"
            placeholder="برای تغییر ایمیل اینجا بنویسید"
            value={footerData.email}
            onChange={(v) => handleChange("email", v)}
          />
          <FooterInput
            label="لینک ایتا"
            placeholder="برای تغییر لینک ایتا اینجا بنویسید"
            value={footerData.eta}
            onChange={(v) => handleChange("eta", v)}
          />
          <FooterInput
            label="لینک بله"
            placeholder="برای تغییر لینک بله اینجا بنویسید"
            value={footerData.bale}
            onChange={(v) => handleChange("bale", v)}
          />
          <FooterInput
            label="لینک اینستاگرام"
            placeholder="برای تغییر لینک اینستاگرام اینجا بنویسید"
            value={footerData.instagram}
            onChange={(v) => handleChange("instagram", v)}
          />
          <FooterInput
            label="لینک تلگرام"
            placeholder="برای تغییر لینک تلگرام اینجا بنویسید"
            value={footerData.telegram}
            onChange={(v) => handleChange("telegram", v)}
          />
          <FooterInput
            label="لینک آپارات"
            placeholder="برای تغییر لینک آپارات اینجا بنویسید"
            value={footerData.aparat}
            onChange={(v) => handleChange("aparat", v)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 colorMakeen px-6 rounded-xl py-2.5 cursor-pointer"
        >
          ثبت تغییرات
        </button>
      </div>
    </div>
  );
}

export default FooterSetting;

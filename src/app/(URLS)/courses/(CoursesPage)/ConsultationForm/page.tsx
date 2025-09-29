'use client'
import Image from "next/image";
import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';

function ConsultationForm() {


  const [open,setOpen] = useState (false)


  return (
    <div>
    <button onClick={() => setOpen(true)} className="flex items-center justify-center text-lg font-medium text-[#F28C28] border-[#F28C28]  border-[1px] py-2 px-4 rounded-[80px] w-[224.5px] h-[37px]">دریافت مشاوره</button>
    <Dialog open={open} onClose={() => setOpen(false)}>
    <div className="flex justify-center items-center w-full">
      <div className="p-[32px] md:p-[40px] rounded-2xl mb-5">
        <div className="justify-self-end">
          <button onClick={() => setOpen(false)}>
            <Image src="/img/icons/CloseIcon.svg" height={32} width={32} alt="icon"></Image>
          </button>
        </div>
        <div className="flex flex-col text-center mt-[16px]">
          <h1 className="text-[22px] md:text-[32px] font-[600] mb-1">فرم مشاوره رایگان</h1>
          <h4 className="text-[16px] md:text-[18px] font-normal">برای دریافت مشاوره فرم زیر را پر کنید تا با شما تماس بگیریم</h4>
        </div>
        
        <div dir="rtl" className="flex flex-col md:flex-row w-full justify-between gap-x-8 md:mt-[48px] mt-[16px] gap-y-[16px]">
          <div className="flex flex-col flex-1">
            <label className="text-[14px] font-normal mb-[4px]" htmlFor="">نام و نام خانوادگی</label>
            <input className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium"></input>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[14px] font-normal mb-[4px]" htmlFor="">جنسیت</label>
            <select className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium">
              <option className="text-[16px] font-medium" value="men">مرد</option>
              <option className="text-[16px] font-medium" value="women">زن</option>
            </select>
          </div>
        </div>

        <div dir="rtl" className="flex flex-col md:flex-row w-full justify-between gap-x-8 md:mt-[48px] mt-[16px] gap-y-[16px]">
          <div className="flex flex-col flex-1">
            <label className="text-[14px] font-normal mb-[4px]" htmlFor="">تاریخ تولد</label>
            <input className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium"></input>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[14px] font-normal mb-[4px]" htmlFor="">شماره تماس</label>
            <input className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium"></input>
          </div>
        </div>

        <div dir="rtl" className="flex flex-col md:flex-row w-full justify-between gap-x-8 md:mt-[48px] mt-[16px] gap-y-[16px]">
          <div className="flex flex-col flex-1">
             <label className="text-[14px] font-normal mb-[4px]" htmlFor="">متقاضی دوره</label>
            <select className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium">
              <option className="text-[16px] font-medium" value="men">UI/UX</option>
              <option className="text-[16px] font-medium" value="women">زن</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-[14px] font-normal mb-[4px]" htmlFor="">محل سکونت</label>
            <select className="border-[#C7C7CC] border-[1px] rounded-[8px] px-4 py-[8.5px] flex text-[16px] font-medium">
              <option className="text-[16px] font-medium" value="men">تهران</option>
              <option className="text-[16px] font-medium" value="women">زن</option>
            </select>
          </div>
        </div>
        
        <div className="w-full justify-self-center md:justify-self-start">
          <button className="bg-[#F28C28] text-white py-[8px] px-[16px] rounded-[30px] w-full md:w-[204px] h-[47px] text-lg font-medium md:mt-[60px] mt-[30px]">ثبت و ارسال</button>
        </div>

      </div>
    </div>
    </Dialog>
    </div>
  );
}

export default ConsultationForm;

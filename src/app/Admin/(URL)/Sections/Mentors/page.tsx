'use client'
import ReusableTable from '@/components/PanelAdminSection/PublicComponent/FormUser'
import React, { useState } from 'react'
import { Edit2 } from 'iconsax-reactjs';
import { Trash } from 'iconsax-reactjs';
import ReactModal from 'react-modal'

function PresentationMakeen() {
    const columns = ["ردیف", "نام منتور", "منتور دوره","عملیات"];
      const users = [
    { id: 1, Slide: "حسین رفیعی", button: "React",operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>] },
    { id: 2, Slide: "محمد صادقی کیا", button: "UI/UX" ,operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>]},
    { id: 3, Slide: "علیرضا مومنی", button: "C#",operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>] },
    { id: 4, Slide: "محمدرضا کسائی", button: "python" ,operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>]},
  ];

    const [isOpen, setIsOpen] = useState(false);
  
   const dialog = () => {
    return(
    <ReactModal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="bg-white p-6 rounded-xl shadow-lg w-[768px] h-[550px] mx-auto"
            overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center"
          >
            <div className='flex flex-col'>
              <div dir='rtl' className='flex items-center justify-between mt-8'>
                <div className='flex flex-col gap-1'>
                  <label className='font-normal text-[16px]' htmlFor="">نام منتور</label>
                  <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='font-normal text-[16px]' htmlFor="">منتور دوره</label>
                  <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
                </div>
              </div>
              <div dir='rtl' className='flex items-center justify-between mt-8'>
                <div className='flex flex-col gap-1'>
                  <label className='font-normal text-[16px]' htmlFor="">سمت منتور</label>
                  <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='font-normal text-[16px]' htmlFor="">عکس منتور</label>
                  <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
                </div>
              </div>
              <div dir='rtl' className='flex flex-col gap-1 mt-10'>
                <label htmlFor="">درباره استاد</label>
                <textarea className='border-[1px] border-[#36A8D9] rounded-[8px] py-2 px-4 h-[125px] w-[719px]' name="" id=""></textarea>
              </div>
              <div className='gap-4 flex justify-center mt-[70px]'>
                <button className='bg-[#F28C28] rounded-lg text-white py-3 px-6 w-[136px] h-[53px] text-lg font-medium hover:text-black hover:border-black hover:bg-green-400 hover:cursor-pointer'>
                   ثبت منتور
                </button>
                <button onClick={()=>setIsOpen(false)} className=' rounded-lg text-[#8E8E93] border-[#8E8E93] border-[1px] py-3 px-6 w-[136px] h-[53px] text-lg font-medium hover:cursor-pointer  hover:bg-red-400 hover:text-black hover:border-black'>
                   انصراف
                </button>
              </div>
            </div>
          </ReactModal>
          )
    
   }
  
  
  return (  
    <div className='relative'>
    <div className=" bg-white px-4 pb-5 rounded-md m-4">
      <ReusableTable columns={columns} data={users.map((u) => ({
            "ردیف": u.id,
            "نام منتور": u.Slide,
            "منتور دوره": u.button,
            'عملیات': <div className='flex gap-2'>{u.operation}</div>,
          }))}/>
    </div>
    <button  onClick={()=>setIsOpen(true)} className='text-[18px] font-medium text-white h-[53px] w-[144px] bg-[#F28C28] rounded-lg py-3 px-6 absolute top-0 left-5 mt-[-60px] hover:cursor-pointer'> افزودن منتور</button>
        {dialog()}
    </div>
  )
}

export default PresentationMakeen

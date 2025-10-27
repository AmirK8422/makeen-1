'use client'
import Opsions from '@/components/section/HomePage/Opsions'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import {CloseCircle} from 'iconsax-reactjs';

function page() {
    const [isOpen, setIsOpen] = useState(false);
  
    const ButtonStyle = 'hover:cursor-pointer hover:shadow-2xl hover:rounded-2xl hover:transition-shadow';

  const dialog = () =>{
 
      return(
    <div className="p-4">
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bg-white p-6 rounded-xl shadow-lg w-[768px] h-[550px] mx-auto"
        overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center"
      >
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <CloseCircle onClick={() => setIsOpen(false)} className='hover:cursor-pointer hover:bg-red-400 hover:rounded-[50px]' color="#111111"/>
            <h1 className='text-[20px] font-medium'>افزودن دوره به صفحه اصلی</h1>
          </div>
          <div dir='rtl' className='flex items-center justify-between mt-8'>
            <div className='flex flex-col gap-1'>
              <label className='font-normal text-[16px]' htmlFor="">عنوان ویژگی</label>
              <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-normal text-[16px]' htmlFor="">آیکون ویژگی</label>
              <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
            </div>
          </div>
          <div dir='rtl' className='flex flex-col gap-1 mt-10'>
            <label htmlFor="">توضیحات ویژگی</label>
            <textarea className='border-[1px] border-[#36A8D9] rounded-[8px] py-2 px-4 h-[125px] w-[719px]' name="" id=""></textarea>
          </div>
          <div className='gap-4 flex justify-center mt-[70px]'>
            <button className='bg-[#F28C28] rounded-lg text-white py-3 px-6 w-[136px] h-[53px] text-lg font-medium'>
              ثبت تغییرات
            </button>
            <button className=' rounded-lg text-[#8E8E93] border-[#8E8E93] border-[1px] py-3 px-6 w-[136px] h-[53px] text-lg font-medium'>
               انصراف
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );

    
  }


  return (
    <div>
      <Opsions dialog={dialog} setIsOpen={setIsOpen} ButtonStyle={ButtonStyle}/>
    </div>
  )
}

export default page

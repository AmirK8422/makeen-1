'use client'
import ReusableTable from '@/components/PanelAdminSection/PublicComponent/FormUser'
import React, { useState } from 'react'
import { Edit2 } from 'iconsax-reactjs';
import { Trash } from 'iconsax-reactjs';
import ReactModal from 'react-modal'
import { Editor } from 'primereact/editor';

        

function PresentationMakeen() {
    const columns = ["ردیف", "عنوان اسلاید", "عنوان دکمه","عملیات"];
      const users = [
    { id: 1, Slide: "اینجا در مکین", button: "درخواست مشاوره",operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>] },
    { id: 2, Slide: "ما تو مکین", button: "درخواست مشاوره" ,operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>]},
    { id: 3, Slide: "همیشه در تلاشیم", button: "درخواست مشاوره",operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>] },
    { id: 4, Slide: "ما باهم", button: "درخواست مشاوره" ,operation:[<Edit2 color="#2f80ed"/>,<Trash color="#eb5757"/>]},
  ];

  const [text, setText] = useState('');
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
                <label className='font-normal text-[16px]' htmlFor="">عنوان اسلاید</label>
                <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <label className='font-normal text-[16px]' htmlFor="">تایتل</label>
                <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
              </div>
            </div>
            <div dir='rtl' className='flex items-center justify-between mt-8'>
              <div className='flex flex-col gap-1'>
                <label className='font-normal text-[16px]' htmlFor="">عنوان دکمه</label>
                <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
              </div>
              <div className='flex flex-col gap-1'>
                <label className='font-normal text-[16px]' htmlFor="">عکس</label>
                <input className='border-[#36A8D9] border-[1px] rounded-[8px] py-2 px-4 w-[340px]'></input>
              </div>
            </div>
            <div dir='rtl' className='flex flex-col gap-1 mt-10'>
              <label className='mb-2 text-[16px] font-normal' htmlFor="">توضیحات سکشن</label>
              <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '100px' }} />
            </div>
            <div className='gap-4 flex justify-center mt-[20px]'>
              <button className='bg-[#F28C28] rounded-lg text-white py-3 px-6 w-[136px] h-[53px] text-lg font-medium hover:text-black hover:border-black hover:bg-green-400 hover:cursor-pointer'>
                 ثبت اسلاید 
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
            "عنوان اسلاید": u.Slide,
            "عنوان دکمه": u.button,
            'عملیات': <div className='flex gap-2'>{u.operation}</div>,
          }))}/>
    </div>
    <button onClick={()=>setIsOpen(true)} className='text-[18px] font-medium text-white h-[53px] w-[144px] bg-[#F28C28] rounded-lg py-3 px-6 absolute top-0 left-5 mt-[-60px] hover:cursor-pointer'>افزودن اسلاید</button>
    {dialog()}
    </div>
  )
}

export default PresentationMakeen

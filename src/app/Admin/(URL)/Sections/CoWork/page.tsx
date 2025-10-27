'use client'
import React, { useState } from 'react'
import { Editor } from 'primereact/editor';

function CoWork() {

  const [text, setText] = useState('');
  
  return (
    <div className='bg-white p-4 rounded-[8px] m-4'>
         <div className='border-1 border-dashed h-[202px] w-[240px] rounded-[8px] flex justify-center items-center text-[#8E8E93] text-[16px] font-medium mb-[60px]'>
                افزودن عکس +
         </div>
         <div className='flex flex-col w-[800px]'>
            <h1 className='font-medium text-[18px] mb-2'>متن سکشن</h1>
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '219px' }} />
              <div className='flex justify-end mt-6'>
              <button className='bg-[#F28C28] text-white text-lg font-medium rounded-lg w-[135px] h-[53px] py-[12px] px-6'>ثبت تغئیرات</button>
              </div>
         </div>
    </div>
  )
}

export default CoWork

import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-between bg-white m-[16px] h-[430px] rounded-[8px] py-5 px-9'>
        <div className='flex gap-x-[40px]'> 
            <div className='border-1 border-dashed h-[120px] w-[240px] rounded-[8px] flex justify-center items-center text-[#8E8E93] text-[16px] font-medium'>
                 افزودن بنر +
            </div>
            <div className='border-1 border-dashed h-[120px] w-[240px] rounded-[8px] flex justify-center items-center text-[#8E8E93] text-[16px] font-medium'>
                 افزودن بنر +
            </div>
        </div>
        <div>
            <div className='border-1 border-dashed h-[241px] w-[240px] rounded-[8px] flex justify-center items-center text-[#8E8E93] text-[16px] font-medium'>
               افزودن دوره +
            </div>
        </div>
      
    </div>
  )
}

export default page

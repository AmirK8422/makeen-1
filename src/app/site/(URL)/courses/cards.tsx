import React from 'react'
import Image from 'next/image'

interface Tcards {
  title : string ,
  text : string,
  image : string ,
  status : 'register' | 'soon' | 'full' ,

}

function Cards({title, text, image ,status} : Tcards) {

  function Status():any {
     if (status == 'register' ) {
    return <button className='text-[#27AE60] bg-[rgba(54,236,60,0.1)] md:text-base text-xs font-medium md:px-2 md:pt-0.5 md:pb-1 p-1 rounded-lg gap-2  md:w-[108px] md:h-[33px] w-[77px] h-[28px]'>درحال ثبت نام</button>
  }
  else if (status == 'soon') {
    return <button className='text-[#2F80ED] bg-[rgba(54,168,217,0.1)] md:text-base text-xs font-medium md:px-2 md:pt-0.5 md:pb-1 p-1 rounded-lg gap-2 md:w-[108px] md:h-[33px] w-[48px] h-[28px]'> به زودی</button>
  }
   else {
    return <button className='text-[#EB5757] bg-[rgba(236,60,54,0.1)] md:text-base text-xs font-medium md:px-2 md:pt-0.5 md:pb-1 p-1 rounded-lg gap-2 md:w-[108px]  w-[76px] h-[28px]'>تکمیل ظرفیت</button>
  }
  }
 
  return (
    <div className='flex justify-between md:rounded-2xl rounded-lg bg-white w-full h-[180px] md:h-72 md:px-6 px-4 md:py-5 py-2 text-right shadow-xs  hover:shadow-xs hover:-translate-y-1 transition transform '>
      <div className='flex justify-center items-center w-240px'>
        <Image className='md:h-[240px] md:w-[240px]' src={image} alt='logo' width={148} height={148}/>
      </div>
      <div className='flex flex-col justify-evenly items-end w-56 md:gap-5 gap-4'>
        <h1 className='md:font-semibold font-normal md:text-2xl text-sm'>{title}</h1>
        <p className='md:text-base text-xs md:w-[228px] w-[170px] font-normal text-[#8E8E93]'>{text}</p>
        <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <p className='md:text-sm text-xs text-[#AEAEB2] mr-2'>پرداخت قسطی</p>
          <Image className='md:h-[24px] md:w-[24px]' src="/img/cards.svg" alt='cards' height={16} width={16} ></Image>
        </div>
        <div className='flex justify-center items-center ml-7'>
           <p className='md:text-sm text-xs text-[#AEAEB2] mr-2'>6 ماه</p>
          <Image className='md:h-[24px] md:w-[24px]' src="/img/clock.svg" alt='cards' height={16} width={16} ></Image>
        </div>
      </div>
      {Status()}
      </div>
      
    </div>
  )
}

export default Cards

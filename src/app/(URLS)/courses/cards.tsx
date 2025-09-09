import React from 'react'
import Image from 'next/image'

interface Tcards {
  title? : string ,
  text? : string,
  image? : string ,
  status? : string,

}

function Cards({title, text, image ,status} : Tcards) {

  function Status():any {
     if (status == 'register' ) {
    return <button className='text-[#27AE60] bg-[rgba(54,236,60,0.1)] text-base font-medium px-2 pt-0.5 pb-1 rounded-lg gap-2'>درحال ثبت نام</button>
  }
  else if (status == 'soon') {
    return <button className='text-[#2F80ED] bg-[rgba(54,168,217,0.1)] text-base font-medium px-2 pt-0.5 pb-1 rounded-lg gap-2'> به زودی</button>
  }
   else {
    return <button className='text-[#EB5757] bg-[rgba(236,60,54,0.1)] text-base font-medium px-2 pt-0.5 pb-1 rounded-lg gap-2'>تکمیل ظرفیت</button>
  }
  }
 
  return (
    <div className='flex justify-between rounded-2xl bg-white w-[48%] h-72 px-6 py-5 text-right shadow-[0_0_7px_rgba(0,0,0,0.15)]'>
      <div className='flex justify-center items-center w-240px'>
        <Image src={image} alt='logo' width={230} height={230}/>
      </div>
      <div className='flex flex-col justify-evenly items-end w-56'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p className='text-base font-normal text-[#8E8E93]'>{text}</p>
        <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <p className='text-sm text-[#AEAEB2] mr-2'>پرداخت قسطی</p>
          <Image src="/img/cards.svg" alt='cards' height={24} width={24} ></Image>
        </div>
        <div className='flex justify-center items-center ml-7'>
           <p className='text-sm text-[#AEAEB2] mr-2'>6 ماه</p>
          <Image src="/img/clock.svg" alt='cards' height={24} width={24} ></Image>
        </div>
      </div>
      {Status()}
      </div>
      
    </div>
  )
}

export default Cards

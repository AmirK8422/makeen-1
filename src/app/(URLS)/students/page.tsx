import Image from 'next/image'
import React from 'react'

function Students() {

  const cards = [
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
    {
      fullName: 'Behzad',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: '#مکینی_دوره_۹',
    },
  ]


  return (
    <div className='mx-20 mt-10'>
      <div className='grid md:grid-cols-4 w-full md:gap-[1.875%] md:gap-y-[20px]'>
        {cards.map((item) => (
          <div className='bg-white flex flex-col md:rounded-2xl md:h-[140px]'>
            <div className='flex'>
              <div>
                <h1>{item.fullName}</h1>
                <div className='flex'>
                  <h3>{item.job}</h3>
                  <Image src={item.JobIcon} height={20} width={20} alt='icon'></Image>
                </div>
              </div>
              <Image src={item.image} height={60} width={60} alt='image'></Image>
            </div>
            <div className='flex'>
              <div className='flex'>
                <Image src='/img/icons/ArrowLeft.svg' width={24} height={24} alt='icon'></Image>
                <h1>مشاهده بیشتر</h1>
              </div>
              <h3>{item.CourseNumber}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students

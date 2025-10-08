'use client'
import React from 'react'
import { usePathname } from "next/navigation"; 
import Link from 'next/link';

function Navbar() {

    const pathname = usePathname(); 

    const title = [
        {
            title: 'هیرو',
            href: '/Admin/Sections/Hero'
        },
        {
            title: 'ویژگی ها',
            href: '/Admin/Sections/Property'
        },
        {
            title:  'ویدیو ها',
            href: '/Admin/Sections/Videos'
        },
        {
            title:  'معرفی مکین',
            href: '/Admin/Sections/PresentationMakeen'
        },
        {
            title: 'منتور ها',
            href: '/Admin/Sections/Mentors'
        },
        {
            title:  'فضای کار اشتراکی',
            href: '/Admin/Sections/CoWork'
        },
        {
            title: 'سوالات متداول' ,
            href: '/Admin/Sections/Questions'
        },
        {
            title:  ' افتخارات' ,
            href: '/Admin/Sections/'
        },
    ]


    return (

    <div className='flex gap-[32px] mr-[24px] mt-[47px]'>
      {title.map((items,index) => (
        <Link href={items.href} key={index}>
        <h1 className={`text-[20px] font-normal ${pathname === items.href ? 'border-b-4 border-b-[#F28C28] cursor-default pb-1' : 'cursor-pointer'}`}>{items.title}</h1>
        </Link>
      ))}
    </div>
  )
  
}

export default Navbar


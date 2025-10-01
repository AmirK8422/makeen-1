'use client'
import React from 'react'
import { usePathname } from "next/navigation"; 
import Link from 'next/link';

function Navbar() {

    const pathname = usePathname(); 

    const title = [
        {
            title: 'هیرو',
            href: 'http://localhost:3000/Admin/Sections/Hero'
        },
        {
            title: 'ویژگی ها',
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title:  'ویدیو ها',
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title:  'معرفی مکین',
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title: 'منتور ها',
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title:  'فضای کار اشتراکی',
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title: 'سوالات متداول' ,
            href: 'http://localhost:3000/Admin/Sections/'
        },
        {
            title:  ' افتخارات' ,
            href: 'http://localhost:3000/Admin/Sections/'
        },
    ]

  return (
    <div className='flex gap-[32px] mr-[24px] mt-[47px]'>
      {title.map((items,index) => (
        <Link href={items.href} key={index}>
        <h1 className={`text-[20px] font-normal`}>{items.title}</h1>
        </Link>
      ))}
    </div>
  )
}

export default Navbar


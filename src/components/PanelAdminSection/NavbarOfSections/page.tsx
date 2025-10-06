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
            href: 'http://localhost:3000/Admin/Sections/Property'
        },
        {
            title:  'ویدیو ها',
            href: 'http://localhost:3000/Admin/Sections/Videos'
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
            href: 'http://localhost:3000/Admin/Sections/CoWork'
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
        <h1 className={`text-[20px] font-normal ${pathname === items.href ? 'border-b-8 border-b-amber-500' : 'border-b-0'}`}>{items.title}</h1>
        </Link>
      ))}
    </div>
  )
}

export default Navbar


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "خانه" },
    { href: "/courses", label: "دوره ها" },
    { href: "/shareoffice", label: "فضای کار اشتراکی" },
    { href: "/gallery", label: "گالری تصاویر" },
    { href: "/article", label: "مقالات" },
    { href: "/students", label: "مکینی ها" },
  ];

  return (
    <header className="mx-0 md:mx-20 mt-4 rounded-2xl shadow-sm bg-white/40 backdrop-blur-xl sticky top-2 z-40">
      <div className="flex  px-6 rounded-2xl items-center justify-between md:justify-center ">
        <button className="px-4 py-2 rounded-lg colorMakeen font-medium md:hidden">
          <Link href="/">مشاوره رایگان</Link>
        </button>
        <div className="flex items-center justify-center gap-10">
          <ul className="hidden md:flex items-center flex-row-reverse xl:gap-16 lg:gap-10 md:gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`xl:px-4 lg:px-2 md:px-1 py-2 rounded-lg transition font-medium xl:text-[18px] lg:text-[15px] md:text-[13px] ${
                  pathname === link.href
                    ? " colorMakeen shadow-md shadow-orange-300"
                    : "text-gray-700 hover:bg-orange-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Link href="/">
          <Image
          width={144.8000030517578}
          height={64}
            src="/img/MakeenLogo.svg"
            alt="logo"
            className="xl:w-36 lg:w-30 md:w-27"
          />
          
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

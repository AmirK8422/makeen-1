"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <header className="mx-4 md:mx-20 mt-4 rounded-2xl shadow-lg bg-white">
      <div className="flex items-center justify-between md:justify-center p-2">
        <button className="px-4 py-2 rounded-lg colorMakeen font-medium md:hidden">
          <a href="/"> مشاوره رایگان</a>
        </button>
        <div className="flex items-center justify-center gap-10">
          <ul className="hidden md:flex items-center flex-row-reverse gap-16">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition font-medium text-[18px] ${
                  pathname === link.href
                    ? " colorMakeen shadow-md shadow-orange-300"
                    : "text-gray-700 hover:bg-orange-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <img src="/img/MakeenLogo.svg" alt="logo" className="w-36" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

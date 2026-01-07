"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiIntersectThree } from "react-icons/pi";

function Navbar() {
  const pathname = usePathname() ?? "";

  const links: Array<any> = [
    { href: "/Admin/Dashboard", label: "داشبورد", logo: <BiHomeAlt2 /> },
    {
      href: "/Admin/Manageusers",
      label: "مدیریت کاربران ها",
      logo: <MdOutlineManageAccounts />,
    },

    { type: "section", label: "مدیریت محتوا" },
    {
      href: "/Admin/Sections",
      label: "سکشن ها",
      logo: <PiIntersectThree />,
    },
    { href: "/Admin/Courses", label: "دوره ها", logo: <PiIntersectThree /> },
    {
      href: "/Admin/Gallery",
      label: "گالری تصاویر",
      logo: <PiIntersectThree />,
    },
    { href: "/Admin/Article", label: "مقالات", logo: <PiIntersectThree /> },
    { href: "/Admin/Students", label: "مکینی ها", logo: <PiIntersectThree /> },

    { type: "section", label: "مدیریت پنل" },
    { href: "/Admin/Setting", label: "تنظیمات", logo: <IoSettingsOutline /> },
    {
      href: "/site",
      label: "خروج",
      logo: <CiLogout />,
      extraClass: "text-red-500",
    },
  ];

  return (
    <nav className="w-[232px] h-dvh bg-white shadow-md px-3" aria-label="sidebar">
      {/* لوگو */}
      <div className="p-4">
        <img src="/img/MakeenLogo.svg" alt="logo" />
      </div>

      {/* منو */}
      <ul className="flex flex-col gap-2 pt-2">
        {links.map((link, index) =>
          link.type === "section" ? (
            // use <li> even for separators so HTML is valid
            <li
              key={`section-${index}`}
              role="separator"
              className="flex pr-2 items-center gap-2 mt-2"
            >
              <span className="text-gray-500 text-[14px]">{link.label}</span>
              <hr className="border-t border-gray-300 flex-1 mt-1" />
            </li>
          ) : (
            <li key={`link-${index}`}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 text-sm p-2 rounded-md
                  ${
                    pathname === link.href
                      ? "bg-blue-light txt-blue-light"
                      : "hover:bg-gray-50"
                  }
                  ${link.extraClass || "text-gray-dark"}`}
              >
                <span className="flex justify-center items-center text-2xl">
                  {link.logo}
                </span>
                <span className="text-[18px]">{link.label}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

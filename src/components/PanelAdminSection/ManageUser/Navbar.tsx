"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-8 text-18">
      <li>
        <Link
          href="/Admin/Manageusers"
          className={`${
            pathname === "/Admin/Manageusers"
              ? "border-orange-400 border-b-3 "
              : ""
          } cursor-pointer`}
        >
          کاربران ثبت‌نامی
        </Link>
      </li>

      <li>
        <Link
          href="/Admin/Manageusers/Newsuser"
          className={`${
            pathname === "/Admin/Manageusers/Newsuser"
              ? "border-orange-400 border-b-3 "
              : ""
          }
        `}
        >
          کاربران خبرنامه
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

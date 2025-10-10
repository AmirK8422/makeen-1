"use client";
import { Element3, Gallery, Home, KyberNetwork, People } from "iconsax-reactjs";
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const PhoneNav = () => {
  const links = [
    { href: "/site", label: "خانه", icon: <Home size="24" /> },
    { href: "/site/courses", label: "دوره‌ها", icon: <Element3 size="24" /> },
    { href: "/site/shareoffice", label: "فضای اشتراکی", icon: <KyberNetwork size="24" /> },
    { href: "/site/gallery", label: "گالری", icon: <Gallery size="24" /> },
    { href: "/site/students", label: "مکینی‌ها", icon: <People size="24" /> },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();

  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50" dir="rtl">
      <ul className="flex justify-around items-center py-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex flex-col items-center text-xs transition-all duration-200 ${
                  isActive ? "text-orange-500" : "text-gray-500"
                }`}
              >
                <div
                  className={`${
                    isActive ? "text-orange-500 scale-110" : "text-gray-500"
                  } transition-transform`}
                >
                  {React.cloneElement(link.icon, {
                    color: isActive ? "#FF8A65" : "#9CA3AF",
                  })}
                </div>
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PhoneNav;

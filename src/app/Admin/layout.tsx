import Header from "@/components/PanelAdminSection/Navbar/NotifictionSection/Header";
import Navbar from "@/components/PanelAdminSection/Navbar/Navbar/Navbar";
import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen" dir="rtl">   {/* کل صفحه فلکس */}
      {/* سایدبار ثابت */}
      <Navbar />

      {/* بخش اصلی */}
      <div className="flex-1 flex flex-col">
        {/* هدر بالا */}
        <Header />

        {/* محتوای صفحات */}
        <main className="flex-1  bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

import Header from "@/components/PanelAdminSection/Navbar/NotificationSection/Header";
import Navbar from "@/components/PanelAdminSection/Navbar/Navbar/Navbar";
import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen" dir="rtl">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1  bg-gray-50 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

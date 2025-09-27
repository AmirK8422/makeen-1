import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import type { ReactNode } from "react";


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div  className="antialiased font-[Kalameh] bg-[#F9F9F9]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

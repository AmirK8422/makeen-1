import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import PhoneNav from "@/components/Navbar/PhoneNav";
import type { ReactNode } from "react";


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div  className="antialiased font-[Kalameh] bg-[#F9F9F9]">
      <Navbar />
      <PhoneNav/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

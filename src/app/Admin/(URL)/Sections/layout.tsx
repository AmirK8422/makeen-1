import type { ReactNode } from "react";
import Navbar from "@/components/PanelAdminSection/NavbarOfSections/page";
import Page from './page'
interface SectionsLayoutProps {
  children: ReactNode;
}

export default function SectionsLayout({ children }: SectionsLayoutProps) {
  return (
    <div>
        <Navbar/>
        {children}

    </div>
  );
}

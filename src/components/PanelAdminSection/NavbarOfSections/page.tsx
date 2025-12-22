"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Hero from "../../../app/admin/(URL)/Sections/Hero/page";
import Property from "../../../app/admin/(URL)/Sections/Property/page";
import Videos from "../../../app/admin/(URL)/Sections/Videos/page";
import PresentationMakeen from "../../../app/admin/(URL)/Sections/PresentationMakeen/page";
import Mentors from "../../../app/admin/(URL)/Sections/Mentors/page";
import CoWork from "../../../app/admin/(URL)/Sections/CoWork/page";
import Questions from "../../../app/admin/(URL)/Sections/Questions/page";
import Honors from "../../../app/admin/(URL)/Sections/Honors/page";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const SECTIONS = [
  { title: "هیرو", component: <Hero /> },
  { title: "ویژگی ها", component: <Property /> },
  { title: "ویدیو ها", component: <Videos /> },
  { title: "معرفی مکین", component: <PresentationMakeen /> },
  { title: "منتور ها", component: <Mentors /> },
  { title: "فضای کار اشتراکی", component: <CoWork /> },
  { title: "سوالات متداول", component: <Questions /> },
  { title: "افتخارات", component: <Honors /> },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Tabs
        sx={{
          "& .MuiTab-root": {
            color: "#111111",
            fontFamily: "Kalameh",
          },
          "& .Mui-selected": {
            color: "#111111",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#F28C28",
          },
        }}
        value={value}
        onChange={(e, nv) => setValue(nv)}
      >
        {SECTIONS.map((item, index) => (
          <Tab
            key={index}
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
            sx={{ fontSize: "20px", fontWeight: "400" }}
            label={item.title}
          />
        ))}
      </Tabs>

      {SECTIONS.map((item, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {item.component}
        </CustomTabPanel>
      ))}
    </div>
  );
}

export default Navbar;

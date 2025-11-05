"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Hero from "../../../app/Admin/(URL)/Sections/Hero/page";
import Property from "../../../app/Admin/(URL)/Sections/Property/page";
import Videos from "../../../app/Admin/(URL)/Sections/Videos/page";
import PresentationMakeen from "../../../app/Admin/(URL)/Sections/PresentationMakeen/page";
import Mentors from "../../../app/Admin/(URL)/Sections/Mentors/page";
import CoWork from "../../../app/Admin/(URL)/Sections/CoWork/page";
import Questions from "../../../app/Admin/(URL)/Sections/Questions/page";
import Honors from "../../../app/Admin/(URL)/Sections/Honors/page";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const heroTabs = [
  { id: 1, components: <Hero /> },
  { id: 2, components: <Property /> },
  { id: 3, components: <Videos /> },
  { id: 5, components: <PresentationMakeen /> },
  { id: 6, components: <Mentors /> },
  { id: 7, components: <CoWork /> },
  { id: 8, components: <Questions /> },
  { id: 9, components: <Honors /> },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Navbar() {
  const title = [
    {
      id: 1,
      title: "هیرو",
      href: "<Hero/>",
    },
    {
      id: 2,
      title: "ویژگی ها",
      href: "<Property/>",
    },
    {
      id: 3,
      title: "ویدیو ها",
      href: "<Videos/>",
    },
    {
      id: 4,
      title: "معرفی مکین",
      href: "<PresentationMakeen/>",
    },
    {
      id: 5,
      title: "منتور ها",
      href: "<Mentors/>",
    },
    {
      id: 6,
      title: "فضای کار اشتراکی",
      href: "<CoWork/>",
    },
    {
      id: 7,
      title: "سوالات متداول",
      href: "<Questions/>",
    },
    {
      id: 8,
      title: " افتخارات",
      href: "<Honors/>",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {title.map((items) => (
          <Tab
            sx={{ fontSize: "20px", fontWeight: "400" }}
            label={items.title}
            {...a11yProps(items.id)}
          />
        ))}
      </Tabs>
      {heroTabs.map((heroItem, heroIndex) => (
        <CustomTabPanel value={value} index={heroIndex}>
          {heroItem.components}
        </CustomTabPanel>
      ))}
    </div>
  );
}

export default Navbar;

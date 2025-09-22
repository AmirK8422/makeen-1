import React from "react";
import Timer from "./Timer";
import Opsions from "./Opsions";
import FooterInput from "@/components/Footer/FooterInput";
import VidioSlider from "./VidioSlider/VidioSlider";
import AboutMakeen from "./AboutMakeen/AboutMakeen";
import CursesSlider from "./MakeenCourses/CursesSlider";
import MakeenStudents from "./MakeenStudents/MakeenStudents";
import Mentors from "./Mentors/Mentors";
import Coworks from "./Cowork/Coworks";
import Article from "./articleSection/ArticleSection";

function HomePage() {
  return (
    <div>
      <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
        <div className="-mt-4 w-full">
          <img src="/img/homeBg.svg" alt="home-bg" />
        </div>
        <Timer />
      </div>
      <Opsions />
      <CursesSlider/>
      <VidioSlider />
      <AboutMakeen />
      <MakeenStudents />
      <Mentors />
      <Coworks />
      <Article/>
      <FooterInput />
    </div>
  );
}

export default HomePage;

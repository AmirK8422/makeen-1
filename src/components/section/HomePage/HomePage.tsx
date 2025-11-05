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
import StudentCompanyWork from "./companyStudentWork/StudentCompanyWork";
import Bg from "./Bg";
import Frequncy from "./frequncy/Frequncy";

function HomePage() {
  return (
    <div>
      <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
        <Bg/>
        <Timer />
      </div>
      <Opsions />
      <CursesSlider/>
      <VidioSlider />
      <AboutMakeen />
      <MakeenStudents />
      <Mentors />
      <Coworks />
      <Article />
      <Frequncy/>
      <StudentCompanyWork/>
      <FooterInput />
    </div>
  );
}

export default HomePage;

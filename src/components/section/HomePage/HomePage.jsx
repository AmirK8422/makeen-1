import React from "react";
import Timer from "./Timer";
import Options from "./Options";
import FooterInput from "@/components/Footer/FooterInput";
import VideoSlider from "./VideoSlider/VideoSlider";
import AboutMakeen from "./AboutMakeen/AboutMakeen";
import CoursesSlider from "./MakeenCourses/CoursesSlider";
import MakeenStudents from "./MakeenStudents/MakeenStudents";
import Mentors from "./Mentors/Mentors";
import Coworks from "./Cowork/Coworks";
import Article from "./articleSection/ArticleSection";
import StudentCompanyWork from "./companyStudentWork/StudentCompanyWork";
import Bg from "./Bg";
import Frequency from "./frequency/Frequency";

function HomePage() {
  return (
    <div>
      <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
        <Bg/>
        <Timer />
      </div>
      <Options />
      <CoursesSlider/>
      <VideoSlider />
      <AboutMakeen />
      <MakeenStudents />
      <Mentors />
      <Coworks />
      <Article />
      <Frequency/>
      <StudentCompanyWork/>
      <FooterInput />
    </div>
  );
}

export default HomePage;

"use client";
import React, { useState } from "react";
import CommentUi from "./CommentUi";
import StudentCenter from "./StudentCenter";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MakeenStudents() {
  const [selectedStudent, setSelectedStudent] = useState<{
    id: number | null;
    name: string;
    cours: string;
    workIn: string;
    compenyLogo: string;
    profile: string;
  }>({
    id: null,
    name: "",
    cours: "",
    workIn: "",
    compenyLogo: "",
    profile: "",
  });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <div className="mx-4 mt-24">
      <div className="flex items-center justify-center mb-16">
        <h2 className="font-semibold text-3xl ">مکینی ها</h2>
      </div>
      <div className="mb-5">
        <StudentCenter {...selectedStudent} />
      </div>
      <Swiper spaceBetween={15}
      
        slidesPerView={1.70} dir="rtl">
        <SwiperSlide>
          <CommentUi
            name=" امیر یاشار رحمانی فرد"
            cours="دوره ۱۸"
            workIn="product designe تپسی"
            compenyLogo="img/Tapsi.svg"
            profile="img/Profile/2.png"
            selected={selectedStudent.id === 1}
            onclick={() =>
              setSelectedStudent({
                id: 1,
                name: " امیر یاشار رحمانی فرد",
                cours: "دوره ۱۸",
                workIn: "product designer تپسی",
                compenyLogo: "img/Tapsi.svg",
                profile: "img/Profile/2.png",
              })
            }
          />
        </SwiperSlide>

        <SwiperSlide>
         <CommentUi
              name="محمدرضا اسدپور"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/1.png"
              selected={selectedStudent.id === 2}
              onclick={() =>
                setSelectedStudent({
                  id: 2,
                  name: "محمدرضا اسدپور",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/1.png",
                })
              }
            />
        </SwiperSlide>

        <SwiperSlide>
            <CommentUi
              name=" امیرحسین محمدی"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/4.png"
              selected={selectedStudent.id === 3}
              onclick={() =>
                setSelectedStudent({
                  id: 3,
                  name: " امیرحسین محمدی",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/4.png",
                })
              }
            />
        </SwiperSlide>
          <SwiperSlide>     <CommentUi
              name="محمدرضا اسدپور"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/5.png"
              selected={selectedStudent.id === 6}
              onclick={() =>
                setSelectedStudent({
                  id: 6,
                  name: "محمدرضا اسدپور",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/5.png",
                })
              }
            /></SwiperSlide>
        <SwiperSlide>
            <CommentUi
              name=" محمدجواد نعیمی "
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/3.png"
              selected={selectedStudent.id === 5}
              onclick={() =>
                setSelectedStudent({
                  id: 5,
                  name: " محمدجواد نعیمی ",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/3.png",
                })
              }
            />
        </SwiperSlide>
      </Swiper>
    </div>
  ) : (
    <div className="mx-20 mt-24">
      <div className="flex items-center justify-center mb-16">
        <h2 className="font-semibold text-3xl ">مکینی ها</h2>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative flex flex-col items-end gap-14">
          <div className="transform translate-x-48">
            <CommentUi
              name=" امیر یاشار رحمانی فرد"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/2.png"
              selected={selectedStudent.id === 1}
              onclick={() =>
                setSelectedStudent({
                  id: 1,
                  name: " امیر یاشار رحمانی فرد",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/2.png",
                })
              }
            />
          </div>

          <div className="transform translate-x-11">
            <CommentUi
              name="محمدرضا اسدپور"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/1.png"
              selected={selectedStudent.id === 2}
              onclick={() =>
                setSelectedStudent({
                  id: 2,
                  name: "محمدرضا اسدپور",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/1.png",
                })
              }
            />
          </div>

          <div className="transform translate-x-36">
            <CommentUi
              name=" امیرحسین محمدی"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/4.png"
              selected={selectedStudent.id === 3}
              onclick={() =>
                setSelectedStudent({
                  id: 3,
                  name: " امیرحسین محمدی",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/4.png",
                })
              }
            />
          </div>
        </div>

        <div>
          <StudentCenter {...selectedStudent} />
        </div>

        <div className="relative flex flex-col items-end gap-14">
          <div className="transform -translate-x-44">
            <CommentUi
              name="محمدرضا اسدپور"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/6.png"
              selected={selectedStudent.id === 4}
              onclick={() =>
                setSelectedStudent({
                  id: 4,
                  name: "محمدرضا اسدپور",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/6.png",
                })
              }
            />
          </div>
          <div className="transform -translate-x-16">
            <CommentUi
              name=" محمدجواد نعیمی "
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/3.png"
              selected={selectedStudent.id === 5}
              onclick={() =>
                setSelectedStudent({
                  id: 5,
                  name: " محمدجواد نعیمی ",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/3.png",
                })
              }
            />
          </div>
          <div className="transform -translate-x-32">
            <CommentUi
              name="محمدرضا اسدپور"
              cours="دوره ۱۸"
              workIn="product designe تپسی"
              compenyLogo="img/Tapsi.svg"
              profile="img/Profile/5.png"
              selected={selectedStudent.id === 6}
              onclick={() =>
                setSelectedStudent({
                  id: 6,
                  name: "محمدرضا اسدپور",
                  cours: "دوره ۱۸",
                  workIn: "product designer تپسی",
                  compenyLogo: "img/Tapsi.svg",
                  profile: "img/Profile/5.png",
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeenStudents;

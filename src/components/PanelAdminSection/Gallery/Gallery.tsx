import React from "react";
import EditButton from "../PublicComponent/EditButton";
import ExelButton from "../PublicComponent/ExelButton";
import ReusableTable from "../PublicComponent/FormUser";
import { GoTrash } from "react-icons/go";

function Gallery() {
  const columns = [
    "ردیف",
    "عنوان تصویر",
    "وضعیت دوره در صفحه اصلی",
    "عملیات",
  ];

  const data = [
    { id: 1, cours: "UI/UX", state: "به زودی" },
    { id: 2, cours: "Python", state: "درحال ثبت نام" },
    { id: 3, cours: "PHP", state: "تکمیل ظرفیت" },
  ];

  return (
    <div>
      <div className="flex flex-row-reverse items-center gap-4 mt-6">
        <EditButton>افزودن تصاویر</EditButton>
        <ExelButton />
      </div>

      {/* Title */}
      <ul className="flex gap-8 text-[18px] mt-4">
        <li className="border-b-4 border-orange-400">همه دوره‌ها</li>
      </ul>

      <div className="bg-white  rounded-md shadow-sm">
        <ReusableTable
          columns={columns}
          data={data.map((u) => ({
            ردیف: u.id,
            "عنوان دوره": u.cours,
              "وضعیت دوره": u.state,
           "عنوان تصویر":"کارگاه انتقال تجربه",
            "وضعیت دوره در صفحه اصلی": 
              <input type="checkbox" />
            ,
              "عملیات":
               <GoTrash className="text-red-500 hover:scale-110 duration-200" />,
          }))}
        />
      </div>
    </div>
  );
}

export default Gallery;

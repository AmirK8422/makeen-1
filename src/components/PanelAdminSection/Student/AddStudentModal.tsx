import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import SuccessModal from "../AlertComponents/SucssesAlert";
import { TickCircle } from "iconsax-reactjs";
import { api } from "../SettingAdmin/Footer/FooterSetong";

type StudentModalProps = {
  handleClose: () => void;
};

interface StudentData {
  name?: string;
  coursesNumber?: string;
  img?: string;
  voice?: string;
  jopTitleCompany?: string;
  imgCompany?: string;
  mesageMakeeni?: string;
}

function AddStudentModal({ handleClose }: StudentModalProps) {
  const [data, SetData] = useState<StudentData>({
    name: "",
    coursesNumber: "",
    img: "",
    voice: "",
    jopTitleCompany: "",
    imgCompany: "",
    mesageMakeeni: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  async function addStudentHandler() {
    if (Object.values(data).some((v) => !v.trim())) {
      alert("تمام فیلدها باید پر شوند ❌");
      return;
    }
    try {
      // Real Api is /api/makeeni 
      const response = await api.post("/api/Makeeniii",data);
      console.log("Response:", response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error updating :", error);
      alert("خطا در ارسال داده ❌");
    }
    console.log(data);

    // ✅ reset all fields after submit
    SetData({
      name: "",
      coursesNumber: "",
      img: "",
      voice: "",
      jopTitleCompany: "",
      imgCompany: "",
      mesageMakeeni: "",
    });
  }

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <IconButton onClick={handleClose}>
          <IoMdClose />
        </IconButton>
        <p>افزودن مکینی جدید</p>
      </div>

      <div dir="rtl">
        <div className="py-8 grid grid-cols-3 gap-10 text-right">
          {/* نام مکینی */}
          <div className="flex flex-col gap-1">
            <label>نام مکینی</label>
            <input
              type="text"
              value={data.name}
              placeholder="نام و نام خانوادگی"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) => SetData((p) => ({ ...p, name: e.target.value }))}
            />
          </div>

          {/* مکینی کدام دوره */}
          <div className="flex flex-col gap-1">
            <label>مکینی کدام دوره</label>
            <input
              type="text"
              value={data.coursesNumber}
              placeholder="#مکینی_دوره_۱۸"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) =>
                SetData((p) => ({ ...p, coursesNumber: e.target.value }))
              }
            />
            <span className="text-md text-gray-400">
              فرمت را بصورت # نویسی و به جای فاصله از _ استفاده کنید.
            </span>
          </div>

          {/* عکس مکینی */}
          <div className="flex flex-col gap-1">
            <label>عکس مکینی</label>
            <input
              type="file"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) => SetData((p) => ({ ...p, img: e.target.value }))}
            />
          </div>

          {/* وویس مکینی */}
          <div className="flex flex-col gap-1">
            <label>وویس مکینی</label>
            <input
              type="file"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) =>
                SetData((p) => ({ ...p, voice: e.target.value }))
              }
            />
          </div>

          {/* سمت شغلی در کدام شرکت */}
          <div className="flex flex-col gap-1">
            <label>سمت شغلی در کدام شرکت</label>
            <input
              type="text"
              value={data.jopTitleCompany}
              placeholder="Product designer در بلو بانک"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) =>
                SetData((p) => ({ ...p, jopTitleCompany: e.target.value }))
              }
            />
            <span className="text-md text-gray-400">
              فرمت را بصورت عنوان شغلی در عنوان شرکت بنویسید.
            </span>
          </div>

          {/* لوگو شرکت */}
          <div className="flex flex-col gap-1">
            <label>لوگو شرکت</label>
            <input
              type="file"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) =>
                SetData((p) => ({ ...p, imgCompany: e.target.value }))
              }
            />
          </div>

          {/* جمله مکینی */}
          <div className="col-span-3 flex flex-col">
            <label>جمله مکینی</label>
            <input
              type="text"
              value={data.mesageMakeeni}
              placeholder="جمله مورد نظر"
              className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
              onChange={(e) =>
                SetData((p) => ({
                  ...p,
                  mesageMakeeni: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition"
            onClick={handleClose}
          >
            انصراف
          </button>
          <button
            className="colorMakeen text-white px-6 py-2 rounded-md hover:bg-orange-400 transition"
            onClick={addStudentHandler}
          >
            ثبت مکینی
          </button>
        </div>
      </div>

      {/*  success modal*/}
      {showSuccess && (
        <SuccessModal
          icon={<TickCircle size="40" />}
          title="تغییرات با موفقیت اعمال شد"
          description="اطلاعات شما با موفقیت ثبت شد."
          onConfirm={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}
export default AddStudentModal;

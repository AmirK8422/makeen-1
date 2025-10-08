"use client";
import React, { useState } from "react";
import EditButton from "../PublicComponent/EditButton";
import ExelButton from "../PublicComponent/ExelButton";
import ReusableTable from "../PublicComponent/FormUser";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "@mui/material";
import EditInfoCourse from "./EditInfoCourse";

function Courses() {
  const [users, setUsers] = useState([
    { id: 1, cours: "UI/UX", state: "به زودی" },
    { id: 2, cours: "Python", state: "درحال ثبت نام" },
    { id: 3, cours: "PHP", state: "تکمیل ظرفیت" },
  ]);
  const [ismodal, SetIsModal] = useState(false);
  const columns = [
    "ردیف",
    "عنوان دوره",
    "وضعیت دوره",
    "وضعیت دوره در صفحه اصلی",
    "عملیات",
  ];

  const handleDelete = (id: number, course: string) => {
    toast(
      <div className="flex flex-col items-center justify-center mx-auto rounded-2xl p-2">
        <span className="bg-red-100 p-2 rounded-2xl mb-2">
          <GoTrash className="text-red-500 text-2xl" />
        </span>
        <p className="font-medium text-lg">حذف دوره</p>
        <p className="text-sm mt-1">
          آیا از حذف دوره <b>{course}</b> مطمئن هستید؟
        </p>
        <div className="flex justify-center gap-3 mt-3">
          <button
            onClick={() => {
              setUsers((prev) => prev.filter((u) => u.id !== id));
              toast.dismiss();
              toast.success(`دوره ${course} با موفقیت حذف شد ✅`, {
                position: "top-center",
                autoClose: 2000,
              });
            }}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            بله
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 transition"
          >
            خیر
          </button>
        </div>
      </div>,
      {
        position:"top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        hideProgressBar: true,
      }
    );
  };

  const handleEdit = (course: string) => {
    toast.info(`در حال ویرایش ${course} ✏️`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const editHandler = () => {
    SetIsModal(!ismodal);
  };
  return (
    <>
      {!ismodal && (
        <div>
          {/* Header Buttons */}
          <div className="flex flex-row-reverse items-center gap-4 mt-6">
            <EditButton onClick={editHandler}>افزودن دوره</EditButton>
            <ExelButton />
          </div>

          {/* Title */}
          <ul className="flex gap-8 text-[18px] mt-4">
            <li className="border-b-4 border-orange-400" > همه دوره‌ها </li>
          </ul>

          {/* Table */}
          <div className="bg-white  rounded-md shadow">
            <ReusableTable
              columns={columns}
              data={users.map((u) => ({
                ردیف: u.id,
                "عنوان دوره": u.cours,
                "وضعیت دوره": u.state,
                "وضعیت دوره در صفحه اصلی": <input type="checkbox" />,
                عملیات: (
                  <div className="flex gap-2 text-xl cursor-pointer">
                    <button onClick={() => handleDelete(u.id, u.cours)}>
                      <GoTrash className="text-red-500 hover:scale-110 duration-200" />
                    </button>
                    <button onClick={editHandler}>
                      <CiEdit className="text-blue-500 hover:scale-110 duration-200" />
                    </button>
                  </div>
                ),
              }))}
              showCheckbox={true}
            />
          </div>

          {/* Toast Container */}
          <ToastContainer />
        </div>
      )}
      <div>
        {ismodal && (
          <EditInfoCourse state={SetIsModal}/>
        )}
      </div>
    </>
  );
}

export default Courses;

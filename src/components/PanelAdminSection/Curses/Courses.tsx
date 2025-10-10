"use client";
import React, { useState } from "react";
import EditButton from "../PublicComponent/EditButton";
import ExelButton from "../PublicComponent/ExelButton";
import ReusableTable from "../PublicComponent/FormUser";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import EditInfoCourse from "./EditInfoCourse";
import Alert from "../AlertComponents/Alert";

function Courses() {
  const [users, setUsers] = useState([
    { id: 1, cours: "UI/UX", state: "به زودی" },
    { id: 2, cours: "Python", state: "درحال ثبت نام" },
    { id: 3, cours: "PHP", state: "تکمیل ظرفیت" },
  ]);

  const [ismodal, SetIsModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{
    id: number;
    cours: string;
  } | null>(null);

  const columns = [
    "ردیف",
    "عنوان دوره",
    "وضعیت دوره",
    "وضعیت دوره در صفحه اصلی",
    "عملیات",
  ];

  const handleDelete = (id: number, cours: string) => {
    setSelectedCourse({ id, cours });
    setShowAlert(true);
  };

  const confirmDelete = () => {
    if (selectedCourse) {
      setUsers((prev) => prev.filter((u) => u.id !== selectedCourse.id));
    }
    setShowAlert(false);
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
            <li className="border-b-4 border-orange-400">همه دوره‌ها</li>
          </ul>

          {/* Table */}
          <div className="bg-white rounded-md shadow">
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
        </div>
      )}

      {/* Modal for editing */}
      {ismodal && <EditInfoCourse state={SetIsModal} />}

      {/* Alert Modal */}
      {showAlert && selectedCourse && (
        <Alert
          icon={<GoTrash className="text-red-500" />}
          title={`حذف دوره "${selectedCourse.cours}"؟`}
          description="آیا مطمئن هستید که می‌خواهید این دوره را حذف کنید؟"
          confirmText="حذف"
          cancelText="انصراف"
          onConfirm={confirmDelete}
          onCancel={() => setShowAlert(false)}
        />
      )}
    </>
  );
}

export default Courses;

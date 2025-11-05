"use client";
import React, { useState } from "react";
import EditButton from "@/components/PanelAdminSection/PublicComponent/EditButton";
import ExelButton from "@/components/PanelAdminSection/PublicComponent/ExelButton";
import ReusableTable from "@/components/PanelAdminSection/PublicComponent/FormUser";
import { CiEdit } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import InputStudent from "./InputStudent";
import AddStudentModal from "./AddStudentModal";

const Student = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "UI/UX", company: "اسنپ", voise: "دارد", mainpage: false },
    { id: 2, name: "Python", company: "اسنپ", voise: "دارد", mainpage: true },
    { id: 3, name: "PHP", company: "اسنپ", voise: "دارد", mainpage: false },
  ]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    "ردیف",
    "نام مکینی",
    "نام شرکت",
    "وضعیت وویس",
    "وضعیت دوره در صفحه اصلی",
    "عملیات",
  ];


  return (
    <>
      <div>
        {/* Header Buttons */}
        <div className="flex flex-row-reverse items-center gap-4 mt-6">
          <EditButton onClick={handleOpen}>افزودن مکینی جدید</EditButton>
          <ExelButton />
        </div>

        {/* Title */}
        <ul className="flex gap-8 text-[18px] mt-4">
          <li className="border-b-4 border-orange-400">همه مکینی‌ها</li>
        </ul>

        {/* Table */}
        <div className="bg-white rounded-md shadow-sm">
          <ReusableTable
            columns={columns}
            data={users.map((u) => ({
              ردیف: u.id,
              "نام مکینی": u.name,
              "نام شرکت": u.company,
              "وضعیت وویس": u.voise,
              "وضعیت دوره در صفحه اصلی": (
                <input
                  type="checkbox"
                  checked={u.mainpage}
                  onChange={() =>
                    setUsers((prev) =>
                      prev.map((item) =>
                        item.id === u.id
                          ? { ...item, mainpage: !item.mainpage }
                          : item
                      )
                    )
                  }
                />
              ),
              عملیات: (
                <div className="flex gap-2 text-xl cursor-pointer">
                  <button title="حذف">
                    <GoTrash className="text-red-500 hover:scale-110 duration-200" />
                  </button>
                  <button title="ویرایش">
                    <CiEdit className="text-blue-500 hover:scale-110 duration-200" />
                  </button>
                </div>
              ),
            }))}
          />
        </div>
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-student-title"
        aria-describedby="add-student-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 10,
            borderRadius: 3,
            p: 3,
            width: 1200,
          }}
        >
         <AddStudentModal handleClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
};

export default Student;

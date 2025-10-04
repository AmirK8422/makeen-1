import React from "react";

import Navbar from "./Navbar";
import ExelButton from "../PublicComponent/ExelButton";
import ReusableTable from "../PublicComponent/FormUser";

function Manageuser() {
  const columns = [
    "ردیف",
    "نام کاربر",
    "تاریخ درخواست",
    "محل سکونت",
    "جنسیت",
    "متقاضی دوره",
    "عملیات",
  ];

  const users = [
    {
      id: 1,
      name: "امیر نکونام",
      date: "1403/07/10",
      city: "تهران",
      gender: "مرد",
      course: "فرانت‌اند",
      action: <button className="text-blue-600 hover:underline">ویرایش</button>,
    },
    {
      id: 2,
      name: "سارا احمدی",
      date: "1403/06/28",
      city: "اصفهان",
      gender: "زن",
      course: "UI/UX",
      action: <button className="text-blue-600 hover:underline">ویرایش</button>,
    },
    {
      id: 3,
      name: "سارا احمدی",
      date: "1403/06/28",
      city: "اصفهان",
      gender: "زن",
      course: "UI/UX",
      action: <button className="text-blue-600 hover:underline">ویرایش</button>,
    },
  ];

  return (
    <div className="px-6">
      <ExelButton />
      <Navbar />
      <ReusableTable
        columns={columns}
        data={users.map((u) => ({
          ردیف: u.id,
          "نام کاربر": u.name,
          "تاریخ درخواست": u.date,
          "محل سکونت": u.city,
          جنسیت: u.gender,
          "متقاضی دوره": u.course,
          عملیات: u.action,
        }))}
        showCheckbox={true}
      />
    </div>
  );
}

export default Manageuser;

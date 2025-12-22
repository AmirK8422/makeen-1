


"use client";
import React, { useState } from "react";

const Student = ({ handleClose, onAdd }: any) => {
  const [form, setForm] = useState({
    name: "",
    coursesNumber: "",
    img: "",
    voice: "",
    jopTitleCompany: "",
    imgCompany: "",
    mesageMakeeni: "",
  });

  const [previewImg, setPreviewImg] = useState("");
  const [previewCompany, setPreviewCompany] = useState("");

  // Live form update
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // selecting image but optional
  const handleImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewImg(url);
    setForm({ ...form, img: url });
  };

  const handleCompanyImage = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewCompany(url);
    setForm({ ...form, imgCompany: url });
  };

  const submitForm = async () => {
    const res = await fetch("/api/Makeeni", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    onAdd(data.data); // Add to table dynamically
    handleClose();
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">افزودن مکینی جدید</h2>

      <div className="grid grid-cols-3 gap-5">

        {/* name */}
        <div>
          <label>نام مکینی</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded mt-1"
            onChange={handleChange}
          />
        </div>

        {/* courses number */}
        <div>
          <label>تعداد دوره</label>
          <input
            type="text"
            name="coursesNumber"
            className="w-full border p-2 rounded mt-1"
            onChange={handleChange}
          />
        </div>

        {/* voice */}
        <div>
          <label>لینک ویس</label>
          <input
            type="text"
            name="voice"
            className="w-full border p-2 rounded mt-1"
            onChange={handleChange}
          />
        </div>

        {/* Job title */}
        <div>
          <label>سمت شغلی</label>
          <input
            type="text"
            name="jopTitleCompany"
            className="w-full border p-2 rounded mt-1"
            onChange={handleChange}
          />
        </div>

        {/* message */}
        <div className="col-span-3">
          <label>پیام مکینی</label>
          <textarea
            name="mesageMakeeni"
            className="w-full border p-2 rounded mt-1"
            rows={3}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* user image */}
        <div>
          <label>عکس مکینی</label>
          <input
            type="file"
            className="w-full mt-1"
            onChange={handleImage}
          />
          {previewImg && (
            <img
              src={previewImg}
              className="w-24 h-24 rounded mt-2 object-cover"
            />
          )}
        </div>

        {/* company image */}
        <div>
          <label>لوگوی شرکت</label>
          <input
            type="file"
            className="w-full mt-1"
            onChange={handleCompanyImage}
          />
          {previewCompany && (
            <img
              src={previewCompany}
              className="w-20 h-20 rounded mt-2 object-cover"
            />
          )}
        </div>

      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button
          className="bg-gray-300 text-black px-5 py-2 rounded"
          onClick={handleClose}
        >
          انصراف
        </button>

        <button
          className="bg-orange-500 text-white px-5 py-2 rounded"
          onClick={submitForm}
        >
          ذخیره اطلاعات
        </button>
      </div>
    </div>
  );
};

export default Student;


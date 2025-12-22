"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { Edit2, Trash } from "iconsax-reactjs";
import ReactModal from "react-modal";
import AlertModal from "@/components/PanelAdminSection/AlertComponents/Alert";

interface Mentor {
  id: string;
  fullName: string;
  courseName: string;
  side: string; 
  description: string;
  imagePath: string;
}

const API_URL = "http://194.36.174.46:2000/api/Mentor";

const AdminMentors: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const [showAlert, setShowAlert] = useState(false);
  const [mentorToDelete, setMentorToDelete] = useState<Mentor | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    courseName: "",
    side: "mentor",
    description: "",
    imageFile: null as File | null,
    imagePreview: "",
  });

  const columns = ["ردیف", "نام منتور", "سمت", "منتور دوره", "توضیحات", "عکس", "عملیات"];

  const getImageUrl = (path: string) => `http://194.36.174.46:2000/${path}`;

  // ---------------- FETCH ----------------
  const fetchMentors = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("خطا در دریافت داده");
      const data: Mentor[] = await res.json();
      setMentors(data);
    } catch {
      setMentors([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  // ---------------- MODAL HANDLING ----------------
  const openModal = (mentor?: Mentor) => {
    if (mentor) {
      setSelectedMentor(mentor);

      setFormData({
        fullName: mentor.fullName,
        courseName: mentor.courseName,
        side: mentor.side,
        description: mentor.description,
        imageFile: null,
        imagePreview: mentor.imagePath ? getImageUrl(mentor.imagePath) : "",
      });
    } else {
      setSelectedMentor(null);
      setFormData({
        fullName: "",
        courseName: "",
        side: "mentor",
        description: "",
        imageFile: null,
        imagePreview: "",
      });
    }
    setIsOpen(true);
  };

  // ---------------- IMAGE ----------------
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  // ---------------- SUBMIT (POST / PUT) ----------------
  const handleSubmit = async () => {
    if (!formData.fullName.trim() || !formData.courseName.trim()) {
      alert("نام و دوره منتور الزامی است.");
      return;
    }

    const fd = new FormData();
    fd.append("FullName", formData.fullName);
    fd.append("CourseName", formData.courseName);
    fd.append("Side", formData.side);
    fd.append("Description", formData.description);

    if (selectedMentor) {
      fd.append("Id", selectedMentor.id);
    }

    // فقط اگر عکس جدید انتخاب شده باشد اضافه می‌کنیم
    if (formData.imageFile) {
      fd.append("Image", formData.imageFile);
    }

    const method = selectedMentor ? "PUT" : "POST";
    const url = selectedMentor ? `${API_URL}/${selectedMentor.id}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        body: fd,
      });

      if (!res.ok) throw new Error("خطا");

      await fetchMentors();
      setIsOpen(false);
    } catch {
      alert("خطا در ثبت اطلاعات");
    }
  };

  // ---------------- DELETE ----------------
  const confirmDelete = (mentor: Mentor) => {
    setMentorToDelete(mentor);
    setShowAlert(true);
  };

  const handleDelete = async () => {
    if (!mentorToDelete) return;

    try {
      const res = await fetch(`${API_URL}/${mentorToDelete.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("خطا");

      await fetchMentors();
      setShowAlert(false);
      setMentorToDelete(null);
    } catch {
      alert("خطا در حذف");
    }
  };

  return (
    <div className="relative">
      {/* MAIN TABLE */}
      <div className="bg-white px-4 pb-5 rounded-md m-4">
        {loading ? (
          <p className="text-center py-10">در حال بارگذاری...</p>
        ) : (
          <table className="min-w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                {columns.map((c) => (
                  <th key={c} className="py-2 px-4 text-gray-700">{c}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {mentors.map((m, index) => (
                <tr key={m.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{m.fullName}</td>
                  <td className="py-2 px-4">{m.side}</td>
                  <td className="py-2 px-4">{m.courseName}</td>
                  <td className="py-2 px-4 max-w-xs truncate" title={m.description}>
                    {m.description}
                  </td>
                  <td className="py-2 px-4">
                    {m.imagePath ? (
                      <img
                        src={getImageUrl(m.imagePath)}
                        className="w-16 h-16 rounded-lg object-cover shadow"
                      />
                    ) : (
                      "بدون عکس"
                    )}
                  </td>
                  <td className="py-2 px-4 flex gap-3 justify-center">
                    <Edit2
                      color="#2f80ed"
                      className="cursor-pointer"
                      onClick={() => openModal(m)}
                    />
                    <Trash
                      color="#eb5757"
                      className="cursor-pointer"
                      onClick={() => confirmDelete(m)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ADD BUTTON */}
      <button
        onClick={() => openModal()}
        className="text-[18px] font-medium text-white h-[53px] w-[144px]
          bg-[#F28C28] rounded-lg py-3 px-6 absolute top-0 left-5 mt-[-60px]"
      >
        افزودن منتور
      </button>

      {/* MODAL */}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bg-white p-6 rounded-xl shadow-lg w-[768px] max-h-[600px] overflow-y-auto mx-auto"
        overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-center">
            {selectedMentor ? "ویرایش منتور" : "افزودن منتور"}
          </h2>

          {/* INPUTS */}
          <label>نام منتور</label>
          <input
            className="border rounded py-2 px-3"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <label>سمت</label>
          <input
            className="border rounded py-2 px-3"
            value={formData.side}
            onChange={(e) => setFormData({ ...formData, side: e.target.value })}
          />

          <label>منتور دوره</label>
          <input
            className="border rounded py-2 px-3"
            value={formData.courseName}
            onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
          />

          <label>توضیحات</label>
          <textarea
            rows={4}
            className="border rounded py-2 px-3"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <label>عکس</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />

          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              className="w-40 mt-2 rounded shadow"
              alt="preview"
            />
          )}

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#F28C28] text-white rounded-lg py-2 px-6"
            >
              ثبت
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="border rounded-lg py-2 px-6"
            >
              انصراف
            </button>
          </div>
        </div>
      </ReactModal>

      {/* DELETE CONFIRM */}
      {showAlert && mentorToDelete && (
        <AlertModal
          icon={<Trash className="text-red-500" />}
          title={`حذف "${mentorToDelete.fullName}"`}
          description="آیا مطمئن هستید؟"
          confirmText="حذف"
          cancelText="انصراف"
          onConfirm={handleDelete}
          onCancel={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default AdminMentors;

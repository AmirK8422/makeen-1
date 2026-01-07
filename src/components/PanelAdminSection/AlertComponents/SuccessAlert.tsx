"use client";
import React from "react";

interface SuccessModalProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  confirmText?: string;
  onConfirm: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  icon,
  title,
  description,
  confirmText = "باشه",
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center z-50 backdrop-blur-[2px]">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-[400px] text-center animate-fadeIn">
        <div className="flex flex-col items-center gap-4">
          {/* ✅ Success icon */}
          {icon && <div className="text-4xl text-green-500">{icon}</div>}

          {/* ✅ Title */}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

          {/* ✅ Optional description */}
          {description && (
            <p className="text-gray-600 text-sm leading-6">{description}</p>
          )}

          {/* ✅ Confirm button */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={onConfirm}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

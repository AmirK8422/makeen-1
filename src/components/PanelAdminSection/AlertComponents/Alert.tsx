"use client";
import React from "react";

interface AlertModalProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  icon,
  title,
  description,
  confirmText = "تأیید",
  cancelText = "انصراف",
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center z-50 backdrop-blur-[2px]">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-[400px] text-center animate-fadeIn">
        <div className="flex flex-col items-center gap-4">
          {icon && <div className="text-4xl">{icon}</div>}

          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

          {description && (
            <p className="text-gray-600 text-sm leading-6">{description}</p>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              {confirmText}
            </button>
            <button
              onClick={onCancel}
              className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;

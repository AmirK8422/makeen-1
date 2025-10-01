"use client";
import React from "react";

type ViewMode = "weekly" | "monthly" | "yearly";

interface SelectCurrencyProps {
  selected: ViewMode;
  onChange: (mode: ViewMode) => void;
  bgStyle?:string,
}

export default function Select({ selected, onChange,bgStyle }: SelectCurrencyProps) {
  const options: { label: string; value: ViewMode }[] = [
    { label: "هفتگی", value: "weekly" },
    { label: "ماهانه", value: "monthly" },
    { label: "سالانه", value: "yearly" },
  ];

  return (
    <div className={`${bgStyle} flex items-center justify-center  rounded-[8px] px-4 py-2`}>
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`cursor-pointer px-5 py-1 transition font-medium rounded-md ${
            selected === option.value
              ? "bg-white "
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <p className="text-[14px]">{option.label}</p>
        </div>
      ))}
    </div>
  );
}

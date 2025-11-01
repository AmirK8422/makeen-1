import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function FooterInput({ label, placeholder, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border w-[356px] border-gray-400 p-2 rounded-xl"
      />
    </div>
  );
}

export default FooterInput;

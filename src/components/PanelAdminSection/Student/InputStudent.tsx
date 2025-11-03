import React, { ReactNode } from "react";
import { Label } from "recharts";

interface StudentData {
  name?: string;
  course?: string;
  img?: File | null;
  voice?: File | null;
  jobTitleCompany?: string;
  imgCompany?: File | null;
  messageMakeeni?: string;
}

interface InputTypes {
  lable: string;
  id?: string;
  placeholder?: string;
  span?: ReactNode;
  type: string;
  data?: StudentData;
  setData?: React.Dispatch<React.SetStateAction<StudentData>>;
}

function InputStudent({ lable, id, placeholder, span, type, data, setData }: InputTypes) {
  return (
    <div>
      <label htmlFor={id}>{lable}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border w-full border-gray-400 p-2 rounded-md text-right mt-2"
        value={data}
        onChange={(e) => {
          setData(e.target.value)
        }}
      />
      <span className="text-md text-gray-400">{span}</span>
    </div>
  );
}

export default InputStudent;

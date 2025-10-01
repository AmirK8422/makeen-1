import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

function Calender() {
  return (
    <div>
      <button
        className="flex  items-center bg-whiteitems-center justify-center gap-2 p-2.5 w-36 h-9  rounded-lg shadow-md  cursor-pointer  font-medium text-gray-500">
        <span >انتخاب هفته</span>
        <FaCalendarAlt />
      </button>
    </div>
  );
}

export default Calender;

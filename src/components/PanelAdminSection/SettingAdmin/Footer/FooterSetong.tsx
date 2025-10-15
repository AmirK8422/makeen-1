import React from "react";

function FooterSeting() {
  return (
    <div className="px-6 py-11">
      <ul>
        <li className="w-[90px] border-orange-400 border-b-3">تنظیمات فوتر</li>
      </ul>
      <div
        className="bg-white w-full
          p-5 flex items-center flex-col justify-center gap-5 rounded-md"
      >
        <div className="grid grid-cols-2 items-center justify-center  gap-x-32 gap-y-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              <label htmlFor={`add-${i}`}>آدرس</label>
              <input
                type="text"
                id={`add-${i}`}
                placeholder="typeAdres"
                className="border w-[356px] border-gray-400 p-2 rounded-xl"
              />
            </div>
          ))}
        </div>
        <button className="mt-15 colorMakeen px-6 rounded-xl py-2.5">
          ثبت تغییرات
        </button>
      </div>
    </div>
  );
}

export default FooterSeting;

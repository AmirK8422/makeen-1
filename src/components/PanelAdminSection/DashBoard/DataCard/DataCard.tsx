import React from "react";
import { LuContactRound } from "react-icons/lu";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

function DataCard() {
  const data = [
    {
      title: "تعداد درخواست های مشاوره",
      logo: <LuContactRound />,
      user: "۱۲۶",
      increase: 26,
      decrease: 0,
    },
    {
      title: "تعداد درخواست های دوره‌ها",
      logo: <LuContactRound />,
      user: "۸۴",
      increase: 0,
      decrease: 12,
    },
    {
      title: "تعداد درخواست های مشاوره",
      logo: <LuContactRound />,
      user: "۱۲۶",
      increase: 15,
      decrease: 0,
    },
    {
      title: "تعداد درخواست های دوره‌ها",
      logo: <LuContactRound />,
      user: "۸۴",
      increase: 0,
      decrease: 7,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-2 ">
      {data.map((item, i) => {
       
        const isUp = item.increase > 0;
        const changeValue = isUp ? item.increase : item.decrease;
        const colorClass = isUp ? "text-green-600" : "text-red-600";
        const Icon = isUp ? FiArrowUpRight : FiArrowDownRight;

        return (
          <div
            key={i}
            className="p-4 rounded-2xl shadow-md w-72 h-36 bg-white flex flex-col justify-between"
          >
           
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-medium">{item.title}</p>
              <span className={`text-3xl`}>{item.logo}</span>
            </div>

            
            <p className="text-[20px] font-bold text-gray-900 ">
              {item.user} <span className="text-sm font-bold">کاربر</span>
            </p>

           
            <div className={`mt-2 flex items-center gap-2 ${colorClass}`}>
              <Icon className="text-lg" />
              <p>
                {changeValue}%{" "}
                {isUp ? "افزایش نسبت به هفته قبل" : "کاهش نسبت به هفته قبل"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataCard;

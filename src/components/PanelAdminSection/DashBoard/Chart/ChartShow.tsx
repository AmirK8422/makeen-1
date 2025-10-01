"use client";
import React, { useState } from "react";
import SelectCurrency from "./Select";
import Calender from "./Calender";
import CustomLineChart from "./\/ChartSignUp";

type ViewMode = "weekly" | "monthly" | "yearly";

interface ChartData {
  day?: string;
  month?: string;
  year?: string;
  users: number;
}

type TypeTitle = {
  bgStyle: string,
  title: string,
  chartColor : string
}
function Chart({bgStyle,title,chartColor}:TypeTitle) {
  const [viewMode, setViewMode] = useState<ViewMode>("weekly");

  const weeklyData: ChartData[] = [
    { day: "شنبه", users: 150 },
    { day: "یکشنبه", users: 300 },
    { day: "دوشنبه", users: 450 },
    { day: "سه‌شنبه", users: 600 },
    { day: "چهارشنبه", users: 800 },
    { day: "پنجشنبه", users: 950 },
    { day: "جمعه", users: 700 },
  ];

  const monthlyData: ChartData[] = [
    { month: "فروردین", users: 1200 },
    { month: "اردیبهشت", users: 1800 },
    { month: "خرداد", users: 1600 },
    { month: "تیر", users: 2000 },
    { month: "مرداد", users: 2400 },
    { month: "شهریور", users: 2100 },
  ];

  const yearlyData: ChartData[] = [
    { year: "1400", users: 15000 },
    { year: "1401", users: 18000 },
    { year: "1402", users: 22000 },
    { year: "1403", users: 19500 },
  ];

  const getData = (): { data: ChartData[]; dataKey: string } => {
    switch (viewMode) {
      case "weekly":
        return { data: weeklyData, dataKey: "day" };
      case "monthly":
        return { data: monthlyData, dataKey: "month" };
      case "yearly":
        return { data: yearlyData, dataKey: "year" };
    }
  };

  const { data, dataKey } = getData();

  return (
    <div className="mt-9">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-6">
          <SelectCurrency
            selected={viewMode}
            onChange={setViewMode}
            bgStyle={bgStyle}
          />
          
          <Calender />
        </div>
      </div>
      <CustomLineChart data={data} dataKey={dataKey} chartColor={chartColor} />
    </div>
  );
}

export default Chart;

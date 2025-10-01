"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Telegram",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Instagram",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Google",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Bale",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Eitaa",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Other",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Example = () => {
  return (
    <div className="w-[550px] h-75">
      <div className="flex items-center justify-between mb-9">
        <h2 className="font-medium">کانال های جذب کاربر</h2>
        <p className="text-gray">بر اساس ۱۴۵۶ کاربر</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tick={{ fontSize: 12, dx: -35 }} />
          <Tooltip />
          <Bar dataKey="uv" stackId="a" fill="#F28C28" />
          <Bar dataKey="pv" stackId="a" fill="#fdecdc" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;

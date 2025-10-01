"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartData {
  day?: string;
  month?: string;
  year?: string;
  users: number;
  
}

interface CustomLineChartProps {
  data: ChartData[];
  dataKey: string;
  chartColor:string// مثل day, month, year
}

function CustomLineChart({ data, dataKey,chartColor }: CustomLineChartProps) {
  return (
    <div className="h-[280px] bg-white rounded-xl shadow-md p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" />
          <XAxis dataKey={dataKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12, dx: -35 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke={chartColor}
            strokeWidth={2}
            dot={{ r: 3, fill: "#fff" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;

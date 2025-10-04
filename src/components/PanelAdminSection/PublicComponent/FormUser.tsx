import React from "react";

interface ReusableTableProps {
  columns: string[];
  data: Record<string, any>[];
  showCheckbox?: boolean; // کنترل نمایش چک‌باکس
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  data,
  showCheckbox = false, // پیش‌فرض: بدون چک‌باکس
}) => {
  return (
    <div className="bg-white rounded-md">
      <table className="w-full text-right">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="py-3 px-4 font-normal">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 transition">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-3 px-4 border border-gray-300">
                  {showCheckbox && colIndex === 0 ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="accent-orange-400 cursor-pointer"
                      />
                      <span>{row[col]}</span>
                    </div>
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;

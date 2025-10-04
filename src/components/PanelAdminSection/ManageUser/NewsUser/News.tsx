import React from "react";
import ExelButton from "../../PublicComponent/ExelButton";
import Navbar from "../Navbar";
import ReusableTable from "../../PublicComponent/FormUser";

function NewsUser() {
  const columns = ["ردیف", "شماره تماس", "تاریخ ثبت"];

  const users = [
    { id: 1, Number: "09371429820", date: "1403/07/10", },
    { id: 2, Number: "09371429820", date: "1403/06/28", },
    { id: 3, Number: "09371429820", date: "1403/06/28", }
  ];
  return (
    <div className="px-6">
      <ExelButton />
      <Navbar />
      <div className="bg-white rounded-md ">
        <ReusableTable
          columns={columns}
          data={users.map((u) => ({
            "ردیف": u.id,
            "شماره تماس": u.Number,
            "تاریخ ثبت": u.date,
          }))}
          showCheckbox = {true}
        />
      </div>
    </div>
  );
}

export default NewsUser;

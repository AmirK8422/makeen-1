import React from "react";
import { IoMdNotifications } from "react-icons/io";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });

function Notific() {
  const today = moment();
  const dayName = today.format("dddd"); 
  const fullDate = today.format("jD jMMMM jYYYY");

  return (
    <div className="w-full bg-white  h-24">
      <div className="flex items-center justify-between py-3 px-4">
        <div>
          <p>{dayName}</p>
          <p className="text-gray-500">{fullDate}</p>
        </div>
        <div className="flex items-center">
          <div className="border-l p-5 border-gray-200">
            <IoMdNotifications className="text-2xl" />
          </div>
          <div className="flex gap-2 items-center mr-14">
            <img src="img/icons/icon.png" alt="profile" />
            <div>
              <p>آکادمی مکین</p>
              <p className="text-gray-500">سوپر ادمین</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notific;

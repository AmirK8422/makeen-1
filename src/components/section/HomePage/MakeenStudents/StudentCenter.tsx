import React from "react";

interface StudentProps {
  name: string;
  workIn: string;
  profile: string;
}
function StudentCenter({
  name,
  workIn,

  profile,
}: StudentProps) {
  return (
    <div className="shadow-xs md:shadow-xl rounded-2xl bg-white">
      <div className="flex flex-col items-center justify-center p-2">
        <div className="-mt-12 bg-white p-3 shadow-rt-2xl shadow-rl-2xl rounded-full">
          <img className="w-20 h-20" src={profile?profile:"img/Profile/6.png"} alt="profile" />
        </div>
        <p className="font-semibold pt-2.5">{name?name:"محمدرضا اسدپور"}</p>
        <p className="text-gray text-12">{workIn?workIn:"product designer تپسی"}</p>
        <div className="flex items-center text-center mx-3 mt-3 p-2">
          <p className="w-[390px] ">
            یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه
            کاری» رو حس می‌کرد. از ترم آخر وارد کالج شد و خودش می‌گه دستاورد
            اصلیش، یاد گرفتن کار تیمی بود. ملیکا سابقه کار تو شرکت‌های{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCenter;

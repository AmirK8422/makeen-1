import React, { useState } from "react";
type state = {
  state: React.Dispatch<React.SetStateAction<boolean>>;
};
function EditInfoCourse({ state }: state) {
  const [ismodal, setIsModal] = useState({
    propertys: false,
    timer: false,
    qouestion: false,
    performance:false
  })
  return (
    <div className="bg-white mt-4 rounded-md p-4">
      <p className="font-medium text-20">افزودن دوره</p>
      {/* input */}
      <div className="mt-8 flex items-center  gap-10">
        <div className="flex flex-col gap-1">
          <label htmlFor={`add`}>نام دوره</label>
          <input
            type="text"
            id={`add`}
            placeholder="typeAdres"
            className="border w-[356px] border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={`add`}>تیزر دوره</label>
          <input
            type="text"
            id={`add`}
            placeholder="typeAdres"
            className="border w-[356px] border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="status">وضعیت دوره</label>
          <select
            id="status"
            className="border w-[356px] border-gray-400 p-2 rounded-md"
            defaultValue="active"
          >
            <option value="active"> درحال ثبت نام</option>
            <option value="inactive">غیرفعال</option>
            <option value="ongoing">تکمیل ظرفیت </option>
          </select>
        </div>
      </div>
      {/* /input */}
      <div className="mt-8 flex  gap-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="status"> توضیحات دوره</label>
          <textarea
            id="status"
            placeholder="typeAdres"
            className="border w-[356px] h-[100px] border-gray-400 p-2 rounded-md resize-none"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={`add`}>کاور دوره</label>
          <input
            type="text"
            id={`add`}
            placeholder="typeAdres"
            className="border w-[356px] border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-md shadow-md flex items-center justify-center p-3">
            <button className=" text-gray cursor-pointer" >ویرایش ویژگی ها</button>
          </div>
         <div className="rounded-md  shadow-md flex items-center justify-center p-3">
            <button className=" text-gray cursor-pointer">ویرایش روند اجرا</button>
          </div>
          <div className="rounded-md shadow-md flex items-center justify-center p-3">
            <button className=" text-gray cursor-pointer">ویرایش تایمر ثبت نام</button>
          </div>
          <div className="rounded-md shadow-md flex items-center justify-center p-3">
            <button className=" text-gray cursor-pointer">   ویرایش سوالات متداول</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => state(false)}
          className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition"
        >
          انصراف
        </button>
        <button className="colorMakeen text-white px-6 py-2 rounded-md hover:bg-orange-400 transition">
          ثبت دوره
        </button>
      </div>
    </div>
  );
}

export default EditInfoCourse;

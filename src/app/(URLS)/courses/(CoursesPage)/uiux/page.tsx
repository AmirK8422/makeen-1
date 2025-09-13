import Image from "next/image";
import React from "react";

function Uiux() {
  return (
    <div className="md:ml-20 md:mr-20 md:mt-9">
      <section className="flex justify-between">
        <div className="md:w-[761px] md:h-[442.06] md:rounded-2xl md:p-4 md:gap-2 bg-white">
          <Image className="md:rounded-lg md:w-[729px] md:h-[410.06]" src="/img/CoursesPagePhoto.jpg" width={729} height={410.06} alt="photo"></Image>
        </div>
        <div className="flex flex-col justify-between md:w-[496px] md:h-[433px]  md:ml-6">
            <div dir="rtl" className="flex flex-col bg-white md:rounded-2xl md:h-[183px] md:w-[496px] md:p-4">
                <button className='text-[#27AE60] bg-[rgba(54,236,60,0.1)] md:mr-[355px] md:text-base text-xs font-medium md:px-2 md:pt-0.5 md:pb-1 p-1 rounded-lg gap-2  md:w-[108px] md:h-[33px] w-[77px] h-[28px]'>درحال ثبت نام</button>
                <h1 className="md:text-[32px] md:font-semibold md:mt-[-30px] md:mb-[30px]">دوره UI/UX</h1>
                <p className="text-[rgba(142,142,147,1)] md:text-base md:font-normal">اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده</p>
            </div>
            <div className="bg-white flex items-center justify-between md:px-4 md:py-2 md:rounded-2xl md:w-[496px] md:h-[96px]">
                <div className="flex">
                    <div className="flex flex-col items-center justify-center md:mr-8">
                         <h1 className="md:text-xl text-[#F28C28] md:font-medium md:mb-1">12</h1>
                         <hr className="text-[#D1D1D6] md:w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm md:font-medium md:mt-1">ثانیه</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center md:mr-8">
                         <h1 className="md:text-xl md:font-medium md:mb-1">8</h1>
                         <hr className="text-[#D1D1D6] md:w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm md:font-medium md:mt-1">دقیقه</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center md:mr-8">
                         <h1 className="md:text-xl md:font-medium md:mb-1">16</h1>
                         <hr className="text-[#D1D1D6] md:w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm md:font-medium md:mt-1">ساعت</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <h1 className="md:text-xl md:font-medium md:mb-1">5</h1>
                         <hr className="text-[#D1D1D6] md:w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm md:font-medium md:mt-1">روز</h1>
                    </div>
                </div>
                <div className="text-[#F28C28] md:text-[22px] md:font-medium">
                    مهلت ثبت نام
                </div>
            </div>
            <div>
                <button className="bg-[#36A8D9] text-white md:text-[18px] md:font-medium md:w-[496px] md:h-[49px] md:rounded-[80px]">ثبت نام</button>
            </div>
        </div>
      </section>
      <section className="flex justify-between md:mt-8 md:mb-24">
        <div className="flex justify-end items-center bg-white md:h-[82px] md:w-[302.25px] md:rounded-2xl md:py-2 md:px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4">
                <h1 className="md:text-lg md:font-medium md:mb-2">نوع برگزاری دوره</h1>
                <p className="text-[#AEAEB2] md:text-base md:font-normal">حضوری</p>
            </div>
            <Image src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] md:w-[302.25px] md:rounded-2xl md:py-2 md:px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4">
                <h1 className="md:text-lg md:font-medium md:mb-2">روش پرداخت</h1>
                <p className="text-[#AEAEB2] md:text-base md:font-normal">قسطی</p>
            </div>
            <Image src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] md:w-[302.25px] md:rounded-2xl md:py-2 md:px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4">
                <h1 className="md:text-lg md:font-medium md:mb-2">مدت زمان دوره</h1>
                <p className="text-[#AEAEB2] md:text-base md:font-normal">1400 ساعت</p>
            </div>
            <Image src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] md:w-[302.25px] md:rounded-2xl md:py-2 md:px-4">
            <div dir="rtl" className="md:mr-4">
                <h1 className="md:text-lg md:font-medium md:mb-2">گواهی پایان دوره</h1>
                <p className="text-[#AEAEB2] md:text-base md:font-normal">دارد</p>
            </div>
            <Image src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <h1 className="md:text-[28px] md:font-semibold md:mb-16">روند اجرای دوره</h1>
        <div className="flex w-full justify-between">
            <div className="flex flex-col items-center justify-between text-center md:w-[226px]">
                <div className="flex items-center">
                   <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] md:border-[0.25px]  md:w-[97px] md:text-[28px] md:font-semibold md:rounded-2xl">4</div>
                   <h1 className=" text-[#8E8E93] md:w-[250px] md:mr-[-240px] text-4xl">-----------------</h1>
                </div>
                <h1 className="md:text-lg md:font-semibold md:mt-5 md:mb-3">نوشتن رزومه و ورود به بازار کار</h1>
                <p className="md:text-sm md:font-normal ">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center md:w-[226px]">
                <div className="flex items-center">
                   <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] md:border-[0.25px]  md:w-[97px] md:text-[28px] md:font-semibold md:rounded-2xl">3</div>
                   <h1 className=" text-[#8E8E93] md:w-[250px] md:mr-[-240px] text-4xl">-----------------</h1>
                </div>
                <h1 className="md:text-lg md:font-semibold md:mt-5 md:mb-3">شروع پروژه همراه با تیم</h1>
                <p className="md:text-sm md:font-normal ">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center md:w-[226px]">
                <div className="flex items-center">
                   <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] md:border-[0.25px]  md:w-[97px] md:text-[28px] md:font-semibold md:rounded-2xl">2</div>
                   <h1 className=" text-[#8E8E93] md:w-[250px] md:mr-[-240px] text-4xl">-----------------</h1>
                </div>
                <h1 className="md:text-lg md:font-semibold md:mt-5 md:mb-3">کارگاه های آموزشی</h1>
                <p className="md:text-sm md:font-normal ">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
            </div>
            <div className="flex flex-col items-center justify-between text-center md:w-[226px]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] md:border-[0.25px]  md:w-[97px] md:text-[28px] md:font-semibold md:rounded-2xl">1</div>
                <h1 className="md:text-lg md:font-semibold md:mt-5 md:mb-3">مصاحبه و تعیین سطح</h1>
                <p className="md:text-sm md:font-normal ">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Uiux;

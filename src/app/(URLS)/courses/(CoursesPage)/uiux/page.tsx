import Image from "next/image";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


function Uiux() {
  return (
    <div className="md:ml-20 ml-4 md:mr-20 mr-4 md:mt-9">
      <section className="flex flex-col md:flex-row items-center justify-between mt-[13px]">
        <div className="md:w-[761px] w-[358px] md:h-[442.06] h-[208px] md:rounded-2xl rounded-lg md:p-4 p-2 gap-2  bg-white">
          <Image className="md:rounded-lg rounded-sm md:w-[729px] w-[342px] md:h-[410.06] h-[192.38]" src="/img/CoursesPagePhoto.jpg" width={729} height={410.06} alt="photo"></Image>
        </div>
        <div className="flex flex-col justify-between md:w-[496px] md:h-[433px]  md:ml-6 mt-[13px] md:mt-[-13px]">
            <div dir="rtl" className="flex flex-col bg-white md:rounded-2xl rounded-lg md:h-[183px] h-[161px] md:w-[496px] w-[358px] p-4">
                <button className='text-[#27AE60] bg-[rgba(54,236,60,0.1)] md:mr-[355px] mr-[220px] text-base font-medium px-2 pt-0.5 pb-1 p-1 rounded-lg gap-2 w-[108px] h-[33px]'>درحال ثبت نام</button>
                <h1 className="md:text-[32px] text-2xl font-semibold md:mt-[-30px] mt-[-28px] md:mb-[30px] mb-[28px]">دوره UI/UX</h1>
                <p className="text-[rgba(142,142,147,1)] md:text-base text-sm font-normal">اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده</p>
            </div>
            <div className="bg-white flex items-center justify-between md:px-4 md:py-2 md:rounded-2xl md:w-[496px] md:h-[96px] mt-[13px]">
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
      <section className="flex justify-end md:mt-28 md:h-[368px] w-full">
        <div dir="rtl" className="flex flex-col justify-center md:gap-8 md:w-[523px]">
            <h1 className="md:text-[28px] md:font-semibold">گواهی پایان دوره</h1>
            <p className="md:text-base md:font-normal">این گواهی به کسانی افرادی اعطا میشود که دوره آموزشی مکین را با موفقیت گذرانده اند.این مدرک نشان دهنده ی کسب مهارت ها و دانش لازم در زمینه های مرتبط است و میتواند در بهبود فرصت های شغلی و حرفه ای موثر باشد</p>
        </div>
        <div>
            <Image className="border-white md:border-8 md:rounded-2xl md:ml-12" src='/img/certificate.png' alt="certificate" width={535} height={519}></Image>
        </div>
      </section>
      <section className="flex flex-col items-center md:mt-32 md:mb-10">
        <div className="md:text-[28px] md:font-semibold md:mb-12">سوالات متداول</div>  
        <div className="flex justify-betweenmd md:gap-6 md:h-[383px] w-full">
            <div className="flex flex-col items-center justify-center md:gap-8 bg-white md:rounded-2xl md:w-1/2">
               <Image src='/img/CoursesPageIcon.svg' alt="icon" width={64} height={64}></Image>
               <div className="flex flex-col items-center justify-center md:gap-4">
                  <h1 className="md:text-[28px] md:font-semibold">! به پاسخ سوالم نرسیدم</h1>
                  <p className="text-[#AEAEB2] md:text-base">.مشاوران مکین به سوالات شما چاسخ میدهند تا به درستی دوره خود را انتخاب کنید</p>
               </div>
               <button className="flex items-center justify-center md:text-lg md:font-medium text-[#F28C28] border-[#F28C28] md:border-[1px] md:py-2 md:px-4 md:rounded-[80px] md:w-[224.5px] md:h-[37px]">دریافت مشاوره</button>
            </div>
            <div dir="rtl" className="flex flex-col justify-between md:w-1/2">
                <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '72px',
               fontSize: '18px',
               fontWeight: '400',
               }}
                expandIcon={<Image src='/img/DownIcon.svg' alt="icon" width={24} height={24}></Image>} aria-controls="panel1-content" id="panel1-header">
          من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          در مکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.
        </AccordionDetails>
      </Accordion>
                <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '72px',
               fontSize: '18px',
               fontWeight: '400',
               }}
                expandIcon={<Image src='/img/DownIcon.svg' alt="icon" width={24} height={24}></Image>} aria-controls="panel1-content" id="panel1-header">
          معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          در مکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.
        </AccordionDetails>
      </Accordion>
                <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '72px',
               fontSize: '18px',
               fontWeight: '400',
               }}
                expandIcon={<Image src='/img/DownIcon.svg' alt="icon" width={24} height={24}></Image>} aria-controls="panel1-content" id="panel1-header">
          توی این ۶ ماه چیکار می کنیم و چی یاد می گیریم؟
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          در مکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.
        </AccordionDetails>
      </Accordion>
                <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '72px',
               fontSize: '18px',
               fontWeight: '400',
               }}
                expandIcon={<Image src='/img/DownIcon.svg' alt="icon" width={24} height={24}></Image>} aria-controls="panel1-content" id="panel1-header">
          معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          در مکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Uiux;

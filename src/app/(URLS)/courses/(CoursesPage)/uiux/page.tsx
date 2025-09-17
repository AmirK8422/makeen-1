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
            <div className="bg-white flex flex-col-reverse md:flex-row items-center justify-between px-4 py-2 md:rounded-2xl rounded-lg md:w-[496px] w-[358px] md:h-[96px] h-[126px] mt-[13px]">
                <div className="flex mb-1 md:mb-[-4px]">
                    <div className="flex flex-col items-center justify-center mr-8">
                         <h1 className="md:text-xl text-base text-[#F28C28] md:font-medium font-semibold md:mb-1 h-[27px]">12</h1>
                         <hr className="text-[#D1D1D6] w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">ثانیه</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center mr-8">
                         <h1 className="md:text-xl text-base md:font-medium font-semibold md:mb-1 h-[27px]">8</h1>
                         <hr className="text-[#D1D1D6] w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">دقیقه</h1>
                    </div>
                   <div className="flex flex-col items-center justify-center mr-8">
                         <h1 className="md:text-xl text-base md:font-medium font-semibold md:mb-1 h-[27px]">16</h1>
                         <hr className="text-[#D1D1D6] w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">ساعت</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                         <h1 className="md:text-xl text-base md:font-medium font-semibold md:mb-1 h-[27px]">5</h1>
                         <hr className="text-[#D1D1D6] w-9"></hr>
                         <h1 className="text-[#8E8E93] md:text-sm text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">روز</h1>
                    </div>
                </div>
                <div className="text-[#F28C28] md:text-[22px] text-lg font-medium">
                    مهلت ثبت نام
                </div>
            </div>
            <div className="mt-[13px] md:mt[-13px] ">
                <button className="bg-[#36A8D9] text-white text-[18px] font-medium md:w-[496px] w-[358px] h-[49px]  md:rounded-[80px] rounded-[30px]">ثبت نام</button>
            </div>
        </div>
      </section>
      <section className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-3 md:gap-0 md:flex md:justify-between md:mt-8 md:mb-24 mt-[13px]">
        <div className="flex justify-end items-center bg-white md:h-[82px] h-[78px] md:w-[302.25px] w-[171px] rounded-2xl md:py-2 py-2 md:px-4 px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4 mr-2">
                <h1 className="md:text-lg text-base font-medium mb-2">نوع برگزاری دوره</h1>
                <p className="text-[#AEAEB2] text-base font-normal">حضوری</p>
            </div>
            <Image className="w-[24px] h-[24px] md:h-[32px] md:w-[32px]" src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] h-[78px] md:w-[302.25px] w-[171px] rounded-2xl md:py-2 py-2 md:px-4 px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4 mr-2">
                <h1 className="md:text-lg text-base font-medium mb-2">روش پرداخت</h1>
                <p className="text-[#AEAEB2] text-base font-normal">قسطی</p>
            </div>
            <Image className="w-[24px] h-[24px] md:h-[32px] md:w-[32px]" src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] h-[78px] md:w-[302.25px] w-[171px] rounded-2xl md:py-2 py-2 md:px-4 px-4 md:mr-5">
            <div dir="rtl" className="md:mr-4 mr-2">
                <h1 className="md:text-lg text-base font-medium mb-2">مدت زمان دوره</h1>
                <p className="text-[#AEAEB2] text-base font-normal">1400 ساعت</p>
            </div>
            <Image className="w-[24px] h-[24px] md:h-[32px] md:w-[32px]" src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
        <div className="flex justify-end items-center bg-white md:h-[82px] h-[78px] md:w-[302.25px] w-[171px] rounded-2xl md:py-2 py-2 md:px-4 px-3 md:mr-5">
            <div dir="rtl" className="md:mr-4 mr-2">
                <h1 className="md:text-lg text-base font-medium mb-2">گواهی پایان دوره</h1>
                <p className="text-[#AEAEB2] text-base font-normal">دارد</p>
            </div>
            <Image className="w-[24px] h-[24px] md:h-[32px] md:w-[32px]" src='/img/TeacherIcon.svg' width={32} height={32} alt="icon"></Image>
        </div>
      </section>
      <section className="flex flex-col items-center mt-7">
        <h1 className="md:text-[28px] text-[20px] font-semibold md:mb-16 mb-8">روند اجرای دوره</h1>
        <div className="flex flex-col-reverse md:flex-row md:w-full justify-between gap-y-[70px] z-20">
            <div className="flex flex-row-reverse md:flex-col items-center md:justify-between text-center md:w-[226px]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] h-[77px] border-[0.25px]  md:w-[97px] w-[77px] text-[28px] font-semibold rounded-2xl">4</div>
                <div className="w-[265px] mr-5">
                    <h1 className="md:text-lg text-base font-semibold md:mt-5 mb-3 text-right md:text-center">نوشتن رزومه و ورود به بازار کار</h1>
                    <p className="text-sm font-normal text-right md:text-center">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
                </div>
            </div>
            <div className="flex flex-row-reverse md:flex-col items-center md:justify-between text-center md:w-[226px]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] h-[77px] border-[0.25px]  md:w-[97px] w-[77px] text-[28px] font-semibold rounded-2xl">3</div>
                <div className="w-[265px] mr-5">
                    <h1 className="md:text-lg text-base font-semibold md:mt-5 mb-3 text-right md:text-center">شروع پروژه همراه با تیم</h1>
                    <p className="text-sm font-normal text-right md:text-center">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
                </div>
            </div>
            <div className="flex flex-row-reverse md:flex-col items-center md:justify-between text-center md:w-[226px]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] h-[77px] border-[0.25px]  md:w-[97px] w-[77px] text-[28px] font-semibold rounded-2xl">2</div>
                <div className="w-[265px] mr-5">
                    <h1 className="md:text-lg text-base font-semibold md:mt-5 mb-3 text-right md:text-center">کارگاه های آموزشی</h1>
                    <p className="text-sm font-normal text-right md:text-center">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
                </div>
            </div>
             <div className="flex flex-row-reverse md:flex-col items-center md:justify-between text-center md:w-[226px]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white md:h-[97px] h-[77px] border-[0.25px]  md:w-[97px] w-[77px] text-[28px] font-semibold rounded-2xl">1</div>
                <div className="w-[265px] mr-5">
                    <h1 className="md:text-lg text-base font-semibold md:mt-5 mb-3 text-right md:text-center">مصاحبه و تعیین سطح</h1>
                    <p className="text-sm font-normal text-right md:text-center">یک فرانت اند دولوپر که همیشه در طول سال های تحصیلش جای خالی (( تجربه</p>
                </div>
            </div>
        </div>
        <div className=" border-[#8E8E93] md:w-[900px] h-[500px] md:h-0 border-1 border-dashed ml-[290px] md:ml-0 mt-[-500px] md:mt-[-150px] md:mb-[150px]"></div>
      </section>
      <section className="flex flex-col-reverse md:flex-row md:justify-end md:mt-28 md:h-[368px] w-full mt-12">
        <div dir="rtl" className="flex flex-col justify-center gap-5 md:gap-8 md:w-[523px] mt-7 md:mt-0">
            <h1 className="md:text-[28px] text-2xl font-semibold">گواهی پایان دوره</h1>
            <p className="md:text-base text-sm font-normal">این گواهی به کسانی افرادی اعطا میشود که دوره آموزشی مکین را با موفقیت گذرانده اند.این مدرک نشان دهنده ی کسب مهارت ها و دانش لازم در زمینه های مرتبط است و میتواند در بهبود فرصت های شغلی و حرفه ای موثر باشد</p>
        </div>
        <div>
            <Image className="border-white md:border-8 border-4 rounded-2xl md:ml-12 h-[270px] md:h-[358px] w-full" src='/img/certificate.png' alt="certificate" width={535} height={519}></Image>
        </div>
      </section>
      <section className="flex flex-col items-center md:mt-32 mt-12 mb-13 md:mb-20">
        <div className="md:text-[28px] text-xl font-semibold md:mb-12 mb-9">سوالات متداول</div>  
        <div className="flex flex-col-reverse md:flex-row justify-betweenmd md:gap-6 gap-7 md:h-[383px] w-full">
            <div className="flex flex-col items-center justify-center gap-8 bg-white rounded-2xl md:w-1/2 h-[272px] md:h-auto p-[20.5px]">
               <Image className="w-[56px] h-[56px] md:h-[64px] md:w-[64px]" src='/img/CoursesPageIcon.svg' alt="icon" width={64} height={64}></Image>
               <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="md:text-[28px] text-xl font-semibold">! به پاسخ سوالم نرسیدم</h1>
                  <p className="text-[#AEAEB2] text-center md:text-base text-sm font-medium">.مشاوران مکین به سوالات شما چاسخ میدهند تا به درستی دوره خود را انتخاب کنید</p>
               </div>
               <button className="flex items-center justify-center text-lg font-medium text-[#F28C28] border-[#F28C28]  border-[1px] py-2 px-4 rounded-[80px] w-[224.5px] h-[37px]">دریافت مشاوره</button>
            </div>
            <div dir="rtl" className="flex flex-col justify-between md:w-1/2 gap-4 md:gap-0">
                <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '72px',
               fontWeight: '400',
               fontSize:{
                xs:'16px',
                md: '18px',
               }
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
               fontWeight: '400',
               fontSize:{
                xs:'16px',
                md: '18px',
               }
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
               fontWeight: '400',
               fontSize:{
                xs:'16px',
                md: '18px',
               }
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
               fontWeight: '400',
               fontSize:{
                xs:'16px',
                md: '18px',
               }
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

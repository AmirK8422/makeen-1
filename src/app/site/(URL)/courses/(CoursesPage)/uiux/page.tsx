import Image from "next/image";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Dialog from '@mui/material/Dialog';
import ConsultationForm from '../ConsultationForm/page'

function Uiux() {

  const Timer = [
    {
      number: '8',
      text: 'دقیقه',
    },
    {
      number: '16',
      text: 'ساعت',
    },
    {
      number: '5',
      text: 'روز',
    },
  ]

  const InformationCard = [
    {
      title: 'نوع برگزاری دوره' ,
      text: 'حضوری',
      iconUrl: '/img/TeacherIcon.svg',
    },
    {
      title: 'روش پرداخت' ,
      text: 'قسطی',
      iconUrl: '/img/TeacherIcon.svg',
    },
    {
      title: 'مدت زمان دوره' ,
      text: '۱۴۰۰ ساعت',
      iconUrl: '/img/TeacherIcon.svg',
    },
    {
      title: 'گواهی پایان دوره' ,
      text: 'دارد',
      iconUrl: '/img/TeacherIcon.svg',
    },
  ]

  const stage =[
    {
      title: 'نوشتن رزومه و ورود به بازار کار',
      text: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه ',
      number: '1'
    },
    {
      title: 'شروع پروژه همراه با تیم',
      text: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه  ',
      number: '2'
    },
    {
      title: 'کارگاه های آموزشی',
      text: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه  ',
      number: '3'
    },
    {
      title: 'مصاحبه و تعیین سطح',
      text: 'یک فرانت اند دولوپر که همیشه در طول سال‌های تحصیلش جای خالی «تجربه  ',
      number: '4'
    },
  ]


  const accordion = [
    {
     title: 'من هیچی بلد نیستم! منم میتونم توی دوره های مکین شرکت کنم؟',
     text: 'درمکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.', 
    },
    {
     title: 'معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟',
     text: 'درمکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.', 
    },
    {
     title: 'توی این ۶ ماه چیکار می کنیم و چی یاد می گیریم؟',
     text: 'درمکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.', 
    },
    {
     title: 'معیارتون برای برگزاری دوره ها و انتخاب عنوان کلاسا چیه؟',
     text: 'درمکین شما میتوانید از صفر شروع کنید و همه آموزش های لازم را ببینید.', 
    },
  ]

  return (
    <div className="mx-4 md:mx-20 md:mt-9">
      <section className="flex flex-col md:flex-row items-center justify-between mt-[13px]">
        <div className="flex justify-center items-center md:w-[59.45%] w-[100%] md:h-[100%] h-auto md:rounded-2xl rounded-lg md:p-4 p-2 gap-2  bg-white">
          <Image className="md:rounded-lg rounded-sm w-[100%] md:h-[410.06px] h-auto" src="/img/CoursesPagePhoto.jpg" width={729} height={410.06} alt="photo"></Image>
        </div>
        <div className="flex flex-col justify-between md:w-[38.75%] md:h-[433px]  md:ml-6 mt-[13px] md:mt-[-13px]">
            <div dir="rtl" className="flex flex-col bg-white md:rounded-2xl rounded-lg md:h-[183px] h-[161px] w-[100%] p-4">
                <div className="flex flex-row-reverse justify-between items-center md:mb-[30px] mb-[28px]"> 
                   <button className='text-[#27AE60] bg-[rgba(54,236,60,0.1)] lg:text-base md:text-[12px]  font-medium px-2 pt-0.5 pb-1 p-1 rounded-lg w-[108px] h-[33px]'>درحال ثبت نام</button>
                   <h1 className="lg:text-[32px] md:text-[18px] text-2xl font-semibold">دوره UI/UX</h1>
                </div>
                <p className="text-[rgba(142,142,147,1)] lg:text-base md:text-[13px] text-sm font-normal">اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده</p>
            </div>
            <div className="bg-white flex flex-col-reverse md:flex-row items-center justify-between px-4 py-2 md:rounded-2xl rounded-lg w-[100%] md:h-[96px] h-[126px] mt-[13px]">
                <div className="flex mb-1 md:mb-[-4px]">
                    <div className="flex flex-col items-center justify-center md:mr-5  lg:mr-8">
                         <h1 className="lg:text-xl md:text-lg text-base text-[#F28C28] md:font-medium font-semibold md:mb-1 h-[27px]">12</h1>
                         <hr className="text-[#D1D1D6] w-9 lg:w-9 md:w-6"></hr>
                         <h1 className="text-[#8E8E93] lg:text-sm md:text-[10px] text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">ثانیه</h1>
                    </div>
                    {Timer.map((item) => (
                      <div className="flex flex-col items-center justify-center md:mr-5 lg:mr-8">
                         <h1 className="lg:text-xl md:text-lg text-base md:font-medium font-semibold md:mb-1 h-[27px]">{item.number}</h1>
                         <hr className="text-[#D1D1D6] w-9 lg:w-9 md:w-6"></hr>
                         <h1 className="text-[#8E8E93] lg:text-sm md:text-[10px] text-[12px] md:font-medium font-normal md:mt-1 h-[20px]">{item.text}</h1>
                    </div>
                    ))} 
                </div>
                <div className="text-[#F28C28] xl:text-[22px] lg:text-[17px] md:text-[10px] text-lg font-medium">
                    مهلت ثبت نام
                </div>
            </div>
            <div className="mt-[13px] md:mt[-13px] ">
                <button className="bg-[#36A8D9] text-white text-[18px] font-medium w-[100%] h-[49px]  md:rounded-[80px] rounded-[30px]">ثبت نام</button>
            </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-x-4 gap-y-3 md:gap-0 md:flex md:justify-between md:mt-8 md:mb-24 mt-[13px]">
        {InformationCard.map((item) => (
          <div className="flex justify-end items-center bg-white md:h-[82px] h-[78px] md:w-[23.59%] w-[100%] rounded-2xl md:py-2 py-2 md:px-4 px-4">
            <div dir="rtl" className="md:mr-4 mr-2">
                <h1 className="lg:text-lg md:text-[12px] sm:text-base text-[13px] font-medium mb-2">{item.title}</h1>
                <p className="text-[#AEAEB2] sm:text-base text-[12px] md:text-[12px] lg:text-base font-normal">{item.text}</p>
            </div>
            <Image className="w-[24px] h-[24px] md:h-[32px] md:w-[32px]" src={item.iconUrl} width={32} height={32} alt="icon"></Image>
        </div>
        ))}
        
      </section>

      <section className="flex flex-col items-center mt-7">
        <h1 className="md:text-[28px] text-[20px] font-semibold md:mb-16 mb-8">روند اجرای دوره</h1>
        <div className="flex md:flex-col md:w-full">
        <div className="flex flex-col-reverse md:flex-row w-[99.9%] md:w-full justify-between gap-y-[70px] z-20">
          {stage.map((item) => (
            <div className="flex flex-row-reverse md:flex-col items-center text-center md:w-[25%] lg:w-[25%]">
                <div className="flex justify-center items-center border-[rgba(199,199,204,1)] bg-white lg:h-[97px] md:[77px] h-[77px] border-[0.25px]  lg:w-[97px] md:w-[77px] w-[77px] text-[28px] font-semibold rounded-2xl">{item.number}</div>
                <div className="md:flex md:flex-col md:items-center md:justify-center w-[74.02%] lg:w-[265px] md:w-[200px] mr-5">
                    <h1 className="lg:text-lg md:text-[14px] text-base font-semibold md:mt-5 mb-3 text-right md:text-center md:w-[150px] lg:w-auto">{item.title}</h1>
                    <p className="lg:text-sm text-[12px] font-normal text-right md:text-center md:w-[150px] lg:w-auto">{item.text}</p>
                </div>
            </div>
        ))}
        </div>
        <div className=" border-[#8E8E93]  md:w-[80%] h-[500px] mt-7 md:h-0 border-1 border-dashed md:ml-[70px] lg:ml-[100px] xl:ml-[130px] md:mt-[-165px] lg:mt-[-150px] md:mb-[150px] ml-[-35px]"></div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row md:justify-end md:mt-28 md:h-[368px] w-full mt-12">
        <div dir="rtl" className="flex flex-col justify-center gap-5 md:gap-8 md:w-[523px] mt-7 md:mt-0 md:mr-5 lg:mr-10">
            <h1 className="md:text-[28px] text-2xl font-semibold">گواهی پایان دوره</h1>
            <p className="md:text-base text-sm font-normal">این گواهی به کسانی افرادی اعطا میشود که دوره آموزشی مکین را با موفقیت گذرانده اند.این مدرک نشان دهنده ی کسب مهارت ها و دانش لازم در زمینه های مرتبط است و میتواند در بهبود فرصت های شغلی و حرفه ای موثر باشد</p>
        </div>
        <div>
            <Image className="border-white md:border-8 border-4 rounded-2xl h-auto md:h-[358px] w-full" src='/img/certificate.png' alt="certificate" width={535} height={519}></Image>
        </div>
      </section>

      <section className="flex flex-col items-center md:mt-32 mt-12 mb-13 md:mb-20">
        <div className="md:text-[28px] text-xl font-semibold md:mb-12 mb-9">سوالات متداول</div>  
        <div className="flex flex-col-reverse md:flex-row justify-betweenmd md:gap-6 gap-7 md:h-[383px] w-full">
            <div className="flex flex-col items-center justify-center gap-8 bg-white rounded-2xl md:w-1/2 h-[272px] md:h-auto p-[20.5px]">
               <Image className="w-[56px] h-[56px] md:h-[64px] md:w-[64px]" src='/img/CoursesPageIcon.svg' alt="icon" width={64} height={64}></Image>
               <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="lg:text-[28px] md:text-[20px] text-xl font-semibold">! به پاسخ سوالم نرسیدم</h1>
                  <p className="text-[#AEAEB2] text-center md:text-base text-sm font-medium">.مشاوران مکین به سوالات شما چاسخ میدهند تا به درستی دوره خود را انتخاب کنید</p>
               </div>
               <ConsultationForm />
            </div>
            <div dir="rtl" className="flex flex-col justify-between md:w-1/2 gap-4 md:gap-0">
            {accordion.map((item) => (
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
          {item.title}
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          {item.text}
        </AccordionDetails>
      </Accordion>
            ))}
            </div>
        </div>
      </section>

    </div>
  );
}

export default Uiux;

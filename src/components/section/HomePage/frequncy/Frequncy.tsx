"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  
} from "@mui/material";
import Image from "next/image";
import React from "react";

type AccordionItem = {
  title: string;
  text: string;
};

const faqItems: AccordionItem[] = [
  {
    title: "من هیچی بلد نیستم! منم میتونم توی دوره‌های مکین شرکت کنم؟",
    text: "در مکین شما می‌توانید از صفر شروع کنید و همه آموزش‌های لازم را ببینید.",
  },
  {
    title: "معیارتون برای برگزاری دوره‌ها و انتخاب عنوان کلاس‌ها چیه؟",
    text: "ما بر اساس نیاز بازار کار، سطح مخاطب و تجربه آموزشی، دوره‌ها رو طراحی می‌کنیم.",
  },
  {
    title: "توی این ۶ ماه چیکار می‌کنیم و چی یاد می‌گیریم؟",
    text: "در طول دوره، مهارت‌های پایه تا پیشرفته رو یاد می‌گیرید و پروژه‌های واقعی انجام می‌دید.",
  },
  {
    title: "آیا بعد از دوره امکان استخدام یا معرفی به شرکت‌ها وجود داره؟",
    text: "بله، مکین با شرکت‌های مختلف همکاری داره و شما رو برای ورود به بازار کار آماده می‌کنه.",
  },
  {
    title: "آیا کلاس‌ها حضوری هستن یا آنلاین؟",
    text: "بیشتر کلاس‌ها به صورت آنلاین برگزار می‌شن ولی بعضی دوره‌ها حضوری هم دارن.",
  },
  {
    title: "آیا نیاز به لپ‌تاپ یا سیستم خاصی دارم؟",
    text: "برای شرکت در دوره‌ها داشتن لپ‌تاپ با مشخصات متوسط کافی هست.",
  },
];

function AccordionCard({
  item,
  index,
}: {
  item: AccordionItem;
  index: number;
}) {
  return (
    <Accordion
      sx={{
        borderRadius: "16px !important",
        boxShadow: "0 0 7px rgba(0,0,0,0.15)",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={
          <Image
            src="/img/DownIcon.svg"
            alt="آیکون باز و بسته"
            width={24}
            height={24}
          />
        }
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          height: "72px",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "18px" },
        }}
      >
        {item.title}
      </AccordionSummary>
      <AccordionDetails sx={{ fontSize: "14px", fontWeight: 400 }}>
        {item.text}
      </AccordionDetails>
    </Accordion>
  );
}

function FAQSection() {
  return (
<>
<div className="mt-24">
    <Container >
      <h3 className="text-center font-semibold text-3xl mb-7">سوالات متداول</h3>
      <div className="flex flex-col gap-3  md:flex-row md:gap-4 " dir="rtl">
        <div className="flex-1 flex flex-col gap-4">
          {faqItems
            .filter((_, i) => i % 2 === 0)
            .map((item, index) => (
              <AccordionCard item={item} key={`right-${index}`} index={index} />
            ))}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {faqItems
            .filter((_, i) => i % 2 === 1)
            .map((item, index) => (
              <AccordionCard item={item} key={`left-${index}`} index={index} />
            ))}
        </div>
      </div>
    </Container>
</div>


</>
    
  );
}

export default FAQSection;

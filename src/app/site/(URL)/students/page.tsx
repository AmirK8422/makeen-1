import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import WaveSurfer from "wavesurfer.js";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

function Students() {

  const cards = [
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
    {
      fullName: 'بهراد آب‌نیکی',
      image: '/img/behradAbNiki.svg',
      job: 'product designer',
      JobIcon: '/img/icons/Tapsi.svg',
      CourseNumber: 'مکینی_دوره_9#',
    },
  ]





  return (
    <div className='mx-4 mt-[24px] md:mx-20 md:mt-10'>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full md:gap-[1.875%] md:gap-y-[20px] gap-y-4'>
        {cards.map((item,index) => (
          <div key={index}>
          <div className='hidden bg-white md:flex flex-col md:rounded-2xl md:h-[140px] shadow-[0_0_7px_rgba(0,0,0,0.15)] p-[6%] gap-4'>
            <div className='flex justify-end gap-3'>
              <div className='flex flex-col items-end gap-2'>
                <h1 className='text-[rgba(17,17,17,1)] md:text-base font-medium'>{item.fullName}</h1>
                <div className='flex gap-1'>
                  <h3 className='text-[#AEAEB2] font-normal md:text-[14px]'>{item.job}</h3>
                  <Image src={item.JobIcon} height={20} width={20} alt='icon'></Image>
                </div>
              </div>
              <Image src={item.image} height={60} width={60} alt='image'></Image>
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex text-[#8E8E93] md:text-[14px] font-normal gap-1'>
                <Image src='/img/icons/ArrowLeft.svg' width={24} height={24} alt='icon'></Image>
                <h1>مشاهده بیشتر</h1>
              </div>
              <h3 className='text-[#AEAEB2] md:text-[14px] font-normal'>{item.CourseNumber}</h3>
            </div>
            </div>

            <div className='w-full'>
            <Accordion sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 0 7px rgba(0,0,0,0.15)',
                    width: '100%',
                    '@media (min-width:768px)': {
                      display: 'none',
                    },
                    "&:before": {
                        display: 'none',
                    },
                }}>
        <AccordionSummary sx={{
               height: '64px',
               display: 'flex',
               flexDirection: 'row-reverse',
               justifyContent: 'space-between',
               position: 'relative',
               }}
                expandIcon={<Image src='/img/icons/ArrowDown.svg' alt="icon" width={24} height={24}></Image>} aria-controls="panel1-content" id="panel1-header">
          <div className='flex justify-self-end gap-3 absolute right-5 top-2'>
              <div className='flex flex-col items-end gap-2'>
                <h1 className='text-[rgba(17,17,17,1)] text-sm font-medium'>{item.fullName}</h1>
                <div className='flex gap-1'>
                  <h3 className='text-[#AEAEB2] font-normal text-[12px]'>{item.job}</h3>
                  <Image src={item.JobIcon} height={16} width={16} alt='icon'></Image>
                </div>
              </div>
              <Image src={item.image} height={40} width={40} alt='image'></Image>
            </div>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize: '14px', fontWeight: '400'}}>
          
        </AccordionDetails>
      </Accordion>
      </div>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students

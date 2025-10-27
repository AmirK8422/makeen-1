'use clinet'
import React, { useState } from 'react'
import { Editor } from 'primereact/editor';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Questions() {

  const title = [
    {
      id:0,
      title:'دوره ها',
    },
    {
      id:1,
      title:'تضمین استخدام',
    },
    {
      id:2,
      title:'شرایط پرداخت',
    },
    {
      id:3,
      title:'مدت زمان دوره',
    },
  ]

    const [text, setText] = useState('');
    const [value, setValue] = React.useState(0);
    
      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

  return (
    <div className='bg-white flex flex-row-reverse rounded-lg px-4 pt-12 pb-9 mx-4 justify-between'>
      <div className='w-[58.92%]'>
                <Tabs sx={{
        "& .MuiTab-root": {
          color: "#111111",
          fontFamily: "Kalameh",
        },
        "& .Mui-selected": {
          color: "#111111",
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "#F28C28",
        },
      }} value={value} onChange={handleChange} aria-label="basic tabs example">
         {title.map((items) => (
                <Tab sx={{fontSize: '20px',fontWeight: '400',}} label={items.title} {...a11yProps(items.id)} />
            ))}
        </Tabs>
        <CustomTabPanel value={value} index={0}>
        lk
      </CustomTabPanel>
      </div>
      <div className='w-[35.62%] flex flex-col'>
        <div className='flex flex-row-reverse gap-4 justify-between mb-10'>
          <button className='bg-[#F28C28] rounded-lg text-white py-3 text-lg font-medium w-[178px] h-[53px]'>افزودن دسته بندی</button>
          <input className='w-[225px] h-[53px] text-lg font-medium shadow-[0_0_7px_rgba(0,0,0,0.15)] rounded-lg py-3 pr-2 pl-4' placeholder='عنوان دسته بندی  را وارد کنید'></input>
        </div>
        <label className='text-[16px] font-normal mb-1'>سوال</label>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '135px' }} />
        <label className='mt-4 text-[16px] font-normal mb-1'>متن سوال</label>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '135px' }} />
        <div className='flex justify-end mt-6'>
          <button className='bg-[#F28C28] rounded-lg text-white py-3 text-lg font-medium w-[135px] h-[53px]'>ثبت تغئیرات</button>
        </div>
      </div>
    </div>
  )
}

export default Questions

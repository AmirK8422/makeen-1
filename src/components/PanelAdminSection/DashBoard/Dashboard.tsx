import React from 'react'
import DataCard from './DataCard/DataCard'
import Chart from './Chart/ChartShow'
import Example from './Chart/ChartBar'

function Dashboard() {
  return (
    <div>
      <DataCard />
          <Chart title='نمودار ثبت نام' bgStyle='bg-[#27AE601A]' chartColor='#27AE60'/>
          <div className='mt-8 flex items-center justify-between  gap-6  ' >
              <div className=''>
                  
              <Example/>
              </div>
              <div className='flex-1'>
                  
              <Chart title='نمودار بازدید از سایت' bgStyle='bg-[#2F80ED1A]' chartColor='#2F80ED' />
              </div>
              
          </div>
    </div>
  )
}

export default Dashboard

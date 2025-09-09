import React from 'react'
import Cards from './cards'
function page() {
  return (
    <div className='ml-20 mr-20 flex justify-between mt-7 gap-y-5'>
      <Cards  title={'React دوره'} text='اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده' image={'/img/ReactLogo.svg'} status={'register'}/>
      <Cards  title={'React دوره'} text='اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده' image={'/img/ReactLogo.svg'} status={'full'}/>
    </div>
  )
}

export default page

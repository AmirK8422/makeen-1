import React from 'react'
import Cards from './cards'
import Link from 'next/link'

type Tcards = {
  title : string,
      text : string,
      image : string,
      status : 'register' | 'soon' | 'full' ,
      urlAddres : string,
}


export  const CardsInformation:Tcards[] = [
  {
    title : 'React دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/ReactLogo.svg',
    status : 'register',
    urlAddres : '/courses/React',
  },
  {
    title : 'UI/UX دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/UiUxLogo.svg',
    status : 'full',
    urlAddres : '/courses/uiux',
  },
  {
    title : 'Phyton دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/phytonLogo.svg',
    status : 'register',
    urlAddres : '/courses/React',
  },
  {
    title : 'Laravel دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/ReactLogo.svg',
    status : 'full',
    urlAddres : '/courses/React',
  },
  {
    title : 'php دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/ReactLogo.svg',
    status : 'full',
    urlAddres : '/courses/React',
  },
  {
    title : '.Net دوره',
    text : 'اگر دوست داری برنامه نویس بشی و ذوق هنری هم داری این دوره رو از دست نده',
    image : '/img/DotNetLogo.svg',
    status : 'soon',
    urlAddres : '/courses/React',
  },
]
function page() {
  return (
    <div className='md:ml-20 md:mr-20 ml-4 mr-4 grid grid-cols-1 md:grid-cols-2  mt-7 gap-y-8 gap-x-8'>
      {CardsInformation.map((item,index) => (
        <Link key={index} href={item.urlAddres}>
           <Cards key={index} title={item.title} text={item.text} image={item.image} status={item.status}  />
        </Link>
      ))}
    </div>
  )
}

export default page

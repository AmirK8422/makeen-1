import React, { ReactNode } from 'react'


interface buttontype{
    children: string,
    onClick?:()=>void
    
}
const EditButton = ({children,onClick}:buttontype) => {
  return (
    <div className=''>
      <button className='colorMakeen px-3 py-3 rounded-md cursor-pointer' onClick={onClick}>{children} </button>
    </div>
  )
}

export default EditButton

import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function ExelButton() {
  return (
     <div className=''>
              <button className='border w-52 rounded-md py-3 border-makeen flex items-center justify-center gap-3 cursor-pointer'>
                  اعمال دسته جمعی
                  <span><FaAngleDown /></span>
              </button>
    </div>
  )
}

export default ExelButton

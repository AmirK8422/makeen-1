import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function ExelButton() {
  return (
     <div className='flex flex-row-reverse '>
          <div className='mt-4'>
              <button className='border w-52 rounded-md py-3 border-makeen flex items-center justify-center gap-3 cursor-pointer'>
                  اعمال دسته جمعی
                  <span><FaAngleDown /></span>
              </button>
          </div>
    </div>
  )
}

export default ExelButton

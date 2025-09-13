import React from 'react'

function FooterInput() {
  return (
    <footer className='text-center mt-6'>
        <h3 className="text-3xl font-medium">با مکین همراه شو</h3>
                <p className="my-2 font-normal text-[18px]">
                  برای اطلاع از اخبار و برگزاری دوره های مکین <br /> !در خبر نامه ما عضو
                  شوید
                </p>
                <div className="flex items-center justify-center mb-9">
                  <button className="bg-[#36A8D9]   text-white  -mr-2 z-20 p-2 rounded w-24">
                    عضویت 
                  </button>
                  <input
                    type="text"
                    placeholder="شماره تماس خود را وارد کنید"
                    className="w-3xs bg-white rounded shadow text-right p-2 focus:outline-none text-gray-500"
                  />
                </div>
    </footer>
  )
}

export default FooterInput

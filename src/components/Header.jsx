import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <>
    <div className='flex w-full overflow-hidden fixed items-center justify-between px-20 py-24 z-10 h-20'>
      <img className='w-16' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_132,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
      <div className='flex items-center justify-center gap-x-3'>
        <button className='px-5 py-2 rounded-full bg-black border-4 hover:bg-gray-500 '>Hire Me</button>
        <i className="ri-more-2-fill text-3xl"></i>
      </div>
    </div>
    </>
  )
}

export default Header
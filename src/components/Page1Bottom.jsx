import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const Page1Bottom = () => {
  useGSAP(function(){
    gsap.to("#banner img",{
      rotate:360,
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })
  return (
    <>
    <div className='w-full pb-10 pr-28  absolute bottom-0 pl-12 flex items-end justify-between'>
      <div>
        <h1 className='font-[anzo2]'>BRAND DESIGN | WEBSITE DESIGN
        </h1>
        <h1 className='font-[anzo3]'>BESPOKE FREELANCE</h1>
      </div>
      <div id='banner' className='flex flex-col gap-y-4'>
        <img className='w-16' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className='w-16' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Page1Bottom
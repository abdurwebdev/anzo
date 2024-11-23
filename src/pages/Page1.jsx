import React, { useRef } from 'react';
import Page1Bottom from '../components/Page1Bottom';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { useState } from 'react';

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)
  const mouseMoving = (e) => {
    setxVal((e.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/50)
    setyVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/20)
    
  };
  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:2,
      ease:"elastic.out(1,.2)"
    })
  },[xVal,yVal])
  return (
    <div
      id="mainDiv"
      onMouseMove={mouseMoving}
      className="w-full overflow-hidden h-screen bg-white px-5 py-4 relative"
    >
      <div
        className="w-full  rounded-[30px] h-full bg-black bg-cover"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2476,h_1136,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)`,
        }}
      ></div>
      <div
        id="tiltDiv"
        ref={tiltRef}
        className="mt-60 w-full absolute z-10 top-0 left-0 ml-16 overflow-hidden"
      >
        <h1 className="text-[5vw] leading-[4vw] font-[anzo1] text-white">
          I AM <span className="text-black">DARK MODE</span>&trade;
        </h1>
        <h1 className="text-[7vw] font-[anzo1] leading-[6vw]">DESIGNER</h1>
        <h1 className="text-[5vw] font-[anzo1] leading-[4vw]">TO HIRE</h1>
      </div>
      <Page1Bottom />
    </div>
  );
};

export default Page1;

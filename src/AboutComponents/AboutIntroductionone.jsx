import React from 'react'
import Button from '../components/Button'
// import drshaheer from '../assets/Aboutimages/drumer.webp'
import { firstpageabout } from '../Multiplearray/About.js';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';

const AboutIntroductionone = () => {
         const sectionRef = useRef();
      const aboutcontentone = useRef(); 
      const aboutcontenttwo = useRef();
      const navigate = useNavigate()
        useGSAP(() => {
        gsap.from(aboutcontentone.current, {
          opacity: 0.4,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
            y:30,
        });
          gsap.from(aboutcontenttwo.current, {
          opacity: 0.4,
          scale: 0.95,
          duration: 0.8,
          y:30,
          ease: "power3.out",
        });
      }, { scope: sectionRef });
  return (
    <div className='w-full flex justify-center  lg:px-0 ' ref={sectionRef}>
{
  firstpageabout.map((items , index)=>{
    return(
        <div className='w-[96%]  flex justify-between lg:flex-row flex-col gap-8' ref={aboutcontentone} key={index}>
<div className="w-full lg:w-[45%] pt-10 ">
<h1 className='text-2xl lg:text-4xl px-2 p-1 font-bold text-[var(--secondary)]'>
  {items?.headingone}
</h1>
<h1 className='text-2xl lg:text-4xl px-2 font-bold p-1 text-[var(--secondary)]'>
  {items?.headingtwo}
</h1>
<p className="pt-5 p-2 text-[var(--text)]">
{items?.paragraphone}
</p>
{/* <button className=''>Book Now</but/ton> */}
<Button text="Book Now" className="backgroundcol w-[95%] py-4 lg:w-[40%] mt-5 mx-2" onClick={()=>{navigate("/contact#contact-form")}}/>
</div>
<div className='w-full lg:w-[40%] flex justify-center items-center pt-8' ref={aboutcontenttwo}>
<div className="h-[300px] w-[300px] lg:w-[380px] lg:h-[380px] rounded-full border border-[#F8F3EF] overflow-hidden bg-[#F8F3EF] flex items-center justify-center">
  <img
    src={items?.image}
    alt="Doctor"
    className="w-full h-full object-cover object-top"
  />
</div>
</div>

</div>
    )
  })
}
    </div>
  )
}

export default AboutIntroductionone

import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {Secondpageabout} from "../Multiplearray/About.js"
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Aboutintroductiontwo = () => {

     const sectionRef = useRef();
  const aboutcontentone = useRef(); 
  const aboutcontenttwo = useRef();
    useGSAP(() => {
    gsap.from(aboutcontentone.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutcontentone.current,
        start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    });
      gsap.from(aboutcontenttwo.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutcontenttwo.current,
        start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 30%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });
  return (
    <>
{
  Secondpageabout.map((items ,index)=>{
    return(
       <div key={index} className='w-full lg:w-[96%] gap-8  mt-25 flex flex-col-reverse lg:flex-row  justify-between px-2 lg:px-0' ref={sectionRef}>
      <div className='w-full lg:w-[45%]  flex justify-center' key={index}>
<div className='w-[97%]  lg:w-[90%] lg:h-[70%]' ref={aboutcontentone}>
  <img src={items.image} alt="dr shaheer" className='w-full h-full rounded-xl object-cover' />
</div>
</div>
<div className='w-full lg:w-[50%]  pb-4' ref={aboutcontenttwo}>
<h2 className="text-2xl lg:text-4xl font-bold text-[var(--secondary)] pt-4 px-1">
  {items.headingone}
</h2>
<h2 className="text-2xl lg:text-4xl font-bold text-[var(--secondary)] px-1">
  {items.headingtwo}
</h2>
<p className="px-2 p-1 lg:p-2 text-[var(--text)] lg:pt-4">
  {items.paragraphone}
</p>

<p className="p-2 font-bold pt-3">
  {items.paragraphtwo}
</p>
</div>
 </div>
      
    )
  })
}
    </>
  )
}

export default Aboutintroductiontwo

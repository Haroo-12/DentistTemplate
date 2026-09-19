import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { FaLocationArrow } from "react-icons/fa";
import Aboutintroductionthree from '../AboutComponents/Aboutintroductionthree'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import {AboutBgBlue} from '../Multiplearray/About.js'
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutContents = () => {
   const sectionRef = useRef();
  const aboutcontentone = useRef(); 
  const aboutcontenttwo = useRef();
  const navigate = useNavigate()
    useGSAP(() => {
    gsap.from(aboutcontentone.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
        y:-50,
      scrollTrigger: {
        trigger: aboutcontentone.current,
        start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
        // end: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
      gsap.from(aboutcontenttwo.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      y:50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutcontenttwo.current,
        start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
        end: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });

  return (
    <section className='w-full flex  justify-center pt-20 flex-wrap'>
<Aboutintroductionthree />
      <div className='w-[97%]  lg:p-2 text-[var(--background)]  ' ref={sectionRef}>
{
  AboutBgBlue[0].map((items , index)=>{
    return(
      <div key={index} className='w-full rounded-2xl lg:px-8 pt-7  pb-5 backgroundcol  flex justify-between flex-col lg:flex-row '>
<div className='lg:w-[55%]  w-full lg:px-0 px-4' ref={aboutcontentone}>
      <Heading text={items.headingone} className=" leading-7 text-xl lg:text-4xl lg:leading-tight" />
<Heading text={items.headingtwo} className=" leading-7 text-xl lg:text-4xl lg:leading-tight" />
<Heading text={items.headingthree} className="leading-7 text-xl lg:text-4xl lg:leading-tight" />
  <p className="pt-7 lg:pt-7">
{
  items.paragraph
}
</p>
<div className='w-full pt-14  lg:pt-10 flex gap-6 lg:flex-row flex-col'>


{

    AboutBgBlue[1].map((items , index)=>{
        return(
              <div key={index} className='lg:w-[34%] w-[100%]  lg:h-[100px] h-[150px]  flex  items-center px-3 py-2 shadow-2xl flex-col justify-center rounded-2xl'>
    <h1 className=' font-extrabold'>{items.stat}</h1>
     <p className='text-md'>{items.line1}</p>
     <p className='text-md pt-2'>{items.line2}</p>

 </div>
        )
    })
}

   

</div>
<div className='w-full justify-center flex  lg:justify-start'>
<button className='flex justify-center items-center cursor-pointer mt-7 gap-4 font-bold text-[var(--secondary)] px-8 py-6 rounded-full bg-white' onClick={()=>{navigate("/contact#contact-form")}}>Book Appointment <span className='font-bold text-xl'><FaLocationArrow/></span> </button>

</div>
</div>
<div className='flex justify-center items-center lg:pt-0 pt-12 mb-5' ref={aboutcontenttwo}>
<div className='w-[400px] h-[400px] rounded-full flex justify-center'>
<img src={items.image} alt=""   loading="lazy" className='h-[90%] w-[90%] lg:w-full lg:h-full  rounded-full bg-cover' />
</div>
</div>
</div>
    )
  })
}
    </div>
    </section>

  )
}

export default AboutContents

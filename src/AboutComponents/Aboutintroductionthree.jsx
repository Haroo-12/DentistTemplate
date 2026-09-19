import React from 'react'
// import React from 'react'
import aboutgirl from '../assets/images/aboutgirl.webp'
import Heading from '../components/Heading'
import { FaCheck, } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {Thirdpageabout} from '../Multiplearray/About.js'
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Aboutintroductionthree = () => {
const navigate = useNavigate()
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
  Thirdpageabout[0].map((items , index)=>{
    return(
         <div className='w-[96%] lg:w-[94%] flex lg:flex-row flex-col-reverse justify-between flex-wrap px-2 lg:px-0' ref={sectionRef} key={index}>

  <div className="w-full lg:w-[42%]   flex  items-center justify-center lg:justify-start " ref={aboutcontentone}>
    <div className='w-[95%] h-[80%] mt-4'>
    <img src={items.image} alt="drimage"   loading="lazy" className='w-full h-full rounded-2xl' />
    </div>
    
</div>
<div className='w-full lg:w-[50%]  lg:px-5' ref={aboutcontenttwo}>
     <div className="mt-5   inline-flex w-fit items-center gap-2 batchcolor border border-[var(--secondary)] rounded-full px-9 py-2 shadow-sm">
      <span className="text-[var(--secondary)]  text-sm font-bold">{items.headingone}</span>
    </div>
    <Heading text={items.headingtwo} className=" text-3xl lg:text-5xl  pt-5 leading-tight text-[var(--secondary)] "/>
 <div className="pt-4 font-medium text-[var(--text)]">
{items.paragraphone}
</div>
<div className="pt-4 font-medium text-[var(--text)]">
{items.paragraphtwo}
</div>
        <div className="w-full pt-8">
      {/* Checklist */}
      <ul className="flex flex-col gap-6">
        {Thirdpageabout[1].map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            <FaCheck className="text-[var(--secondary)] mt-1.5 flex-shrink-0" size={18} />
            <span className="text-[var(--text)] text-lg lg:text-normal">
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Button + WhatsApp */}
      <div className="flex items-center justify-between mt-5 lg:mx-4 mb-3 py-3 flex-wrap gap-4">
   <button className='font-bold  shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer py-5 px-8 backgroundcol text-[var(--background)] rounded-xl' onClick={()=>{navigate("/about")}}>Learn More about us</button>
        </div>
        </div>
    </div>      
    </div>
    )
  })
}

</>
  )

}

export default Aboutintroductionthree

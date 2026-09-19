import React from 'react'
import Review from '../Contents/Review'
import ReviewCards from '../ReviewComponents/ReviewCards'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Testomonials = () => {
        const sectionRef = useRef();   
        useGSAP(() => {
          gsap.from(".testomonialsmain", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          x:-50,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testomonialsmain",
            start: "top 70%",   // jab element ka top, viewport ke 80% pe pohanche
            end: "top 30%",
            toggleActions: "play none none reverse",
          }
        });
      }, { scope: sectionRef });
  return (
    <div ref={sectionRef}>
   
 <div className="text-center max-w-2xl mx-auto mb-4 lg:pt-14 pt-30">
      {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
        Book Appoitment
      </p> */}

      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--secondary)]" >
         What Our Patients Say
      </h2>

      <p className="mt-4 text-slate-600">
  Our patients trust us for compassionate care, expert treatment, and comfortable dental experiences. Their smiles and feedback reflect our commitment to excellence.
      </p>
    </div>
       <div className='testomonialsmain flex pt-6 justify-center items-center w-full lg:w-[80%]  gap-10 flex-col'>
   
{/* <div className=' px-4 lg:px-8'>
   <h1 className='text-2xl lg:text-5xl font-bold lg:px-3 p-1 text-[var(--secondary)]'>What Our Patients Say</h1>
     <p className='text-[var(--text)] lg:px-3 p-1 pt-4 '>
   Our patients trust us for compassionate care, expert treatment, and comfortable dental experiences. Their smiles and feedback reflect our commitment to excellence.
   </p>
  
</div> */}

</div>
<ReviewCards/>
     <div className='w-full flex justify-center items-center pt-12 py-3'>
<button className='px-10 py-5 rounded-full  backgroundcol '>
     <a href="https://share.google/WjozXALFLk2g7ypEH" className='font-bold text-center text-white  underline'>check more reviews on google</a>

</button>
     </div>
    </div>
  )
}

export default Testomonials

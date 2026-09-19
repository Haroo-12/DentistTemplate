import ReviewCards from '../ReviewComponents/ReviewCards'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Review = () => {
     const sectionRef = useRef();
    const reviewscontentone = useRef(); 
    const reviewscontenttwo = useRef();
useGSAP(() => {
  gsap.from([reviewscontentone.current, reviewscontenttwo.current], {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    x: -50,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 65%",
      toggleActions: "play none none reverse",
    }
  });
}, { scope: sectionRef });
  return (
    <div className='w-full flex justify-center items-center flex-col lg:pt-8 ' ref={sectionRef}>
   <div className='w-[95%] pt-35' ref={reviewscontentone}>
 
   {/* <div className="px-5">
  <h2 className="text-3xl lg:text-5xl font-bold pt-8 text-[var(--heading)]" ref={reviewscontenttwo}>
    What Our Patients Say
  </h2>

  <p className="mt-2 text-[var(--text)] text-lg">
    Real experiences from real patients who trusted us with their smiles.
  </p>
</div> */}

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-7">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
        Our Patient
      </p>

      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          What Our Patients Say
      </h2>

      <p className="mt-4 text-slate-600">
     Real experiences from real patients who trusted us with their smiles.
      </p>
    </div>
<ReviewCards/>
    </div>

    </div>
 
  )
}

export default Review

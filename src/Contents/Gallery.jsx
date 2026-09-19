import React from 'react'
import GalleryCard from '../GalleryComponents/GalleryCard'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Gallery = () => {
  const sectionRef = useRef();
  const gallerycontentone = useRef();

  useGSAP(() => {
    gsap.from(gallerycontentone.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      x: -50,
      scrollTrigger: {
        trigger: gallerycontentone.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: sectionRef });

  return (
    <div className='w-full flex justify-center flex-col pt-10 lg:pt-18' ref={sectionRef}>

      <div className='w-full lg:w-[95%]  mt-5 pt-10' ref={gallerycontentone}>

          <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
         Treatment result
      </p>

      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Smile Transformations
      </h2>

      <p className="mt-4 text-slate-600">
            See the life-changing results of our cosmetic, restorative, and implant treatments.
      </p>
    </div>
      </div>
      <GalleryCard/>
    </div>
  )
}

export default Gallery
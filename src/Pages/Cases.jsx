import React from 'react'
import GalleryCard from '../GalleryComponents/GalleryCard'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Cases = () => {
 const sectionRef = useRef();

         useGSAP(() => {
          gsap.from(".casemain", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          x:-50,
          stagger: 0.2,
          ease: "power2.out",
        });
      }, { scope: sectionRef });
  return (
    <div>
 <div className=" lg:pt-14 text-center max-w-2xl mx-auto mb-5 pt-30" ref={sectionRef} >
  

      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--secondary)]" >
        Patient Smile Transformations
      </h2>

      <p className="mt-4 text-slate-600">
Explore real before-and-after cases that showcase our expertise, advanced treatments, and commitment to creating healthy, confident smiles.

      </p>
    </div>
    <GalleryCard/>
    </div>
  )
}

export default Cases

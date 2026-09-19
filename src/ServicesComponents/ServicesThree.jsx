import React, { useRef } from 'react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import {ServicedoctorData} from '../Multiplearray/Services.js'
gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesThree = () => {
  const sectionRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
const navigate = useNavigate()
  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
  <div className='flex justify-center items-center' ref={sectionRef}>
<div className="mt-13 flex w-[97%] flex-col items-center justify-between gap-5 lg:flex-row">
  {ServicedoctorData.map((items, index) => (
    <React.Fragment key={index}>
      <div className="w-full lg:w-[50%]" ref={textRef}>
        <h1 className="p-1 pt-5 text-2xl font-bold text-[var(--secondary)] lg:text-4xl">
          {items.headingone}
        </h1>

        <h1 className="p-1 text-2xl font-bold text-[var(--secondary)] lg:text-4xl">
          {items.headingtwo}
        </h1>

        <p className="p-1 pt-5 text-[var(--text)]">
          {items.para}
        </p>

        <Button
          text={items.btn}
          className="backgroundcol w-[95%] lg:w-[40%] mt-5 mx-2 py-4"
          onClick={() => { navigate("/contact#contact-form") }}
        />
      </div>

      <div className="h-[300px] w-[300px] lg:w-[380px] lg:h-[380px] rounded-full border border-blue-500 overflow-hidden bg-blue-50 flex items-center justify-center">
        <img
          src={items.img}
          alt={items.alt}
          loading="lazy"
          className="w-full h-full object-contain object-top scale-[1.10] origin-top"
        />
      </div>
    </React.Fragment>
  ))}
</div>
  </div>
  )
}

export default ServicesThree
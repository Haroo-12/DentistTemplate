import React from 'react'
import { GiScalpel } from "react-icons/gi";
import { FaAward, FaUserDoctor } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import AboutIntroductionone from '../AboutComponents/AboutIntroductionone';
import Aboutintroductiontwo from '../AboutComponents/Aboutintroductiontwo';
import Aboutintroductionthree from '../AboutComponents/Aboutintroductionthree';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const features = [
  {
    id: 1,
    icon: GiScalpel,
    title: "Advanced Technology",
    description:
      "We use modern dental technology and advanced treatment methods to ensure accurate diagnosis, effective care, and a comfortable patient experience.",
  },
  {
    id: 2,
    icon: FaAward,
    title: "Trusted Patient Care",
    description:
      "Patient comfort, safety, and satisfaction are at the heart of everything we do, with personalized treatments designed for long-term oral health.",
  },
  {
    id: 3,
    icon: FaUserDoctor,
    title: "Experienced Dentist",
    description:
      "Led by Dr. Arqam Siddiqui, we provide professional dental care with precision, compassion, and a commitment to helping every patient smile.",
  },
];
const About = () => {
       const sectionRef = useRef();
      // const aboutcontentone = useRef(); 
      
        useGSAP(() => {
        const tl = gsap.timeline();
        gsap.from(".aboutone", {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
            x:-50,
          scrollTrigger: {
            trigger: ".aboutone",
            start: "top 65%",   // jab element ka top, viewport ke 80% pe pohanche
            // end: "top 50%",
            toggleActions: "play none none reverse",
          }
        });
      }, { scope: sectionRef });
  return (
    <div className='pt-30 lg:pt-0 w-full flex justify-center flex-col items-center' >
<AboutIntroductionone/>
<Aboutintroductiontwo/>
<Aboutintroductionthree/>
<div className='w-[97%] pt-15' ref={sectionRef}>
<h2 className='text-2xl lg:text-3xl px-4 font-bold text-[var(--secondary)] aboutone'>Dental care</h2>
<h1 className='text-3xl lg:text-4xl px-4 font-bold pt-2 aboutone'>Trusted Care for Healthier Smiles</h1>
<p className='px-4 py-3 text-[var(--text)] aboutone'>With years of trusted expertise, we deliver top-quality dental care focused. <br /> on comfort, precision, and long-term oral health for every patient.</p>
  <div className="pt-10 w-full flex flex-wrap gap-6 justify-center" >
  {features.map((item) => (
    <div
      key={item.id}
      className="
        w-full
        sm:w-[90%]
        md:w-[48%]
        lg:w-[31%]
        bg-white
        pb-6
        shadow-xl
        rounded-xl
        border border-gray-200
      "
    >
      <div className="w-full flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-[var(--secondary)]">
          {item.title}
        </h1>

        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
          <item.icon
            size={24}
            className="text-[var(--secondary)]"
          />
        </div>
      </div>

      <p className="text-[var(--text)] px-4">
        {item.description}
      </p>

      <div className="pt-4 px-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="text-yellow-400"
            size={18}
          />
        ))}
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  )
}

export default About

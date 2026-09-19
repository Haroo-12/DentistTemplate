import React from 'react'
import ServicesCard from '../ServicesComponents/ServicesCard'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const ServicesContents = () => {
  const sectionRef = useRef();
  const servicescontenttwo = useRef();

  useGSAP(() => {
    gsap.from(servicescontenttwo.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      y: 40,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <div
      className="w-full flex justify-center pt-35"
      ref={sectionRef}
    >
      <div className="w-[95%]">

        <div
          className="text-center max-w-2xl mx-auto mb-12"
          ref={servicescontenttwo}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
            What We Offer
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Comprehensive Dental Services
          </h2>

          <p className="mt-4 text-slate-600">
            From prevention to restoration, we provide a full spectrum of
            dental treatments tailored to your needs.
          </p>
        </div>

        <ServicesCard />

      </div>
    </div>
  );
};

export default ServicesContents

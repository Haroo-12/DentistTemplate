import React, { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PricingCard from '../OurPricingComponents/PricingCard';
gsap.registerPlugin(ScrollTrigger);

const PrincingContent = () => {
const sectionRef = useRef();
const pricecontentone = useRef();
const pricecontenttwo = useRef();

useGSAP(() => {
  gsap.from(
      [pricecontentone.current, pricecontenttwo.current],
      {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        x: -50,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

  gsap.from(".price-content", {
    x: -80,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}, { scope: sectionRef });


  return (
    <div>
<section className=" bg-slate-50 pt-25 " ref={sectionRef}>
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
        Our Treatments
      </p>

      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900" ref={pricecontentone}>
        Dental Treatment Pricing
      </h2>

      <p className="mt-4 text-slate-600" ref={pricecontenttwo}>
        Explore our dental treatments and their prices. Book an appointment
        with our dental price for personalized care.
      </p>
    </div>

    {/* Cards */}
   <PricingCard/>

  </div>
</section>
    </div>
  )
}

export default PrincingContent


import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {dentalServices} from '../Multiplearray/Pricing.js'
gsap.registerPlugin(ScrollTrigger);


const PricingCard = () => {
  const sectionRef = useRef();
const [showAll, setShowAll] = useState(false);
const navigate = useNavigate()
const visibleServices = showAll ? dentalServices : dentalServices.slice(0, 9);
useGSAP(() => {
  const cards = gsap.utils.toArray(".reviews-card", sectionRef.current);

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: 40, scale: 0.95 },
      {
        autoAlpha: 1,
        y: 0,
        duration :1,
        // x:20,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",   // card jab viewport ke 90% pe pahunche, animation shuru
          end: "top 60%",     // 60% tak pahunchte pahunchte animation complete
          scrub: 1,            // scroll ke sath directly juda hua — smooth "scroll-linked" feel
          // markers: true,   // debug ke liye
        },
      }
    );
  });

  const handleLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", handleLoad);
  return () => window.removeEventListener("load", handleLoad);
}, { scope: sectionRef, dependencies: [showAll] });

const buttonRef = useRef();



const handleToggle = () => {
  if (showAll) {
    // Show Less click ho raha hai — position lock karo
    const beforeTop = buttonRef.current.getBoundingClientRect().top;
    setShowAll(false);
    requestAnimationFrame(() => {
      const afterTop = buttonRef.current.getBoundingClientRect().top;
      window.scrollBy(0, afterTop - beforeTop);
    });
  } else {
    // Show More click ho raha hai — normal expand, kuch mat chedo
    setShowAll(true);
  }
};
  return (
    <div className='flex justify-center items-center lg:mb-5 flex-col' ref={sectionRef}>
      <div className="grid pt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
    <div
  key={service.name}
  className="reviews-card group bg-white rounded-2xl border border-slate-200 p-6
             shadow-sm hover:shadow-xl hover:-translate-y-1
             transition-[box-shadow,translate] duration-300
             flex flex-col h-full"
>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--secondary)]">
                Dental Treatment
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {service.name}
              </h3>
 <h5 className="font-bold text-slate-900">
                {service.smallname}
              </h5>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <p className="text-xs font-medium text-slate-500">
                Treatment Price
              </p>

              <p className="mt-1 text-2xl font-bold text-[var(--secondary)]">
                {service.price}
              </p>
            </div>

            <button className="mt-auto pt-6 w-full" onClick={()=>{navigate("/contact#contact-form")}}>
              <span className="block w-full py-3 px-5 rounded-xl
                               backgroundcol text-white font-semibold
                               hover:cursor-pointer transition-colors duration-300">
                Book Appointment
              </span>
            </button>
          </div>
        ))}
      </div>
<button
  ref={buttonRef}
  onClick={handleToggle}
  className="px-6 py-3 mt-15 lg:mt-3 rounded-xl backgroundcol text-white font-semibold hover:cursor-pointer transition-colors duration-300"
>
  {showAll ? "Show Less" : "Show More"}
</button>
    </div>
  );
}; 

export default PricingCard;
import React, { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

import {team} from '../Multiplearray/Drteam.js'
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const OurTeamcard = () => {


  const sectionRef = useRef();
  const navigate = useNavigate();

useGSAP(() => {
  const cards = gsap.utils.toArray(".reviews-card");

  gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.98 });

  gsap.to(cards, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.5,          // pehle 0.7 tha, ab thoda fast
    stagger: 0.08,          // pehle 0.12 tha, ab cards jaldi jaldi aayenge
    ease: "power3.out",     // zyada smooth deceleration
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 90%",     // thoda pehle hi trigger ho jayega
      toggleActions: "play none none none",
      once: true,
    },
  });

  const images = sectionRef.current.querySelectorAll("img");
  let loadedCount = 0;

  const checkAllLoaded = () => {
    loadedCount++;
    if (loadedCount === images.length) {
      ScrollTrigger.refresh();
    }
  };

  if (images.length === 0) {
    ScrollTrigger.refresh();
  } else {
    images.forEach((img) => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded);
        img.addEventListener("error", checkAllLoaded);
      }
    });
  }

  const handleWindowLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", handleWindowLoad);

  return () => {
    window.removeEventListener("load", handleWindowLoad);
    images.forEach((img) => {
      img.removeEventListener("load", checkAllLoaded);
      img.removeEventListener("error", checkAllLoaded);
    });
  };
}, { scope: sectionRef });

  return (
    <div className='w-full flex justify-center'>
  <div
  className="pt-10 grid w-full grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
  ref={sectionRef}
>
  {team.map((member, index) => (
    <div
      onClick={() => navigate(`/ourteam/${member.id}`)}
      key={member.name}
      className={`reviews-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm 
      transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 
      hover:shadow-[0_15px_40px_rgba(14,70,226,0.18)]
      w-full
      ${
        index === 1 ? "order-first md:order-none" : "order-none"
      }`}
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-[380px] object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
      />

      {/* Bottom Blue Glow */}
     {/* Bottom Copper Glow */}
<div
  className="teamgradient absolute bottom-0 left-0 right-0 h-[45%] opacity-90 transition-all duration-500"
></div>

{/* Soft Hover Glow */}
<div
  className="teamglow absolute -bottom-10 left-1/2 h-24 w-[75%] -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
></div>

      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-20">
        <h3 className="text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="mt-1 text-sm text-white/80">
          {member.role}
        </p>
      </div>

      {/* Hover Arrow */}
      <div className="backgroundcol absolute bottom-25 left-5 z-20 flex h-14 w-14 translate-y-3 items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <FiArrowUpRight className="text-white text-xl" />
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default OurTeamcard;
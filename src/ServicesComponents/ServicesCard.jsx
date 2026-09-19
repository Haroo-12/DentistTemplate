import React, { useRef, useCallback, useState } from 'react'
import Heading from '../components/Heading'


import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {dentalservices} from '../Multiplearray/Services.js'
gsap.registerPlugin(useGSAP, ScrollTrigger);



const ServicesCard = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const buttonRef = useRef();

  const handleBookNow = useCallback(() => {
    navigate("/contact#contact-form");
  }, [navigate]);

  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? dentalservices : dentalservices.slice(0, 9);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(".service-card:not(.animated)", {
        start: "top 87%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "transform",
              onComplete: () => batch.forEach((el) => el.classList.add("animated")),
            }
          );
        },
      });
    });

    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        mm.revert();
      };
    }

    return () => mm.revert();
  }, { scope: sectionRef, dependencies: [showAll] });

  const handleToggle = () => {
    if (showAll) {
      const beforeTop = buttonRef.current.getBoundingClientRect().top;
      setShowAll(false);
      requestAnimationFrame(() => {
        const afterTop = buttonRef.current.getBoundingClientRect().top;
        window.scrollBy(0, afterTop - beforeTop);
      });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      className="w-full flex flex-wrap justify-center pt-10 gap-5"
      ref={sectionRef}
    >
      {visibleServices.map((service) => (
        <div
          key={service.id}
          className="service-card w-full sm:w-[48%] lg:w-[30%] bg-white shadow-2xl p-2 rounded-xl flex flex-col"
        >
          <div className="relative w-full">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            <div className="imagegradient absolute bottom-0 left-0 right-0 h-1/3"></div>
            </div>
          </div>

          <div className="px-3 pt-3 flex flex-col flex-1">
            <Heading text={service.title} className="text-xl font-bold" />
            <p className="mt-2 text-[var(--text)] leading-relaxed flex-1">
              {service.description}
            </p>
            <button
              onClick={handleBookNow}
              aria-label={`Book Now for ${service.title}`}
              className="px-5 w-full py-3 lg:mb-2 mb-4 rounded-2xl text-white font-bold cursor-pointer mt-4 backgroundcol self-start"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}

      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="px-6 py-3 mt-15 lg:mt-3 rounded-xl backgroundcol text-white font-semibold hover:cursor-pointer transition-colors duration-300"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  )
}

export default ServicesCard
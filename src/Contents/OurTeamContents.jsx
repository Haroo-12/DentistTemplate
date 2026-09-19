import React from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OurTeamcard from "../OurTeamComponents/OurTeamcard";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const OurTeamContents = () => {
  const sectionRef = useRef(null);
  const teamcontentone = useRef();
  const teamcontenttwo = useRef();

  useGSAP(() => {
    gsap.from(
      [teamcontentone.current, teamcontenttwo.current],
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


  }, { scope: sectionRef });

  return (
    <section className="pt-40" ref={sectionRef}>

      <div className="text-center max-w-2xl mx-auto mb-12">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
          Our Team
        </p>

        <h2
          className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900"
          ref={teamcontenttwo}
        >
          Our Professional Team
        </h2>

        <p
          className="mt-4 text-slate-600"
          ref={teamcontentone}
        >
          Our experienced team is dedicated to delivering trusted,
          compassionate, and high-quality dental care tailored to every patient
        </p>

      </div>

      <OurTeamcard />

    </section>
  );
};

export default OurTeamContents;

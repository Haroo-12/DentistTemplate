import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { branchData, MAP_EMBED_SRC } from "../Multiplearray/Contacting.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactPageComponentTwo = () => {
  const sectionRef = useRef();
  const contactcontentone = useRef();
  const contactcontenttwo = useRef();

  useGSAP(() => {
    gsap.from(
      [contactcontentone.current, contactcontenttwo.current],
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

    gsap.from(".contactcontentfour", {
      opacity: 0,
      scale: 0.95,
      x: -50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contactcontentfour",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <div>
      <div className="lg:px-10" ref={sectionRef}>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
            Book Appointment
          </p>

          <h2
            className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900"
            ref={contactcontentone}
          >
            Schedule Your Visit
          </h2>

          <p
            className="mt-4 text-slate-600"
            ref={contactcontenttwo}
          >
            Book an appointment with our dental team and take the first step
            toward a healthier smile.
          </p>
        </div>

        <div className="flex justify-center items-center lg:justify-between flex-col lg:flex-row gap-5 w-full pt-10 lg:pt-15">

          <div className="contactcontentfour w-[95%] lg:w-[45%] batchcolor rounded-3xl p-8">

            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-6">
              {branchData.name}
            </h2>

            {branchData.details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex items-start gap-4 mb-6 last:mb-0"
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[var(--secondary)]" />
                  </span>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>

                    {item.main && (
                      <p className="font-bold text-gray-900 text-lg">
                        {item.main}
                      </p>
                    )}

                    {item.sub && (
                      <p className="text-gray-400 text-sm mt-1">
                        {item.sub}
                      </p>
                    )}

                    {item.lines &&
                      item.lines.map((line, idx) => (
                        <p
                          key={idx}
                          className="text-gray-500 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="contactcontentfour w-[95%] lg:w-[45%] h-[410px] rounded-3xl overflow-hidden shadow-xl">

            <iframe
              src={MAP_EMBED_SRC}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dental Clinic Location"
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPageComponentTwo;
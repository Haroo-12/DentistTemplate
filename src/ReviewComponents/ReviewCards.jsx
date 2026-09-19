import React, { useState, useCallback } from 'react'
import { FaStar } from 'react-icons/fa'
import sikandarhusain from '../assets/reviewimage/sikandar.png'
import rafaybugiho from '../assets/reviewimage/rafaybugiho.png'
import saadkhan from '../assets/reviewimage/saadkhan.png'
import Heo from '../assets/reviewimage/Heo.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {reviewscard} from '../Multiplearray/ReviewData.js'
gsap.registerPlugin(useGSAP, ScrollTrigger);


const ReviewCards = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".reviews-card", sectionRef.current);
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: (index % 3) * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none", // sirf ek baar chale, replay nahi
          once: true,
        },
      });
    });
  }, { scope: sectionRef });

  const [expanded, setExpanded] = useState({});

  const toggleExpand = useCallback((key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  return (
    <div
      className="w-full pt-20 flex justify-center flex-wrap gap-5"
      ref={sectionRef}
    >
      {reviewscard.map((review) => (
        <div
          key={review.name}
          className="reviews-card w-[95%] sm:w-[47%] lg:w-[29%] bg-white shadow-2xl rounded-xl p-5"
        >
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex justify-center items-center backgroundcol">
              {review.image ? (
                <img
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <h1 className="text-xl font-bold text-white">
                  {review.initial}
                </h1>
              )}
            </div>

            <div>
              <h1 className="font-bold text-lg text-[var(--secondary)]">
                {review.name}
              </h1>

              <div className="flex gap-1 mt-1 text-[var(--secondary)]" aria-label={`${review.rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    aria-hidden="true"
                    className={
                      star <= review.rating
                        ? "text-[var(--secondary)]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mt-4">
            <p
              className={`text-[var(--text)] leading-relaxed ${
                expanded[review.name] ? "" : "line-clamp-4"
              }`}
            >
              {review.reviewabout}
            </p>

            {review.reviewabout.length > 180 && (
              <button
                type="button"
                onClick={() => toggleExpand(review.name)}
                aria-expanded={!!expanded[review.name]}
                className="mt-2 text-[#278981] underline font-medium cursor-pointer"
              >
                {expanded[review.name] ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;
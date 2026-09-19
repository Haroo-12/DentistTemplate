import React from 'react'

import ContactPageComponentTwo from '../ContactComponents/ContactPageComponentTwo'
import ContactPageComponent from '../ContactComponents/ContactPageComponent'
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Contact = () => {
   const sectionRef = useRef();
  
           useGSAP(() => {
            gsap.from(".contactmain", {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            x:-50,
            stagger: 0.2,
            ease: "power2.out",
          });
        }, { scope: sectionRef });
  return (
    <div>
      <div className='pt-30 lg:pt-0 flex justify-center flex-col' ref={sectionRef}>
     
        <div className='pt-14'>

<ContactPageComponentTwo/>
        </div>
     <ContactPageComponent/>
      </div>
    </div>
  )
}

export default Contact

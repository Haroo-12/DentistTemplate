import React from 'react'
import Home from './Pages/Home'
import Routers from './Routering/Routers'
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    // Lenis ka scroll event ScrollTrigger ko batao
    lenis.on('scroll', ScrollTrigger.update);

    // gsap ka ticker use karo instead of requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };

  }, []);

  return (
    <div className='w-full'>
      <Routers>
        
      </Routers>
    </div>
  )
}

export default App
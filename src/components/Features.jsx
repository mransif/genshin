import React, { Children, useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt';
import CircularGallery from './style/CircularGallery/CircularGallery';
import { HeroParallax } from "../components/ui/hero-parallax";


const BentoTilt = ({ children, className = '', options = {} }) => {
  const itemRef = useRef();


  useEffect(() => {
    if (itemRef.current) {

      VanillaTilt.init(itemRef.current, {
        max: 20,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
        ...options,
      });
    }

    return () => {
      if (itemRef.current && itemRef.current.vanillaTilt) {
        itemRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={itemRef} className={`tilt-container ${className}`}>
      {children}
    </div>
  );
};



export const products = [
  {
    title: "8EEN",
    thumbnail:
      "/img/8m_1.png",
  },
  {
    title: "THAMARASSERY CHURAM",
    thumbnail:
      "/img/tc_1.png",
  },
  {
    title: "PISTONIA",
    thumbnail:
      "/img/p_1.png",
  },
  {
    title: "8EEN",
    thumbnail:
      "/img/8m_1.png",
  },
  {
    title: "THAMARASSERY CHURAM",
    thumbnail:
      "/img/tc_1.png",
  },
  {
    title: "PISTONIA",
    thumbnail:
      "/img/p_1.png",
  },
  {
    title: "8EEN",
    thumbnail:
      "/img/8m_2.png",
  },
  {
    title: "THAMARASSERY CHURAM",
    thumbnail:
      "/img/tc_2.png",
  },
  {
    title: "PISTONIA",
    thumbnail:
      "/img/p_2.png",
  },
  {
    title: "8EEN",
    thumbnail:
      "/img/8m_2.png",
  },
  {
    title: "THAMARASSERY CHURAM",
    thumbnail:
      "/img/tc_2.png",
  },
  {
    title: "PISTONIA",
    thumbnail:
      "/img/p_2.png",
  },

];

const Features = () => {
  return (
    <section className='bg-black pb-2'>

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={20} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <div className='flex flex-col justify-center gap-4 md:justify-start mt-4 w-full bg-black py-6'>
        <div className="p-4  text-white rounded-lg shadow-md max-w-md h-auto mx-auto">
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Program Convener</p>
            <p className="text-xl font-bold">Manju R</p>
            <p className="text-md text-gray-400">+91 99610 58429</p>
          </div>
          <hr className="border-gray-700 my-2" />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Program Coordinator</p>
            <p className="text-xl font-bold">P Avinash K</p>
            <p className="text-md text-gray-400">+91 73062 09797</p>
          </div>
        </div>
      </div>

      <HeroParallax products={products} />;
      <div className="h-[1px] bg-purple-400 w-full"></div>

    </section>
  )
}


export default Features
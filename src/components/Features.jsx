import React, { Children, useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt';


// const BentoTilt = ({ children, className = '' }) => {

//   const [transformStyle, setTransformStyle] = useState('')
//   const itemRef = useRef()
//   const handleMouseMove = (e) => {
//     if(!itemRef.current) return


//   }
//   const handleMouseLeave = () => {
//     setTransformStyle('')
//   }

//   return (
//     <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
//     style={{transform: transformStyle}}
//     >
//       {children}
//     </div>
//   )
// }


const BentoTilt = ({ children, className = '', options = {} }) => {
  const itemRef = useRef();

  useEffect(() => {
    if (itemRef.current) {
      // Initialize VanillaTilt with default and custom options
      VanillaTilt.init(itemRef.current, {
        max: 20, // Adjust tilt angle
        speed: 300, // Animation speed
        glare: true, // Enable glare effect
        "max-glare": 0.2, // Maximum glare opacity
        scale: 1.05, // Slight zoom effect on hover
        ...options, // Merge custom options
      });
    }

    return () => {
      // Cleanup VanillaTilt
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



const BentoCard = ({ src, title }) => {
  return (
    <div className="relative size-full">
      <video src={src}
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className='bento-title special-font'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className='bg-black pb-20'>
      <div className="container mx-auto px-3  md:px-10">
        <div className="px-5 pt-32 pb-14">
          <p className='font-circular-web text-lg text-blue-50'>Discover the souls who embody the essence of the elements.</p>
        </div>
        <BentoTilt
          options={{ max: 10, speed: 400, scale: 1.04 }}
          className="border-hsla h-[230px] relative mb-7 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <><b>Arlecchino</b></>
            }
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt
            options={{ max: 10, speed: 400, scale: 1.04 }}
            className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={<><b>Yae Miko</b></>}
            />
          </BentoTilt>
          <BentoTilt
            options={{ max: 10, speed: 400, scale: 1.04 }}
            className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={<><b>Neuvillette</b></>}
            />
          </BentoTilt>
          <BentoTilt
            options={{ max: 10, speed: 400, scale: 1.04 }}
            className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={<><b>Yelan</b></>}
            />
          </BentoTilt>
          <BentoTilt
            options={{ max: 10, speed: 400, scale: 0.94 }}
            className="bento-tilt_1 bg-violet-300 me-14 md:col-span-1 md:me-0">
            <BentoCard
              // src="/videos/feature-4.mp4"
              title={<>mor<b>e</b> co<b>m</b>ing s<b>o</b>on...</>}
            />
          </BentoTilt>
        </div>
      </div>

    </section>
  )
}

export default Features
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Features from './Features'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";



gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
        
      }, []);

    // useGSAP(() => {
    //     gsap.set('#video-frame', {
    //         clipPath: 'polygon(10% 10%, 80% 20%, 90% 80%, 1% 99%)',
    //         borderRadius: '0 0 35% / 39%'
    //     })
    //     gsap.from('#video-frame', {
    //         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //         borderRadius: '0 0 0 0',
    //         ease: 'power1.inOut',
    //         scrollTrigger: {
    //             trigger: '#video-frame',
    //             start: 'center center',
    //             end: 'bottom center',
    //             scrub: true,
    //         }
    //     })
    // })


    return (
        <>
            <div id='home' className='relative h-screen w-screen overflow-x-hidden bg-[#020617]'>

                <div id='' className='relative z-10 h-screen w-screen overflow-hidden  rounded-lg bg-blue-75'>
                    
                    <LampContainer >
                        <motion.h1
                            initial={{ opacity: 0.5, y: 100 }}
                            whileInView={{ opacity: 1, y: -85 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-0 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                        >
                           
                            <div className='-translate-y-14 md:-translate-y-0 '>
                                <h1 className='special-font text-7xl sm:hero-heading  text-blue-100 '><b>AVISHKAR</b></h1>
                                <p className='max-w-64 font-robert-regular text-2xl text-blue-100'>2025</p>
                            </div>

                        </motion.h1>

                    </LampContainer>

                   
                    <h1 className='flex flex-col special-font text-7xl sm:hero-heading absolute bottom-20 right-16 sm:bottom-12 sm:right-10 text-blue-75 z-40  '>
                        <b>MUSALIAR </b><span className='text-base'>Presents</span>
                    </h1>
                    <div className='absolute left-0 top-0 z-40 size-full '>
                        <div className='mt-20 px-[15%] py-56 md:px-5 '>
                           
                        </div>
                    </div>
                </div>
                {/* <h1 className='flex flex-col special-font text-7xl sm:hero-heading absolute bottom-20 right-16 sm:bottom-12 sm:right-10 text-[#8329A6] '>
                    <b>MUSALIAR</b><span className='text-base'>Presents</span>
                </h1> */}
            </div>
            <Features />
        </>
    )
}

export default Hero
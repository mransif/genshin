"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Features from './Features'
import GridDistortion from './ui/GridDistortion'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";



gsap.registerPlugin(ScrollTrigger)

const Hero = () => {


    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(10% 10%, 80% 20%, 90% 80%, 1% 99%)',
            borderRadius: '0 0 35% / 39%'
        })
        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })


    return (
        <>
            <div id='home' className='relative h-dvh w-screen overflow-x-hidden'>

                <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden bg-[#212121] rounded-lg bg-blue-75'>
                    <div className=''>
                        {/* <div style={{ width: '100%', height: 'screen', position: 'relative' }}> */}
                        {/* <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                            <GridDistortion
                                imageSrc={`/img/hero_1.png`}
                                grid={10}
                                mouse={0.1}
                                strength={0.15}
                                relaxation={0.9}
                                className="w-full h-full object-cover"
                            />
                        </div> */}
                        <LampContainer>
                            <motion.h1
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                            >
                                {/* Build lamps <br /> the right way */}
                            </motion.h1>
                        </LampContainer>


                    </div>
                    <h1 className='special-font text-7xl sm:hero-heading absolute bottom-20 right-16 sm:bottom-12 sm:right-10 text-blue-75 z-40  '>
                        <b>MUSALIAR</b>
                    </h1>
                    <div className='absolute left-0 top-0 z-40 size-full '>
                        <div className='mt-20 px-[15%] py-56 md:px-5 '>
                            <h1 className='special-font text-7xl sm:hero-heading  text-blue-100 '><b>AVISHKAR</b></h1>
                            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Unfolding<br />the Future.</p>
                            {/* <Magnet padding={50} disabled={false}>
                            <Button id='watch-trailer' title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass='!bg-orange-300 flex-center gap-1 ' />
                        </Magnet> */}
                        </div>
                    </div>
                </div>
                <h1 className='special-font text-7xl sm:hero-heading absolute bottom-20 right-16 sm:bottom-12 sm:right-10 text-[#5d1a2f] '>
                    <b>MUSALIAR</b>
                </h1>
            </div>
            <Features />
        </>
    )
}

export default Hero
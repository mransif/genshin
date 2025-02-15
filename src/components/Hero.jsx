import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Features from './Features'
import GridDistortion from './ui/GridDistortion'



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

                <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden  rounded-lg bg-blue-75'>
                    <div >
                        <div style={{ width: '100%', height: 'screen', position: 'relative' }}>
                            <GridDistortion
                                imageSrc={`/img/hero_1.png`}
                                grid={10}
                                mouse={0.1}
                                strength={0.15}
                                relaxation={0.9}
                                className="custom-class"
                            />
                        </div>
                       
                    </div>
                    <h1 className='special-font text-7xl sm:hero-heading absolute bottom-20 right-16 sm:bottom-12 sm:right-10 text-blue-75 z-40  '>
                        <b>MUSALIAR</b>
                    </h1>
                    <div className='absolute left-0 top-0 z-40 size-full '>
                        <div className='mt-16 px-5 py-5 sm:px-10'>
                            <h1 className='special-font hero-heading text-blue-100 '><b>AVISHKAR</b></h1>
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
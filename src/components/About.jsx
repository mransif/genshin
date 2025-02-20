import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

function About() {


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen'>

            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>
                    avishkar
                </h2>
                <AnimatedTitle
                    title="A Fes<b>tival of </b>Talent, <b>Innovation & </b><b>C</b>elebration!"
                    containerClass="mt-5 !text-black text-center"
                />
                <div className='about-subtext'>
                    <p>Avishkar, the annual fest of Musaliar College.</p>
                    <p>📅 Date: February 24</p>
                    <img src="/img/mckpta.png" alt="" />
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src='img/about.webp'
                        alt='background'
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About
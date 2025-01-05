import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import Magnet from './Magnet'

const navItems = ['Home', 'Vault', 'About', 'Contact']


const Navbar = () => {
    const navContainerRef = useRef(null)
    const audioElementRef = useRef(null)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)

    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)

    const { y: currentScrollY } = useWindowScroll()
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }
        else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        }
        else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })



    }, [isNavVisible])




    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.play();
            } else {
                audioElementRef.current.pause();
            }
        }
    }, [isAudioPlaying])


    return (
        <div ref={navContainerRef} className='fixed z-50 h-16 border-none transition-all inset-x-0 top-4 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2 '>
                <nav className='flex size-full items-center justify-between p-3'>
                    <div className="flex items-center gap-7">
                        <img src="/img/logo_g.png" alt="logo" className='w-16' />
                        <Magnet padding={10} disabled={false}>
                            <Button
                                link='#dfg'
                                id='product-button'
                                title='products'
                                rightIcon={<TiLocationArrow />}
                                className='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                            />
                        </Magnet>

                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className='ml-10 flex items-center space-x-0.5'
                        >
                            <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
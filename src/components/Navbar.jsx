import React, { useEffect, useRef, useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { useNavigate } from "react-router-dom";
import Magnet from './Magnet';
import Button from './Button';
import { TiLocation } from "react-icons/ti";




const Navbar = () => {
    const navigate = useNavigate()
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


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsDropdownOpen(false); // Close dropdown on scroll
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // Close dropdown when clicking outside
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={navContainerRef} className='fixed z-50 h-16 border-none transition-all inset-x-0 top-4 sm:inset-x-6 bg-[#00000085]'>
            <header className='absolute top-1/2 w-full -translate-y-1/2 '>
                <nav className='flex size-full items-center justify-between p-3'>
                    <div className="flex items-center gap-7">
                        <img src="/img/logo1.png" alt="logo" className='w-16' />
                        <Magnet padding={10} disabled={false}>
                            <Button
                                link='https://maps.app.goo.gl/2s1ABh1zeFt1ivPg7'
                                id='product-button'
                                title='Join Us '
                                rightIcon={<TiLocation />}
                                className='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                            />
                        </Magnet>

                    </div>
                    <div className="flex h-full items-center ">
                        <div className="hidden md:block  ">
                            <a
                                onClick={() => navigate("/")}
                                className="hover:text-white cursor-pointer text-zinc-300 ml-3 nav-hover-btn"
                            >
                                Home
                            </a>
                            <a
                                onClick={() => navigate("/events")}
                                className="hover:text-white cursor-pointer text-zinc-300 ml-3 nav-hover-btn"
                            >
                                Events
                            </a>
                            <a
                                onClick={() => navigate("/about")}
                                className="hover:text-white cursor-pointer text-zinc-300 ml-3 nav-hover-btn"
                            >
                                About
                            </a>
                            <a
                                onClick={() => navigate("/contact")}
                                className="hover:text-white text-zinc-300 ml-3 cursor-pointer nav-hover-btn"
                            >
                                Contact Us
                            </a>

                        </div>

                        <button
                            onClick={toggleAudioIndicator}
                            className='lg:ml-7 md:ml-7 lg:mr-0 mr-7 flex items-center space-x-0.5'
                        >
                            <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}
                        </button>

                        <div ref={dropdownRef} className="relative block md:hidden mr-3">
                            <div
                                className="items-center gap-2 cursor-pointer flex"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className="w-full h-full text-white"><LuMenu /></div>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute top-0 right-0 pt-14 text-base z-10 text-gray-300 font-medium rounded-lg">
                                    <div className="min-w-48 bg-[#111111b8] rounded flex flex-col gap-4 p-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                        <p
                                            onClick={() => navigate("/")}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            Home
                                        </p>
                                        <p
                                            onClick={() => navigate("/events")}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            Events
                                        </p>
                                        <p
                                            onClick={() => navigate("/about")}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            About
                                        </p>
                                        <p
                                            onClick={() => navigate("/contact")}
                                            className="hover:text-white cursor-pointer"
                                        >
                                            Contact Us
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
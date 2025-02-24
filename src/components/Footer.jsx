import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import BounceCards from './ui/BounceCards/BounceCards';



const links = [
    { href: 'https://www.instagram.com/avishkar_.25/', icon: <FaInstagram /> },
    { href: 'https://www.facebook.com/avishkarthefest/', icon: <FaFacebook /> }

]

const images = [
    "/img/ads/house1.jpg",
    "/img/ads/house2.jpg",
    "/img/ads/house1.jpg",
    "/img/ads/house3.jpg",
    "/img/ads/house1.jpg",
];

const images1 = [
    "/img/ads/wem1.jpg",
    "/img/ads/wem2.jpg",
    "/img/ads/wem1.jpg",
    "/img/ads/wem2.jpg",
    "/img/ads/wem1.jpg",
];


const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
];



const Footer = () => {
    return (
        <div className="h-screen  relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div className='h-[100%] fixed w-full bottom-0 flex items-end bg-black '>

                <div className='absolute flex m-0 md:m-10 flex-col md:flex-row w-screen h-2/3 items-center justify-around px-6 md:px-14 gap-y-4 md:gap-y-0 top-0 '>

                    <div className="flex justify-center items-center h-4/5 flex-col px-4  ">

                        <div className="text-white p-4 mt-4 font-bold text-2xl md:text-4xl text-center">
                            <h1>Sponsorship</h1>
                        </div>
                        <BounceCards
                            className="custom-bounceCards "
                            images={images}
                            containerWidth={300}
                            containerHeight={250}
                            animationDelay={1}
                            animationStagger={0.08}
                            easeType="elastic.out(1, 0.5)"
                            transformStyles={transformStyles}
                            enableHover={true}
                        />
                        <br />
                        <BounceCards
                            className="custom-bounceCards "
                            images={images1}
                            containerWidth={300}
                            containerHeight={250}
                            animationDelay={1}
                            animationStagger={0.08}
                            easeType="elastic.out(1, 0.5)"
                            transformStyles={transformStyles}
                            enableHover={true}
                        />

                        <div className="flex justify-center items-center gap-4 md:justify-between w-full md:w-3/4 my-4 ">
                            <img
                                src="/img/ads/square1.jpg"
                                alt="Ad 1"
                                className="max-w-[65px] md:max-w-[90px] lg:max-w-[100px]"
                            />
                            <img
                                src="/img/ads/square2.png"
                                alt="Ad 2"
                                className="w-full max-w-[200px] md:max-w-[320px] lg:max-w-[350px] md:w-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                        </div>
                        <div className="flex justify-center items-center gap-4 md:justify-between w-full md:w-3/4 ">
                            <img
                                src="/img/ads/m1.png"
                                alt="Ad 1"
                                className="w-full max-w-[150px] rounded-sm md:max-w-[320px] lg:max-w-[350px] md:w-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                            <img
                                src="/img/ads/m2.png"
                                alt="Ad 2"
                                className="max-w-[95px] md:max-w-[90px] rounded-sm lg:max-w-[100px]"
                            />
                        </div>

                    </div>
                    <p className='text-white font-semibold text-center'>Thanks For your Support.</p>


                </div>



                <footer className='w-screen bg-[#a88acc] py-2 text-black h-auto '>
                    <div className="container mx-auto rounded-lg flex flex-col items-center justify-between gap-2 md:flow-row">
                        <p className='text-center text-sm md:text-left'>
                            &copy; AVISHKAR 2025.
                        </p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            {links.map((link) => (
                                <a key={link} href={link.href} target='_blank' className='text-black transition-colors duration-500 ease-in-out hover:text-white '>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <p className='text-center text-sm tracking-tight px-7'>Disclaimer:<br />
                            All content on this website belongs to their respective owners. Contact us for concerns about its use.</p>
                        <a href='/credits' className='cursor-pointer underline'>Credits</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
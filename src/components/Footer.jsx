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


                    {/* <div className="flex justify-center items-center h-[40rem] flex-col px-4">
                        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
                            Join us at{" "}
                            <LinkPreview
                                url="https://maps.app.goo.gl/2s1ABh1zeFt1ivPg7"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                Musaliar
                            </LinkPreview>{" "}
                            on February 24 <br />—the name itself leads you to the location!
                        </p>
                    </div> */}

                    <div className="flex justify-center items-center h-2/3 flex-col px-4  ">

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
                        <p className='text-white font-semibold text-center'>Thanks For your Support.</p>
                    </div>

                    <img
                        src="/img/logo1.png"
                        alt="Logo"
                        className='order-2 md:order-none mx-auto w-full max-w-[105px] md:max-w-[300px] lg:max-w-[250px] md:w-auto transition-all duration-300 hover:scale-105 cursor-pointer'
                    />
                </div>



                <footer className='w-screen bg-[#a88acc] py-4 text-black h-auto '>
                    <div className="container mx-auto rounded-lg flex flex-col items-center justify-between gap-4 md:flow-row">
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
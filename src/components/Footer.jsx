import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

const links = [
    { href: 'https://www.instagram.com/avishkar_.25/', icon: <FaInstagram /> },
    { href: 'https://www.facebook.com/avishkarthefest/', icon: <FaFacebook /> }

]
const Footer = () => {
    return (
        <div className="h-screen relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div className='h-[100%] fixed w-full bottom-0 flex items-end bg-black '>
                {/* <div className="text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  sm:-translate-y-3/4">
                    <h1 className='text-[18vw] bg-gradient-to-r from-white to-[#565656] bg-clip-text font-circular-web tracking-tight'>AVISHKAR</h1>
                </div> */}

                <div className='absolute flex m-0 md:m-10 flex-col md:flex-row w-screen h-2/3 items-center justify-around px-6 md:px-14 gap-y-4 md:gap-y-0 top-0 '>

                    {/* <div className='order-1 md:order-none w-full md:w-2/5 h-12 md:h-20 bg-cyan-800'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1655.5445104857674!2d76.81721859519952!3d9.282601919490318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06154ec8f06fe3%3A0xf53146ce00c7f5d5!2sMusaliar%20College%20of%20Engineering%20%26%20Technology%2C%20Pathanamthitta!5e0!3m2!1sen!2sin!4v1739687041352!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}

                    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
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
                    </div>

                    <img
                        src="/img/logo1.png"
                        alt="Logo"
                        className='order-2 md:order-none mx-auto w-full max-w-[200px] md:max-w-[300px] lg:max-w-[250px] md:w-auto transition-all duration-300 hover:scale-105 cursor-pointer'
                    />
                </div>



                <footer className='w-screen bg-[#a88acc] py-4 text-black h-1/4 '>
                    <div className="container mx-auto rounded-lg flex flex-col items-center justify-between gap-4 md:flow-row">
                        <p className='text-center text-sm md:text-left'>
                            &copy; AVISHKAR 2025.
                        </p>
                        <div className="flex justify-center gap-4 md:justify-start">
                            {links.map((link) => (
                                <a key={link} href={link.href} target='_blank' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <p className='text-center text-sm tracking-tight'>Disclaimer:<br />
                            All content on this website belongs to their respective owners. Contact us for concerns about its use.</p>
                        <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>privacy policy</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
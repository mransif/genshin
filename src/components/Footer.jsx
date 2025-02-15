import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const links = [
    { href: 'https://www.instagram.com/avishkar_.25/', icon: <FaInstagram /> },
    { href: 'https://www.facebook.com/avishkarthefest/', icon: <FaFacebook /> }

]
const Footer = () => {
    return (
        <div className="h-screen relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
            <div className='h-[100%] fixed w-full bottom-0 flex items-end bg-black '>
                <div className="text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  sm:-translate-y-3/4">
                    <h1 className='text-[18vw] bg-gradient-to-r from-white to-[#565656] bg-clip-text font-circular-web tracking-tight'>AVISHKAR</h1>
                </div>
                <footer className='w-screen bg-violet-300 py-4 text-black h-1/4 '>
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
                            All video content on this website belongs to their respective owners. Contact us for concerns about its use.</p>
                        <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>privacy policy</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
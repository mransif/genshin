import React from 'react'
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const developers = [
    {
        name: "Ansif Muhammed N N",
        role: "Frontend Developer",
        // image: "/img/devs/dev2.jpeg",
        linkedin: "https://linkedin.com/in/ansif1",
        email: "ansifpta2003@gmail.com",
    },
    {
        name: "Sreehari Suresh",
        role: "Frontend Developer",
        // image: "/img/devs/dev3.jpeg",
        linkedin: "https://www.linkedin.com/in/sreehari-sureshss-27aba830a/",
        email: "sreehari200411@gmail.com",
    },
    {
        name: "Ashik Kabeer",
        role: "Backend Developer",
        // image: "/img/devs/dev1.jpeg",
        linkedin: "https://www.linkedin.com/in/ashik-kabeer/",
        email: "ashikkabeer03@gmail.com",
    },
];

const Credits = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center pt-20 border-b-purple-300 border-b-2">
            <h1 className="text-3xl font-bold text-gray-200 mb-10">Meet the Developers</h1>
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-[1px]">
                {developers.map((dev, index) => (
                    <div
                        key={index}
                        className={`w-full min-h-52 ${index % 2 === 0 ? "bg-cyan-500" : "bg-purple-500"
                            } px-5 flex items-center justify-center`}
                    >
                        <div className="text-center">
                            <h1 className="text-white text-2xl italic">{dev.name}</h1>
                            <p className="text-white text-md">{dev.role}</p>
                            <div className="mt-4 flex gap-6 justify-center">
                                <a
                                    href={`mailto:${dev.email}`}
                                    className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition"
                                >
                                    <FaEnvelope /> Gmail
                                </a>
                                <a
                                    href={dev.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition"
                                >
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Credits
import React from 'react'
import { LayoutGrid } from "./ui/layout-grid";
import Button from './Button';
import { FaLocationArrow } from "react-icons/fa";

const MainEvent = () => {

    const SkeletonOne = () => {
        return (
            (<div>
                <p className="font-bold md:text-4xl text-xl text-white">
                    Mr and Ms Avishkar
                </p>
            </div>)
        );
    };

    const SkeletonTwo = () => {
        return (
            (<div>
                <p className="font-bold md:text-4xl text-xl text-white">
                    Group Dance
                </p>
            </div>)
        );
    };
    const SkeletonThree = () => {
        return (
            (<div>
                <p className="font-bold md:text-4xl text-xl text-white">
                    Voice of Avishkar
                </p>
            </div>)
        );
    };
    const SkeletonFour = () => {
        return (
            (<div>
                <p className="font-bold md:text-4xl text-xl text-white">
                    Treasure Hunt
                </p>
            </div>)
        );
    };


    const cards = [
        {
            id: 1,
            content: <SkeletonOne />,
            name: "Mr and Ms Avishkar",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeEreiGa5tj_z9kmo-aq-paeS7EKL6MuwaVpiEHcMb0Iyk6YQ/viewform?usp=header",
            className: "md:col-span-2",
            thumbnail:
                "/img/mr&mrs.png",
        },
        {
            id: 2,
            content: <SkeletonTwo />,
            name: "Group Dance",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfg9AlQVJN_P91Q1ehJAxtWdeZ0unZ5yOYTUp2N4yDOFqe18g/viewform?usp=header",
            className: "col-span-1",
            thumbnail:
                "/img/grp_dance.png",
        },
        {
            id: 3,
            content: <SkeletonThree />,
            name: "Voice of Avishkar",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScXy_O3Bm-x_qdHLC5ZacPaEDqL1j05-w_HEm7-uvstcRW6mA/viewform?usp=header",
            className: "col-span-1",
            thumbnail:
                "/img/voice.png",
        },
        {
            id: 4,
            content: <SkeletonFour />,
            name: "Treasure Hunt",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeRrbR6-r1uIdSbwUC-IqvB4wnULW_aXw7fsxXyr8QhfEqETg/viewform?usp=header",
            className: "md:col-span-2",
            thumbnail:
                "/img/treasure.png",
        },
    ];




    return (
        <div className='relative w-full min-h-screen mt-8'>
            {/* Main Events */}
            <div id='main-event' className="text-center py-12">
                <h2 className="text-3xl font-bold">Main Events</h2>
                <p className="text-md font-light tracking-tight">click to register</p>


                <div className="h-screen  w-full">
                    <LayoutGrid cards={cards} />
                </div>

            </div>

            {/* Competitions by Department */}
            <div className="px-6 py-12">
                <h2 className="text-3xl font-bold text-center">Competitions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {[
                        {
                            title: 'MCA', events: ['Capture the Flag', 'Code Relay', 'Tech Escape Room', 'Spot Mobile Photography'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLScbnYy_jRxDch8rywn5jpzLClp2LMm-_kSIOmc7doqMigakbQ/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSeA4P7eKqUS21PFS3lM3Tj_r2-ungszx7yZd_SpOQkKxgE-zg/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSdZqlQY425AGemG-9JJtCRfTxT0Py5ZsLg38GEQ9HTGuAFS_g/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSdLQpSpZWf5mDnQ1pRonJCSMAPhivOkeu9TphaYUX-nIEnWTg/viewform',
                            ],
                            thumbnail: [
                                '/img/mca/flag.png',
                                '/img/mca/coderelay.png',
                                '/img/mca/escape.png',
                                '/img/mca/mobilephoto.png',
                            ],
                        },
                        {
                            title: 'ECE', events: ['Circuit Clash', 'Locked in Logic', '3s Football', 'Mini Militia: Solo War'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLScgZCTML-JmeVH6QQyOHz9w153Y5L65eFXQJW7GqZkOW46GVQ/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSeq7xwJUOsm6ZxANlRK-vuE7LugvB9BhfhWIVQKVdK6J-lwCQ/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSf7rM_BbM6qCP3U22AKwEq8XKNOAQa1rNfyBLelrYsy2oINxA/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSe0Ke16btwUScT0fmpaHDYV6eC91MEgsuwkeTj5_KT_Cqx-5Q/viewform',
                            ],
                            thumbnail: [
                                '/img/ece/clash.png',
                                '/img/ece/locked.png',
                                '/img/ece/3sfootball.png',
                                '/img/ece/minimilitia.png',
                            ],
                        },
                        {
                            title: 'MECHANICAL', events: ['Quiz', 'Engine Assembly', 'E-Football', 'Carroms'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLSeW7ls9uQkaZg5HNZKPv5pPzWXcD7FeAnrT6bmzEmEIwlcYWw/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSc5O1MhIZWzXbizJB4nyqMFivSBX8q3ieNlKJ9XB6mHR8Lfmw/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSfUun6ah3UTgbIP89Jizuwn2ElZ3dDrqnHLU1hqTvbeU73VcQ/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLScHiMYpokSqTmFSHIzSYTuQGkGQZrF-OtLsMH0AKx_sjsHSsw/viewform',
                            ],
                            thumbnail: [
                                '/img/mech/quiz.png',
                                '/img/mech/engine.png',
                                '/img/mech/efootball.png',
                                '/img/mech/carrom.png',
                            ],
                        },
                        {
                            title: 'EEE', events: ['Electrical Quiz', 'Circuit Identification & Soldering', 'Hands And Feet Hopscotch', 'Arm Wrestling'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLSfyg8PbmfkcGGU0fm0D7eKtclELtFHD9ZTzDaLVSR92rmTEJA/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSd4X1QlrDpozai8GNpGjMz3eYabNQdQUyk3myPKUGFzl2OyBg/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSdwxcu1B0DFO6hB4-KmmNy8bQfEiP5M03zslokS6E_VUfoFxQ/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSc9rOo-sw3w0l52RS_o9zY0_Ug3AZww6cMyJPJOH1smXoSCuA/viewform',
                            ],
                            thumbnail: [
                                '/img/eee/quiz.png',
                                '/img/eee/circuit.png',
                                '/img/eee/hopscotch.png',
                                '/img/eee/arm.png',
                            ],
                        },
                        {
                            title: 'CSE', events: ['Block of Code Arranging', 'Technical Quiz', 'BGMI Tournament', 'Valorant Tournament'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLSdjSChQY7aC5-QIi33Rq_k5-dk9ge73HGOvnDOuqtKpN5iNHg/viewform?usp=dialog',
                                'https://docs.google.com/forms/d/e/1FAIpQLSd-g3TqJKDww_b-XobcXPDl1bGF0TvWGAOOD0g8pOXTPA9h1A/viewform?usp=dialog',
                                'https://docs.google.com/forms/d/e/1FAIpQLSdR2oAPNa1nL67WK9WDJ1UDan6yAWBs_BoLmqecYTjGwjXkTg/viewform?usp=dialog',
                                'https://docs.google.com/forms/d/e/1FAIpQLScKiq1IGCjjM1vZsZzejPlSg-u5Cy52--S70h9J3SjOOvaShg/viewform?usp=dialog',
                            ],
                            thumbnail: [
                                '/img/cs/code.png',
                                '/img/cs/quiz.png',
                                '/img/cs/bgmi.png',
                                '/img/cs/valo.png',
                            ],

                        },
                        {
                            title: 'CIVIL', events: ['Bridge It Up', 'Movie Truffle', 'House of Cup', 'Technical Quiz'], link: [
                                'https://docs.google.com/forms/d/e/1FAIpQLSfBKyP16Fm7Gqd9N2WxZ-Cb6mGK-oM99uj94c17TfeuoKXfAA/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSfBKyP16Fm7Gqd9N2WxZ-Cb6mGK-oM99uj94c17TfeuoKXfAA/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSfBKyP16Fm7Gqd9N2WxZ-Cb6mGK-oM99uj94c17TfeuoKXfAA/viewform',
                                'https://docs.google.com/forms/d/e/1FAIpQLSfBKyP16Fm7Gqd9N2WxZ-Cb6mGK-oM99uj94c17TfeuoKXfAA/viewform',
                            ],
                            thumbnail: [
                                '/img/civil/bridge.png',
                                '/img/civil/movie.png',
                                '/img/civil/cup.png',
                                '/img/civil/quiz.png',
                            ],
                        }
                    ].map((dept, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{dept.title}</h3>

                            <div className='w-full bg-zinc-100 p-4'>
                                <ul className="space-y-4"> {/* Added space-y-4 for vertical spacing between event-button pairs */}
                                    {dept.events.map((ev, i) => (
                                        <li
                                            key={i}
                                            className="relative w-full h-40 rounded-lg overflow-hidden bg-cover bg-center flex items-end p-4 text-white shadow-md"
                                            style={{ backgroundImage: `url(${dept.thumbnail[i]})` }}
                                        >
                                            {/* Overlay for readability */}
                                            <div className="absolute inset-0 bg-black/50"></div>

                                            <div className="relative flex justify-between w-full items-center">
                                                <span className="text-lg font-semibold">{ev}</span>
                                                <Button
                                                    link={dept.link[i]}
                                                    id="product-button"
                                                    title="Register"
                                                    rightIcon={<FaLocationArrow />}
                                                    className="bg-zinc-500 flex items-center justify-center gap-1 py-2 px-4 rounded-md text-white hover:bg-zinc-600 transition-colors"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainEvent
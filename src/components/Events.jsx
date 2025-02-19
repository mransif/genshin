import React, { useEffect } from 'react'
import GridDistortion from './ui/GridDistortion'
import TrueFocus from './ui/TrueFocus/TrueFocus';
import InfiniteMenu from './ui/InfiniteMenu/InfiniteMenu'
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import Lenis from '@studio-freight/lenis';
import { LayoutGrid } from "./ui/layout-grid";
import Button from './Button';
import { FaLocationArrow } from "react-icons/fa";





const Events = () => {

  useEffect(() => {
    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: true }); // Force scroll to top
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      image: '/img/p_1.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'Pretty cool, right? '
    },
    {
      image: '/img/p_2.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'there is no going back.'
    },
    {
      image: '/img/p_3.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'Roads are meant to be conquered.'
    },
    {
      image: '/img/p_4.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'A full tank and open roads—pure bliss.'
    },
    {
      image: '/img/p_5.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'Every car has a story to tell.'
    },
    {
      image: '/img/p_6.png',
      link: 'https://www.instagram.com/pistonia_mcet/',
      description: 'Drive it, love it, live it.'
    }
  ];

  const SkeletonOne = () => {
    return (
      (<div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Mr and Mrs Avishkar
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
      name: "Mr and Mrs Avishkar",
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
    <div className="relative w-full min-h-screen">
      {/* Hero Section with Grid Distortion */}
      <div className="h-screen relative flex items-center justify-center text-white text-4xl font-bold">
        <div className="absolute inset-0 -z-10">
          <GridDistortion
            imageSrc="/img/eagle.png"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="w-full h-full"
          />
        </div>
        <h1 className="relative">Welcome to Avishkar</h1>
      </div>

      {/* Pro Show Section */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-black gap-4 px-16 py-12 ">


        <DirectionAwareHover imageUrl='/img/8m_3.png'>
          <p className="font-bold text-xl">8EEN MUSIC</p>
        </DirectionAwareHover>
        <DirectionAwareHover imageUrl='/img/tc_3.png'>
          <p className="font-bold text-xl">THAMARASSERY CHURAM</p>
        </DirectionAwareHover>


      </div>

      {/* Auto Show Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-5xl font-bold">

        <div className='mb-4'>
          <TrueFocus
            sentence="Pistonia '25"
            manualMode={false}
            blurAmount={9}
            borderColor="purple"
            animationDuration={0.6}
            pauseBetweenAnimations={1}
          />
        </div>

        <div style={{ height: '500px', position: 'relative' }} className='border-[1px] rounded-md border-zinc-700 mx-2'>
          <InfiniteMenu className='rounded-lg' items={items} />
        </div>

      </div>

      
    </div>


  )
}

export default Events
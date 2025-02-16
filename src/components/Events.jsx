import React, { useEffect } from 'react'
import GridDistortion from './ui/GridDistortion'
import TrueFocus from './ui/TrueFocus/TrueFocus';
import InfiniteMenu from './ui/InfiniteMenu/InfiniteMenu'
import { DirectionAwareHover } from "./ui/direction-aware-hover";


const Events = () => {

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
      link: 'https://www.instagram.com/pistonia_mcet//',
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
  
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section with Grid Distortion */}
      <div className="h-screen relative flex items-center justify-center text-white text-4xl font-bold">
        <div className="absolute inset-0 -z-10">
          <GridDistortion
            imageSrc="/img/about.webp"
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

        <div className=' '>
          <TrueFocus
            sentence="Pistonia '25"
            manualMode={false}
            blurAmount={9}
            borderColor="purple"
            animationDuration={0.6}
            pauseBetweenAnimations={1}
          />
        </div>

        <div style={{ height: '500px', position: 'relative' }} className='p-5'>
          <InfiniteMenu className='rounded-lg' items={items} />
        </div>

      </div>

      {/* Main Events */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Main Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-6">
          {['Mr and Mrs Avishkar', 'Group Dance', 'Voice of Avishkar', 'Treasure Hunt'].map((event, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md text-lg font-semibold">
              {event}
            </div>
          ))}
        </div>
      </div>

      {/* Competitions by Department */}
      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center">Competitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: 'MCA', events: ['Capture the Flag', 'Code Relay', 'Tech Escape Room', 'Spot Mobile Photography']
            },
            {
              title: 'ECE', events: ['Tech Clash', 'Locked in Logic', '3s Football', 'Mini Militia: Solo War']
            },
            {
              title: 'Mechanical', events: ['Quiz', 'Engine Assembly', 'E-Football', 'Carrom']
            },
            {
              title: 'EEE', events: ['Electrical Quiz', 'Circuit Identification & Soldering', 'Hands And Feet Hopscotch', 'Arm Wrestling']
            },
            {
              title: 'CSE', events: ['Block of Code Arranging', 'Technical Quiz', 'BGMI Tournament', 'Valorant Tournament']
            },
            {
              title: 'Civil', events: ['Bridge It Up', 'Movie Truffle', 'House of Cup', 'Technical Quiz']
            }
          ].map((dept, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{dept.title}</h3>
              <ul className="list-disc list-inside">
                {dept.events.map((ev, i) => <li key={i}>{ev}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default Events
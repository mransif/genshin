import React, { useEffect } from 'react'
// import ShapeBlur from './ui/ShapeBlur'
import GridDistortion from './ui/GridDistortion'
import TiltedCard from './ui/TiltedCard/TiltedCard';

const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

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
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 px-6 py-12">

        <TiltedCard
          imageSrc="/img/8m_3.png"
          altText="8EEN MUSIC"
          captionText="8EEN MUSIC"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="text-white text-2xl md:text-3xl font-bold tracking-wide uppercase bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg">
              8EEN MUSIC
            </p>
          }
        /><TiltedCard
          imageSrc="/img/tc_3.png"
          altText="THAMARASSERY CHURAM"
          captionText="THAMARASSERY CHURAM"
          containerHeight="500px"
          containerWidth="500px"
          imageHeight="500px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-lg">
              THAMARASSERY CHURAM
            </p>
          }
        />
      </div>

      {/* Auto Show Section */}
      <div className="h-screen flex items-center justify-center bg-black text-white text-5xl font-bold">
        Pistonia '25
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
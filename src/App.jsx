import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import Events from './components/Events';
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "./components/ScrollToTop";
import MainEvent from './components/MainEvent';

const App = () => {

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.1, // Adjust smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  

  return (
    <Router>
      <ScrollToTop />
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        {/* <SplashCursor /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main-event" element={<MainEvent />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;

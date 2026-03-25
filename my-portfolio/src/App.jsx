import React, { useEffect } from 'react';
import Aurora from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrap');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
<div className="font-rajdhani text-gray-100" style={{ background: '#030712' }}>
      <Aurora />
      <Navbar />
      <div className="section-wrap"><Hero /></div>
      <div className="section-wrap"><About /></div>
      <div className="section-wrap"><Skills /></div>
      <div className="section-wrap"><Projects /></div>
      <div className="section-wrap"><Services /></div>
      <div className="section-wrap"><Achievements /></div>
      <div className="section-wrap"><Contact /></div>
     
      

      <Footer />
    </div>
  );
}

export default App;
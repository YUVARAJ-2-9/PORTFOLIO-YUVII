import React, { useEffect } from 'react';
import Aurora from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => {
      r.style.opacity = '0';
      r.style.transform = 'translateY(40px)';
      r.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(r);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: '#080810' }} className="text-gray-100 font-rajdhani">
      <Aurora />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[1000] px-[10%] py-4 flex justify-between items-center transition-all duration-300
      ${scrolled ? 'bg-[#080810]/95 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`}>
      <span className="font-orbitron font-black text-lg tracking-widest"
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        YK.DEV
      </span>
      <div className="flex gap-8">
        {['About','Skills','Projects','Achievements','Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
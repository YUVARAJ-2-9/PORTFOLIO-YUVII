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
      ${scrolled ? 'backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`}
      style={{ background: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent' }}>
     <span className="font-orbitron font-black text-lg tracking-widest">
  <span style={{ color: '#a855f7' }}>&lt;</span>
  <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Yuvaraj </span>
  <span style={{ color: '#ec4899' }}>/&gt;</span>
</span>
      <div className="flex gap-8">
        {['about','skills','projects','achievements','contact'].map(link => (
          <a key={link} href={`#${link}`}
            className="font-orbitron font-bold text-xs tracking-widest no-underline capitalize transition-all duration-200"
            style={{ color: '#555' }}
            onMouseEnter={e => { e.target.style.color = '#a855f7'; e.target.style.textShadow = '0 0 10px #a855f7'; }}
            onMouseLeave={e => { e.target.style.color = '#555'; e.target.style.textShadow = 'none'; }}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['about','skills','projects','services','achievements','contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 120;
      links.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActive(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] px-[6%] py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? 'backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`}
        style={{ background: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent' }}>

        {/* Logo */}
        <span className="font-orbitron font-black text-base tracking-widest">
          <span style={{ color: '#a855f7' }}>&lt;</span>
          <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Yuvaraj </span>
          <span style={{ color: '#ec4899' }}>/&gt;</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a key={link} href={`#${link}`}
              className="font-orbitron font-bold text-xs tracking-widest no-underline capitalize transition-all duration-300 relative pb-1"
              style={{ color: active === link ? '#a855f7' : '#555' }}
              onMouseEnter={e => e.target.style.color = '#a855f7'}
              onMouseLeave={e => e.target.style.color = active === link ? '#a855f7' : '#555'}>
              {link}
              {active === link && (
                <span style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '1px', background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                }} />
              )}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#a855f7', borderRadius: '2px' }} />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#a855f7', borderRadius: '2px' }} />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#a855f7', borderRadius: '2px' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[999] flex flex-col items-center gap-6 py-8"
            style={{ background: 'rgba(8,8,16,0.98)', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="font-orbitron font-bold text-sm tracking-widest no-underline capitalize"
                style={{ color: active === link ? '#a855f7' : '#888' }}>
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
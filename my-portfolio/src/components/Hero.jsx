import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Full Stack Developer', 'Frontend Developer', 'React Developer', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-[10%] relative z-10 gap-16 pt-20">

      <div className="absolute top-[-100px] right-[-50px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)' }} />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.08), transparent 70%)' }} />

      {/* LEFT */}
      <div className="flex-1 max-w-xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ border: '1px solid rgba(168,85,247,0.35)', background: 'rgba(168,85,247,0.07)' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-orbitron tracking-widest text-purple-300">AVAILABLE FOR INTERNSHIP</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-2">
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
          <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">Hey there, I'm</span>
        </motion.div>

       <motion.h1
  initial={{ opacity: 0, y: 60, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
  className="font-rajdhani font-black leading-none mb-4"
  style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', letterSpacing: '-2px' }}>
  <motion.span
    className="text-white inline-block"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}>
    Yuva
  </motion.span>
  <motion.span
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
    className="inline-block">
    raj K
  </motion.span>
</motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #a855f7, #ec4899)' }} />
          <span className="text-gray-300 text-xl font-rajdhani font-semibold tracking-wide">
            {displayed}<span className="text-purple-400 animate-blink ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
          2nd year CS student at KG College, Coimbatore — turning ideas into
          real web experiences. Passionate about clean code & great UI. 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex gap-4 flex-wrap mb-12">
          <a href="#projects"
            className="flex items-center gap-2 px-7 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', boxShadow: '0 4px 24px rgba(168,85,247,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 32px rgba(168,85,247,0.55)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(168,85,247,0.3)'}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          {/* Freelance Button */}
<motion.a
  href="#contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="flex items-center gap-2 px-7 py-3 rounded-full font-rajdhani font-bold text-base no-underline transition-all duration-300 relative overflow-hidden"
  style={{ border: '1px solid rgba(168,85,247,0.4)', color: '#f1f1f1' }}
  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.1)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'; }}
  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; }}>

  {/* Pulsing dot */}
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
      style={{ background: '#a855f7' }} />
    <span className="relative inline-flex rounded-full h-2 w-2"
      style={{ background: '#ec4899' }} />
  </span>

  Hire Me for Freelance
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
</motion.a>
          
          
        </motion.div>

        {/* Stats */}
    {/* Stats + Quote */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}>

  {/* Stats */}


  {/* MSD Quote */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 1.1 }}
    className="max-w-md"
    style={{
      borderLeft: '2px solid #a855f7',
      paddingLeft: '16px',
    }}>
    <p className="font-rajdhani text-sm leading-relaxed"
      style={{ color: 'rgba(168,85,247,0.7)' }}>
      "I'm not here to prove anyone how good I am"
    </p>
    <p className="text-xs mt-1 font-orbitron tracking-widest"
      style={{ color: 'rgba(236,72,153,0.5)' }}>
      — MS Dhoni 🐐
    </p>
  </motion.div>

</motion.div>
      </div>

      {/* RIGHT — Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex justify-center">
        <motion.div
          whileHover={{ boxShadow: '0 0 80px rgba(168,85,247,0.25)' }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md rounded-2xl overflow-hidden"
          style={{ background: '#0d0d18', border: '1px solid rgba(168,85,247,0.2)', boxShadow: '0 0 60px rgba(168,85,247,0.12)' }}>

          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-3"
            style={{ background: 'rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.15)' }}>
            <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-red-500/70" />
            <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <motion.div whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-orbitron text-gray-600 tracking-widest">yuvaraj.js</span>
          </div>

          {/* Code */}
          <div className="p-6 font-orbitron text-sm leading-loose">
            <p><span className="text-purple-400">const</span> <span className="text-pink-400">developer</span> <span className="text-gray-500">=</span> {'{'}</p>
            <div className="pl-5">
              {[
                ['name', '"Yuvaraj K"'],
                ['role', '"Full Stack Dev"'],
                ['college', '"KG College"'],
              ].map(([key, val], i) => (
                <motion.p key={key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}>
                  <span className="text-yellow-300">{key}</span>
                  <span className="text-gray-500">:</span>{' '}
                  <span className="text-green-400">{val}</span>
                  <span className="text-gray-600">,</span>
                </motion.p>
              ))}
              <p><span className="text-yellow-300">skills</span><span className="text-gray-500">:</span> [</p>
              <div className="pl-5">
                {['Java', 'React', 'JavaScript'].map((s, i) => (
                  <motion.p key={s}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}>
                    <span className="text-green-400">{s}</span><span className="text-gray-600">,</span>
                  </motion.p>
                ))}
              </div>
              <p>]<span className="text-gray-600">,</span></p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}>
                <span className="text-yellow-300">available</span><span className="text-gray-500">:</span> <span className="text-purple-400">true</span><span className="text-gray-600">,</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}>
                <span className="text-yellow-300">goal</span><span className="text-gray-500">:</span> <span className="text-green-400">"Land internship 🚀"</span>
              </motion.p>
            </div>
            <p>{'}'}</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-4 text-gray-600 text-xs">
              <span className="text-purple-500">{'>'}</span> Running on passion & caffeine ☕
            </motion.p>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2"
            style={{ background: 'rgba(168,85,247,0.06)', borderTop: '1px solid rgba(168,85,247,0.1)' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-orbitron text-green-400 tracking-wider">OPEN TO WORK</span>
            </div>
            <div className="flex gap-4">
              {[
                { href: 'https://github.com/YUVARAJ-2-9', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', fill: '#a855f7' },
                { href: 'mailto:yuvarajyuvaraj1417@gmail.com', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', stroke: '#ec4899' }
              ].map(({ href, d, fill, stroke }) => (
                <motion.a key={href} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  style={{ opacity: 0.5 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={fill || 'none'} stroke={stroke} strokeWidth="2"><path d={d} /></svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
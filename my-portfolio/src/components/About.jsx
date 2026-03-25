import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">Who am I</span>
      </div>
      <p className="section-title">About Me</p>
      <div className="section-line" />
    </motion.div>

    <div className="grid grid-cols-2 gap-16 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}>
        <p className="text-gray-300 leading-relaxed text-lg mb-5">
          Hey! I'm <span className="text-purple-400 font-bold">Yuvaraj K</span> — a 2nd year
          Computer Science student at KG College of Arts & Science, Coimbatore.
        </p>
        <p className="text-gray-500 leading-relaxed mb-5">
          I'm passionate about building beautiful, functional web experiences.
          My journey started with college coursework — but I quickly fell in love
          with React and started building real projects on my own.
        </p>
        <p className="text-gray-500 leading-relaxed mb-10">
          I won a college-level Python Hackathon 🏆, and I'm actively looking for
          internship opportunities where I can contribute, grow, and learn from
          experienced developers.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            ['🎓', 'College', 'KG College of Arts & Science'],
            ['📍', 'Location', 'Coimbatore, Tamil Nadu'],
            ['💼', 'Status', 'Open to Internships'],
            ['🎯', 'Goal', 'Full Stack / Frontend Dev'],
          ].map(([icon, label, value], i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl"
              style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.12)' }}>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{icon} {label}</p>
              <p className="text-sm text-gray-300 font-semibold">{value}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-10">
          {[['2+','Projects Built'],['1','Hackathon Won'],['4','Technologies']].map(([num, label], i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}>
              <p className="font-rajdhani font-black text-3xl"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{num}</p>
              <p className="text-gray-600 text-xs mt-1 tracking-wider uppercase">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right — Fun Facts */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="space-y-4">

  <div className="flex items-center gap-3 mb-8">
    <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.5), transparent)' }} />
    <span className="font-orbitron text-xs text-purple-400 tracking-widest">FUN FACTS</span>
    <div className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(168,85,247,0.5), transparent)' }} />
  </div>

  {[
    {
      number: '01',
      emoji: '🏏',
      title: 'Cricket Addict',
      fact: 'Batting, bowling, watching — full all-rounder. Cricket mode always ON!',
    },
    {
      number: '02',
      emoji: '🎵',
      title: 'Music Lover',
      fact: 'Tamil, English, Hip-hop, Lo-fi — no boundaries. Music is my coding fuel!',
    },
    {
      number: '03',
      emoji: '🐐',
      title: 'MSD Fan',
      fact: '"Not here to prove anyone how good I am." Daily motivation fr fr!',
    },
  ].map(({ number, emoji, title, fact }, i) => (
    <motion.div
      key={number}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ x: 6 }}
      className="flex items-start gap-5 p-5 rounded-2xl cursor-default group"
      style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.1)', transition: 'border-color 0.3s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(168,85,247,0.1)'}>

      {/* Number */}
      <span className="font-orbitron font-black text-xs flex-shrink-0 mt-1"
        style={{ color: 'rgba(168,85,247,0.3)' }}>
        {number}
      </span>

      {/* Emoji */}
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
        transition={{ duration: 0.4 }}
        style={{ fontSize: '22px', flexShrink: 0 }}>
        {emoji}
      </motion.span>

      {/* Content */}
      <div>
        <p className="font-orbitron font-bold text-xs text-white mb-1 tracking-wider">{title}</p>
        <p className="text-gray-500 text-xs leading-relaxed">{fact}</p>
      </div>
    </motion.div>
  ))}

  {/* Bottom quote */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    viewport={{ once: true }}
    className="pt-4 text-center">
    <p className="text-xs font-orbitron tracking-widest"
      style={{ color: 'rgba(168,85,247,0.3)' }}>
      🚀 BIG DREAMER. ZERO LIMITS.
    </p>
  </motion.div>

</motion.div>
      

    
    </div>
  </section>
);

export default About;
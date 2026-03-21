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

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span style={{ fontSize: '22px' }}>🎯</span>
          <h3 className="font-orbitron font-bold text-sm text-purple-300 tracking-widest">
            FUN FACTS ABOUT ME
          </h3>
        </div>

        {[
          {
            emoji: '🏏',
            fact: 'Cricket is life da! Batting, bowling, fielding — full all-rounder. On the field or on the couch watching — cricket mode always ON! 🔥',
            color: 'rgba(168,85,247,0.08)',
            border: 'rgba(168,85,247,0.2)'
          },
          {
            emoji: '🎵',
            fact: 'No genre boundaries — Tamil, English, Hip-hop, Lo-fi... if the vibe is right, it\'s on repeat. Music is my coding fuel! 🎧',
            color: 'rgba(236,72,153,0.06)',
            border: 'rgba(236,72,153,0.2)'
          },
          {
            emoji: '🚀',
            fact: 'Big dreamer. Started from zero, learning every single day. One day — building something used by millions. Watch this space! 💫',
            color: 'rgba(168,85,247,0.08)',
            border: 'rgba(168,85,247,0.2)'
          },
          {
            emoji: '📚',
            fact: 'Love learning new things — tech, life, people. Every day is a new update to install. Currently learning: how to be the best version of myself! 🌱',
            color: 'rgba(236,72,153,0.06)',
            border: 'rgba(236,72,153,0.2)'
          },
          {
            emoji: '🐐',
            fact: '"I\'m not here to prove anyone how good I am." — MS Dhoni. This quote hits different every single time. Just do your thing! 🙌',
            color: 'rgba(168,85,247,0.08)',
            border: 'rgba(168,85,247,0.2)'
          },
        ].map(({ emoji, fact, color, border }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 6 }}
            className="flex items-start gap-4 p-4 rounded-xl cursor-default"
            style={{ background: color, border: `1px solid ${border}` }}>
            <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{emoji}</span>
            <p className="text-gray-400 text-sm leading-relaxed">{fact}</p>
          </motion.div>
        ))}

      </motion.div>
    </div>
  </section>
);

export default About;
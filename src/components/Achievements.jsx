import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => (
  <section id="achievements" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">My wins</span>
      </div>
      <p className="section-title">Achievements</p>
      <div className="section-line" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: '0 0 50px rgba(168,85,247,0.2)' }}
      className="rounded-2xl p-10 flex items-center gap-10"
      style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))', border: '1px solid rgba(168,85,247,0.2)' }}>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="text-6xl flex-shrink-0">
        🏆
      </motion.div>

      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-orbitron font-black text-2xl mb-3 text-white">
          Python Hackathon —{' '}
          <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Winner 🥇
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed mb-5">
          Won 1st place and prize of <span className="text-pink-400 font-bold">₹5,000</span> at
          KG College Python Hackathon. Built a To-Do List app under time pressure.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 text-sm font-orbitron rounded-full text-purple-300 inline-block"
          style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)' }}>
          KG College of Arts & Science
        </motion.span>
      </div>
    </motion.div>
  </section>
);

export default Achievements;
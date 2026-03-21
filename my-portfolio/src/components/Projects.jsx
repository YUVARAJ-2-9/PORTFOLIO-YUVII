import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'eCampus Website',
    desc: 'Full-featured campus management app with student dashboard, notices board, and academic portal.',
    tech: ['MERN stack'],
    emoji: '🏫',
    github: 'https://github.com/YUVARAJ-2-9',
    status: 'Completed',
    color: '#a855f7'
  },
  {
    title: 'Medicine Reminder',
    desc: 'Smart medicine tracker with notification system to manage daily medication schedules.',
    tech: ['MERN Stack'],
    emoji: '💊',
    github: 'https://github.com/YUVARAJ-2-9',
    status: 'Completed',
    color: '#ec4899'
  },
  {
    title: 'To-Do List App',
    desc: 'Hackathon winning Python app — built under pressure with full CRUD and task management.',
    tech: ['Python'],
    emoji: '✅',
    github: 'https://github.com/YUVARAJ-2-9',
    status: '🏆 Hackathon Winner',
    color: '#a855f7'
  },
  {
    title: 'Coming Soon',
    desc: 'Next project loading... Something exciting is being built! Stay tuned. 🚀',
    tech: ['React', 'Node.js'],
    emoji: '⚡',
    github: 'https://github.com/YUVARAJ-2-9',
    status: 'In Progress',
    color: '#ec4899'
  },
];

// Duplicate for infinite loop
const allProjects = [...projects, ...projects, ...projects];

const ProjectCard = ({ project }) => {
  const { title, desc, tech, emoji, github, status, color } = project;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: `0 20px 40px ${color}30`, borderColor: `${color}55` }}
      className="rounded-2xl p-6 flex flex-col flex-shrink-0"
      style={{
        width: '300px',
        background: '#0f0f1a',
        border: '1px solid rgba(168,85,247,0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>

      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`
      }} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${color}18`, border: `1px solid ${color}33` }}>
          {emoji}
        </motion.div>
        <span className="text-xs font-orbitron px-3 py-1 rounded-full"
          style={{ background: `${color}18`, border: `1px solid ${color}33`, color }}>
          {status}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-orbitron font-bold text-sm mb-2" style={{ color }}>
        {title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{desc}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <span key={t} className="px-2 py-1 text-xs font-orbitron rounded-full"
            style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}>
            {t}
          </span>
        ))}
      </div>

      {/* GitHub */}
      <motion.a
        href={github} target="_blank" rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron no-underline text-gray-300 w-fit"
        style={{ border: '1px solid rgba(168,85,247,0.25)' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        GitHub
      </motion.a>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="min-h-screen flex flex-col justify-center py-24 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-[10%]">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">What I built</span>
      </div>
      <p className="section-title">Projects</p>
      <div className="section-line" />
    </motion.div>

    {/* Infinite scroll belt */}
    <div style={{ overflow: 'hidden', position: 'relative' }}>

      {/* Left fade */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(90deg, #080810, transparent)',
        pointerEvents: 'none'
      }} />

      {/* Right fade */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(270deg, #080810, transparent)',
        pointerEvents: 'none'
      }} />

      {/* Moving track */}
      <motion.div
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex gap-6 py-4"
        style={{ width: 'max-content', paddingLeft: '24px' }}>
        {allProjects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </motion.div>
    </div>

    {/* Bottom note */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center text-gray-700 text-xs font-orbitron tracking-widest mt-8 px-[10%]">
      * More projects coming soon — stay tuned! 🚀
    </motion.p>

  </section>
);

export default Projects;
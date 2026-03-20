import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'eCampus Website',
    desc: 'A full-featured campus management web app with student dashboard, notices board, and academic information portal.',
    longDesc: 'Built with React.js — features include responsive design, dynamic content rendering, and clean UI/UX.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    emoji: '🏫', github: 'https://github.com/YUVARAJ-2-9', live: null, status: 'Completed'
  },
  {
    title: 'Medicine Reminder',
    desc: 'Smart medicine tracker with notification system to help users manage their daily medication schedules.',
    longDesc: 'Python-based app with scheduling logic, alert system, and clean interface focused on accessibility.',
    tech: ['Python', 'HTML', 'CSS'],
    emoji: '💊', github: 'https://github.com/YUVARAJ-2-9', live: null, status: 'Completed'
  },
  {
    title: 'To-Do List App',
    desc: 'Hackathon winning Python app — built under time pressure with full CRUD operations and clean task management UI.',
    longDesc: 'Won ₹5,000 prize at KG College Python Hackathon. Features task creation, tracking, and persistent storage.',
    tech: ['Python'],
    emoji: '✅', github: 'https://github.com/YUVARAJ-2-9', live: null, status: '🏆 Hackathon Winner'
  },
];

const TiltCard = ({ project, index }) => {
  const card = useRef(null);
  const { title, desc, longDesc, tech, emoji, github, live, status } = project;

  const handleMove = (e) => {
    const rect = card.current.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -6;
    const rotY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
    card.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  return (
    <motion.div
      ref={card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMove}
      onMouseLeave={() => { card.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'; card.current.style.boxShadow = 'none'; }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(168,85,247,0.2)'}
      className="rounded-2xl p-6 flex flex-col transition-all duration-150"
      style={{ background: '#0f0f1a', border: '1px solid rgba(168,85,247,0.15)' }}>

      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
          {emoji}
        </div>
        <span className="text-xs font-orbitron px-3 py-1 rounded-full"
          style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', color: '#c084fc' }}>
          {status}
        </span>
      </div>

      <h3 className="font-orbitron font-bold text-base mb-2 text-purple-300">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
      <p className="text-gray-600 text-xs leading-relaxed mb-5">{longDesc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs font-orbitron rounded-full text-purple-300"
            style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>{t}</span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a href={github} target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron no-underline transition-all duration-200 text-gray-300"
          style={{ border: '1px solid rgba(168,85,247,0.25)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.1)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.25)'; }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#a855f7">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </a>
        {live ? (
          <a href={live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron no-underline text-white"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
            Live ↗
          </a>
        ) : (
          <span className="flex items-center px-4 py-2 rounded-full text-xs font-orbitron text-gray-600"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">What I built</span>
      </div>
      <p className="section-title">Projects</p>
      <div className="section-line" />
    </motion.div>
    <div className="grid grid-cols-3 gap-6">
      {projects.map((p, i) => <TiltCard key={p.title} project={p} index={i} />)}
    </div>
  </section>
);

export default Projects;
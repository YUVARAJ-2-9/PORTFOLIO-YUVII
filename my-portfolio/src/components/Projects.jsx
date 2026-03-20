import React, { useRef } from 'react';

const projects = [
  { title: 'eCampus Website', desc: 'Full-featured campus management app with student dashboard and academic portal.', tech: ['React','HTML','CSS','JS'], emoji: '🏫' },
  { title: 'Medicine Reminder', desc: 'Smart medicine tracker with notification system for daily medication schedules.', tech: ['Python','HTML','CSS'], emoji: '💊' },
  { title: 'To-Do List App', desc: 'Hackathon winning Python app with CRUD operations and clean task management.', tech: ['Python'], emoji: '✅' },
];

const TiltCard = ({ project: { title, desc, tech, emoji } }) => {
  const card = useRef(null);

  const handleMove = (e) => {
    const rect = card.current.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8;
    const rotY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8;
    card.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  return (
    <div ref={card} onMouseMove={handleMove}
      onMouseLeave={() => { card.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'; card.current.style.boxShadow = 'none'; }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(168,85,247,0.2)'}
      className="rounded-2xl p-7 transition-all duration-100"
      style={{ background: '#0f0f1a', border: '1px solid rgba(168,85,247,0.15)' }}>
      <div className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)' }}>
        {emoji}
      </div>
      <h3 className="font-orbitron font-bold text-base mb-2 tracking-wide text-purple-300">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs font-orbitron rounded-full text-purple-300"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)' }}>{t}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="px-[10%] py-20 relative z-10">
    <p className="section-title reveal">Projects</p>
    <div className="section-line reveal" />
    <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map(p => <TiltCard key={p.title} project={p} />)}
    </div>
  </section>
);

export default Projects;
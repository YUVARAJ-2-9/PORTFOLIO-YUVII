import React from 'react';

const skills = [
  { name: 'React.js', level: 75, color: '#a855f7' },
  { name: 'JavaScript', level: 70, color: '#ec4899' },
  { name: 'HTML & CSS', level: 85, color: '#a855f7' },
  { name: 'Python', level: 72, color: '#ec4899' },
  { name: 'Java', level: 65, color: '#a855f7' },
  { name: 'SQL', level: 60, color: '#ec4899' },
];

const Skills = () => (
  <section id="skills" className="px-[10%] py-20 relative z-10">
    <p className="section-title reveal">Skills</p>
    <div className="section-line reveal" />
    <div className="reveal grid grid-cols-2 gap-5">
      {skills.map(({ name, level, color }) => (
        <div key={name} className="rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
          style={{ background: '#0f0f1a', border: '1px solid rgba(168,85,247,0.1)' }}>
          <div className="flex justify-between mb-3">
            <span className="font-bold text-base text-gray-200">{name}</span>
            <span className="text-gray-500 text-sm font-orbitron">{level}%</span>
          </div>
          <div className="rounded-full h-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="h-full rounded-full"
              style={{ width: `${level}%`, background: `linear-gradient(90deg, #a855f7, #ec4899)` }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend', icon: '🎨',
    skills: [
      { name: 'React.js', level: 75, icon: '⚛️' },
      { name: 'JavaScript', level: 70, icon: '🟨' },
      { name: 'HTML5', level: 88, icon: '🌐' },
      { name: 'CSS3 / Tailwind', level: 82, icon: '🎨' },
    ]
  },
  {
    title: 'Backend & Languages', icon: '⚙️',
    skills: [
      { name: 'Python', level: 72, icon: '🐍' },
      { name: 'Java', level: 65, icon: '☕' },
      { name: 'C / C++', level: 60, icon: '💻' },
      { name: 'SQL', level: 63, icon: '🗄️' },
    ]
  },
  {
    title: 'Tools & Others', icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 70, icon: '🐙' },
      { name: 'VS Code', level: 90, icon: '📝' },
      { name: 'Figma (Basic)', level: 45, icon: '🖼️' },
      { name: 'REST APIs', level: 55, icon: '🔗' },
    ]
  }
];

const Skills = () => (
  <section id="skills" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">What I know</span>
      </div>
      <p className="section-title">Skills</p>
      <div className="section-line" />
    </motion.div>

    <div className="grid grid-cols-3 gap-6">
      {skillGroups.map(({ title, icon, skills }, groupIndex) => (
        <motion.div key={title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(168,85,247,0.4)', boxShadow: '0 0 30px rgba(168,85,247,0.1)' }}
          className="rounded-2xl p-6"
          style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.15)' }}>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">{icon}</span>
            <h3 className="font-orbitron font-bold text-sm text-purple-300 tracking-wider">{title}</h3>
          </div>

          <div className="space-y-4">
            {skills.map(({ name, level, icon: skillIcon }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.15 + i * 0.08 }}
                viewport={{ once: true }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{skillIcon}</span>
                    <span className="text-gray-300 text-sm font-semibold">{name}</span>
                  </div>
                  <span className="text-xs font-orbitron text-purple-400">{level}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: groupIndex * 0.15 + i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
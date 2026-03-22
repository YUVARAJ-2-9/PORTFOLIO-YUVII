import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { icon: '🎨', title: 'Frontend Development', desc: 'Building responsive, modern web interfaces using React.js, HTML5, CSS3 and Tailwind. Focus on clean UI and smooth UX.', tags: ['React', 'Tailwind', 'JavaScript'] },
  { icon: '🐍', title: 'Python Development', desc: 'Scripting, automation, and building Python-based applications. From simple scripts to full featured tools.', tags: ['Python', 'Automation', 'Scripts'] },
  { icon: '🗄️', title: 'Database Design', desc: 'Designing and querying relational databases using SQL and MySQL for structured data management.', tags: ['SQL', 'MySQL', 'Database'] },
  { icon: '📱', title: 'Responsive Design', desc: 'Making websites look great on all devices — mobile, tablet, and desktop using modern CSS and Tailwind.', tags: ['CSS', 'Tailwind', 'Mobile First'] },
];

const Services = () => (
  <section id="services" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">What I offer</span>
      </div>
      <p className="section-title">Services</p>
      <div className="section-line" />
    </motion.div>

    <div className="grid grid-cols-2 gap-6">
      {services.map(({ icon, title, desc, tags }, i) => (
        <motion.div key={title}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168,85,247,0.15)', borderColor: 'rgba(168,85,247,0.35)' }}
          className="rounded-2xl p-7 cursor-default"
          style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.15)' }}>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
            {icon}
          </motion.div>
          <h3 className="font-orbitron font-bold text-base text-white mb-3">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-orbitron rounded-full text-pink-300"
                style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.2)' }}>{tag}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);


export default Services;
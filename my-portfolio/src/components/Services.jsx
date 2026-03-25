import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    number: '01',
    title: 'Full Stack Web Development',
    subtitle: 'MERN Stack',
    desc: 'End-to-end web applications using MongoDB, Express.js, React, and Node.js. From database design to beautiful frontend — complete solutions delivered.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    highlights: ['REST API Development', 'Database Design', 'Authentication', 'Deployment'],
    color: '#a855f7'
  },
  {
    icon: '🎨',
    number: '02',
    title: 'Frontend Development',
    subtitle: 'React + Tailwind',
    desc: 'Pixel-perfect, responsive, and animated web interfaces. Clean code, smooth interactions, and great user experience — exactly how you imagined it.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    highlights: ['Responsive Design', 'Animations', 'Component Library', 'Performance'],
    color: '#ec4899'
  },
];

const Services = () => (
  <section id="services" className="min-h-screen flex flex-col justify-center px-[6%] md:px-[10%] py-24 relative z-10">

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

    <div className="flex flex-col gap-6">
      {services.map(({ icon, number, title, subtitle, desc, tags, highlights, color }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          whileHover={{ borderColor: `${color}44`, boxShadow: `0 0 40px ${color}12` }}
          className="rounded-2xl p-7 md:p-8 relative overflow-hidden"
          style={{ background: 'rgba(168,85,247,0.03)', border: '1px solid rgba(168,85,247,0.12)' }}>

          {/* Top glow line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '1.5px',
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              transformOrigin: 'left'
            }} />

          {/* Number bg */}
          <span className="absolute right-8 top-6 font-orbitron font-black"
            style={{ fontSize: '5rem', color: `${color}08`, lineHeight: 1 }}>
            {number}
          </span>

          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  {icon}
                </motion.div>
                <div>
                  <p className="font-orbitron font-black text-base text-white">{title}</p>
                  <p className="text-xs font-orbitron tracking-widest mt-0.5" style={{ color }}>{subtitle}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-lg">{desc}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1 text-xs font-orbitron rounded-full"
                    style={{ background: `${color}10`, border: `1px solid ${color}25`, color }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="md:w-56 flex-shrink-0">
              <p className="text-xs font-orbitron text-gray-600 tracking-widest mb-3 uppercase">
                What you get
              </p>
              <div className="space-y-2">
                {highlights.map((h, idx) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: color }} />
                    <span className="text-gray-400 text-xs font-rajdhani">{h}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${color}40` }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-xs font-orbitron font-bold no-underline text-white"
                style={{ background: `linear-gradient(135deg, #a855f7, #ec4899)` }}>
                Hire Me
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-10 text-center">
      <p className="text-xs font-orbitron text-gray-700 tracking-widest">
        💬 HAVE A PROJECT IN MIND?{' '}
        <a href="#contact" className="no-underline" style={{ color: '#a855f7' }}>
          LET'S TALK →
        </a>
      </p>
    </motion.div>

  </section>
);

export default Services;
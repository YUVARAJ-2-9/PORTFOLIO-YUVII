import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend', icon: '🎨',
    skills: [
      { name: 'React.js', level: 75, icon: '⚛️' },
      { name: 'JavaScript', level: 70, icon: '🟨' },
      { name: 'HTML5', level: 85, icon: '🌐' },
    ]
  },
  {
    title: 'Backend & Database', icon: '⚙️',
    skills: [
      { name: 'Java', level: 65, icon: '☕' },
      { name: 'MongoDB', level: 55, icon: '🍃' },
      { name: 'SQL', level: 60, icon: '🗄️' },
    ]
  },
  {
    title: 'Tools', icon: '🛠️',
    skills: [
      { name: 'VS Code', level: 90, icon: '📝' },
      { name: 'Postman', level: 65, icon: '📮' },
      { name: 'Git & GitHub', level: 70, icon: '🐙' },
    ]
  }
];

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}%</span>;
};

const SkillBar = ({ name, level, icon: skillIcon, groupIndex, i }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: groupIndex * 0.1 + i * 0.1 }}>

      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 + i * 0.1, type: 'spring', stiffness: 200 }}
            style={{ fontSize: '18px', display: 'inline-block' }}>
            {skillIcon}
          </motion.span>
          <span className="text-gray-300 text-sm font-semibold">{name}</span>
        </div>
        <span className="text-xs font-orbitron text-purple-400">
          <CountUp target={level} />
        </span>
      </div>

      {/* Track */}
      <div className="h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}>

        {/* Animated fill */}
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2 + groupIndex * 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}>

          {/* Glow trail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: [0, 1, 0] } : {}}
            transition={{ duration: 1.2, delay: 0.2 + groupIndex * 0.1 + i * 0.1 }}
            style={{
              position: 'absolute', right: 0, top: 0, bottom: 0,
              width: '40px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6))',
              borderRadius: '99px'
            }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: groupIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            boxShadow: '0 20px 40px rgba(168,85,247,0.15)',
            borderColor: 'rgba(168,85,247,0.4)'
          }}
          className="rounded-2xl p-6"
          style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.15)', transition: 'border-color 0.3s' }}>

          {/* Card header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 pb-4"
            style={{ borderBottom: '1px solid rgba(168,85,247,0.1)' }}>
            <motion.span
              whileHover={{ rotate: 20, scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ fontSize: '24px', display: 'inline-block' }}>
              {icon}
            </motion.span>
            <h3 className="font-orbitron font-bold text-sm text-purple-300 tracking-wider">{title}</h3>
          </motion.div>

          {/* Skills */}
          <div className="space-y-5">
            {skills.map(({ name, level, icon: skillIcon }, i) => (
              <SkillBar
                key={name}
                name={name}
                level={level}
                icon={skillIcon}
                groupIndex={groupIndex}
                i={i}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom note */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center text-gray-700 text-xs font-orbitron tracking-widest mt-10">
      * Honest skill levels — always improving every day 🚀
    </motion.p>

  </section>
);

export default Skills;
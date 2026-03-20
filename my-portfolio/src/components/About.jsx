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

      {/* Right — Code block */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ boxShadow: '0 0 40px rgba(168,85,247,0.15)' }}
        className="rounded-2xl p-7 font-orbitron text-sm leading-loose"
        style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.18)' }}>
        <p className="text-gray-600 text-xs mb-4 tracking-widest">// about_me.js</p>
        <p><span className="text-purple-400">const</span> <span className="text-pink-400">yuvaraj</span> = {'{'}</p>
        <div className="pl-5">
          {[
            ['name', '"Yuvaraj K"'],
            ['age', '19', true],
            ['college', '"KG College"'],
            ['year', '"2nd Year CS"'],
            ['passion', '"Building cool stuff"'],
          ].map(([key, val, isNum], i) => (
            <motion.p key={key}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              viewport={{ once: true }}>
              <span className="text-yellow-300">{key}</span>
              <span className="text-gray-500">: </span>
              <span className={isNum ? 'text-orange-300' : 'text-green-400'}>{val}</span>
              <span className="text-gray-600">,</span>
            </motion.p>
          ))}
          <p><span className="text-yellow-300">hobbies</span><span className="text-gray-500">:</span> [</p>
          <div className="pl-5">
            {['"Coding"', '"Problem Solving"', '"Learning new tech"'].map((h, i) => (
              <motion.p key={h}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                viewport={{ once: true }}>
                <span className="text-green-400">{h}</span><span className="text-gray-600">,</span>
              </motion.p>
            ))}
          </div>
          <p>]<span className="text-gray-600">,</span></p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            viewport={{ once: true }}>
            <span className="text-yellow-300">available</span><span className="text-gray-500">: </span>
            <span className="text-purple-400">true</span>
          </motion.p>
        </div>
        <p>{'}'}</p>
        <p className="mt-4 text-gray-700 text-xs">
          <span className="text-purple-500">{'>'}</span> Always learning, always building 💡
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
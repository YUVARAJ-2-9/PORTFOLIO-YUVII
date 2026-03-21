import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center px-[10%] py-24 relative z-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">Get in touch</span>
        <div className="h-px w-10" style={{ background: 'linear-gradient(270deg, transparent, #a855f7)' }} />
      </div>
      <p className="section-title text-center">Let's Connect</p>
      <div className="section-line mx-auto" />
    </motion.div>

    {/* Freelance CTA Card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto rounded-2xl p-8 mb-10 text-center"
      style={{
        background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))',
        border: '1px solid rgba(168,85,247,0.2)'
      }}>
      <div className="text-4xl mb-4">💼</div>
      <h3 className="font-orbitron font-black text-xl text-white mb-3">
        Open for{' '}
        <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Freelance
        </span>
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        Need a website, web app, or Python tool? Let's build something amazing together!
        Fast delivery, clean code, and great communication guaranteed. 🚀
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['React Websites', 'Landing Pages', 'Python Scripts', 'UI/UX Design'].map(s => (
          <span key={s} className="px-3 py-1 text-xs font-orbitron rounded-full text-purple-300"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)' }}>
            {s}
          </span>
        ))}
      </div>
      <motion.a
        href="mailto:yuvarajyuvaraj1417@gmail.com?subject=Freelance%20Project%20Enquiry"
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline"
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', boxShadow: '0 4px 20px rgba(168,85,247,0.3)' }}>
        💬 Let's Work Together
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </motion.a>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed mb-10">
      Open to internship opportunities! Feel free to reach out — I'd love to connect. 🚀
    </motion.p>

    {/* Buttons with icons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex justify-center gap-4 flex-wrap mb-16">

      {/* Email */}
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
        whileTap={{ scale: 0.97 }}
        href="mailto:yuvarajyuvaraj1417@gmail.com"
        className="flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline"
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
        {/* Email SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        Email Me
      </motion.a>

      {/* GitHub */}
      <motion.a
        whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.8)', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
        whileTap={{ scale: 0.97 }}
        href="https://github.com/YUVARAJ-2-9" target="_blank" rel="noreferrer"
        className="flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base no-underline text-gray-300"
        style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
        {/* GitHub SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#a855f7">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        GitHub
      </motion.a>

      {/* Instagram */}
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236,72,153,0.5)' }}
        whileTap={{ scale: 0.97 }}
        href="https://www.instagram.com/yuvaraj._.29/" target="_blank" rel="noreferrer"
        className="flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline"
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
        {/* Instagram SVG */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
        </svg>
        Instagram
      </motion.a>
    </motion.div>

    {/* Contact info cards */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="flex justify-center gap-6 mb-16">
      {[
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          ),
          label: 'Email',
          value: 'yuvarajyuvaraj1417@gmail.com'
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          ),
          label: 'Location',
          value: 'Coimbatore, Tamil Nadu'
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#a855f7">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          ),
          label: 'GitHub',
          value: 'YUVARAJ-2-9'
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#ec4899" stroke="none"/>
            </svg>
          ),
          label: 'Instagram',
          value: '@yuvaraj._.29'
        },
      ].map(({ icon, label, value }, i) => (
        <motion.div key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(168,85,247,0.4)', boxShadow: '0 0 20px rgba(168,85,247,0.1)', y: -4 }}
          className="px-6 py-4 rounded-2xl text-center"
          style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.12)' }}>
          <div className="flex justify-center mb-2">{icon}</div>
          <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{label}</p>
          <p className="text-sm text-gray-300 font-semibold">{value}</p>
        </motion.div>
      ))}
    </motion.div>

  </section>
);

export default Contact;
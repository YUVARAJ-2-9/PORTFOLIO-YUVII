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

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed mb-10">
      Open to internship opportunities! Feel free to reach out — I'd love to connect. 🚀
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex justify-center gap-4 flex-wrap mb-16">
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
        whileTap={{ scale: 0.97 }}
        href="mailto:yuvarajyuvaraj1417@gmail.com"
        className="flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline"
        style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
        📧 Email Me
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05, borderColor: 'rgba(168,85,247,0.8)', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
        whileTap={{ scale: 0.97 }}
        href="https://github.com/YUVARAJ-2-9" target="_blank" rel="noreferrer"
        className="flex items-center gap-2 px-8 py-3 rounded-full font-rajdhani font-bold text-base no-underline text-gray-300"
        style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
        GitHub ↗
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
        { icon: '📧', label: 'Email', value: 'yuvarajyuvaraj1417@gmail.com' },
        { icon: '📍', label: 'Location', value: 'Coimbatore, Tamil Nadu' },
        { icon: '🐙', label: 'GitHub', value: 'YUVARAJ-2-9' },
      ].map(({ icon, label, value }, i) => (
        <motion.div key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(168,85,247,0.4)', boxShadow: '0 0 20px rgba(168,85,247,0.1)' }}
          className="px-6 py-4 rounded-2xl text-center"
          style={{ background: 'rgba(168,85,247,0.04)', border: '1px solid rgba(168,85,247,0.12)' }}>
          <p className="text-2xl mb-2">{icon}</p>
          <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{label}</p>
          <p className="text-sm text-gray-300 font-semibold">{value}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 px-[10%] py-16 text-center"
    style={{ borderTop: '1px solid rgba(168,85,247,0.1)' }}>

    <motion.p
      whileHover={{ scale: 1.05 }}
      className="font-orbitron font-black text-2xl tracking-widest mb-4 cursor-default"
      style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      YK.DEV
    </motion.p>

    <p className="text-gray-600 text-sm mb-8 max-w-md mx-auto">
      Open to internship opportunities — let's build something amazing together!
    </p>

    <div className="flex justify-center gap-4 mb-10">
      {[
        { href: 'https://github.com/YUVARAJ-2-9', label: 'GitHub', d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', fill: true },
        { href: 'mailto:yuvarajyuvaraj1417@gmail.com', label: 'Email', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', fill: false },
      ].map(({ href, label, d, fill }) => (
        <motion.a key={label} href={href} target="_blank" rel="noreferrer"
          title={label}
          whileHover={{ scale: 1.2, boxShadow: '0 0 16px rgba(168,85,247,0.4)' }}
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ border: '1px solid rgba(168,85,247,0.2)', background: 'rgba(168,85,247,0.05)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={fill ? '#a855f7' : 'none'}
            stroke={fill ? 'none' : '#a855f7'}
            strokeWidth="2" strokeLinecap="round">
            <path d={d} />
          </svg>
        </motion.a>
      ))}
    </div>

    <div style={{ borderTop: '1px solid rgba(168,85,247,0.08)' }} className="pt-8">
      <p className="text-gray-700 text-xs font-orbitron tracking-widest">
        © 2024 YUVARAJ K — BUILT WITH REACT + TAILWIND + FRAMER MOTION ⚡
      </p>
    </div>
  </motion.footer>
);

export default Footer;
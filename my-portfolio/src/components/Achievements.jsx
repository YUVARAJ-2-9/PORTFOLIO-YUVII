import React from 'react';

const Achievements = () => (
  <section id="achievements" className="px-[10%] py-20 relative z-10">
    <p className="section-title reveal">Achievements</p>
    <div className="section-line reveal" />
    <div className="reveal rounded-2xl p-10 flex items-center gap-10"
      style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))', border: '1px solid rgba(168,85,247,0.2)' }}>
      <div className="text-6xl flex-shrink-0 animate-float">🏆</div>
      <div>
        <h3 className="font-orbitron font-black text-2xl mb-3 text-white">
          Python Hackathon —{' '}
          <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Winner 🥇
          </span>
        </h3>
        <p className="text-gray-400 leading-relaxed mb-5">
          Won 1st place and prize of <span className="text-pink-400 font-bold">₹5,000</span> at
          KG College Python Hackathon. Built a To-Do List app under time pressure.
        </p>
        <span className="px-4 py-1.5 text-sm font-orbitron rounded-full text-purple-300"
          style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)' }}>
          KG College of Arts & Science
        </span>
      </div>
    </div>
  </section>
);

export default Achievements;
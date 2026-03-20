import React, { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'Frontend Developer', 'React Developer', 'Problem Solver'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center px-[10%] relative z-10 gap-16">

      {/* ── LEFT ── */}
      <div className="flex-1">

        {/* Greeting line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
          <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">
            Hey there, I'm
          </span>
        </div>

        {/* Name — big, bold, unique */}
        <h1 className="font-rajdhani font-black mb-2 leading-none"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', letterSpacing: '-2px' }}>
          <span className="text-white">Yuva</span>
          <span style={{
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>raj K</span>
        </h1>

        {/* Role typing */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full"
            style={{ background: 'linear-gradient(180deg, #a855f7, #ec4899)' }} />
          <span className="text-gray-300 text-xl font-rajdhani font-semibold tracking-wide">
            {displayed}
            <span className="text-purple-400 animate-blink ml-0.5">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
          2nd year CS student at KG College, Coimbatore — turning ideas into
          real web experiences using React & Python. Hungry to learn, build, and grow. 🚀
        </p>

        {/* Buttons — different style */}
        <div className="flex gap-4 flex-wrap mb-12">
          <a href="#projects"
            className="group flex items-center gap-2 px-7 py-3 rounded-full font-rajdhani font-bold text-base text-white no-underline transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', boxShadow: '0 4px 24px rgba(168,85,247,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 32px rgba(168,85,247,0.55)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(168,85,247,0.3)'}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="mailto:yuvarajyuvaraj1417@gmail.com"
            className="flex items-center gap-2 px-7 py-3 rounded-full font-rajdhani font-bold text-base no-underline transition-all duration-300 text-gray-300"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(168,85,247,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)'; e.currentTarget.style.background = 'rgba(168,85,247,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
            Contact Me
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-8">
          {[['2+', 'Projects'], ['1', 'Hackathon Win'], ['4', 'Technologies']].map(([num, label]) => (
            <div key={label}>
              <p className="font-rajdhani font-black text-2xl"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {num}
              </p>
              <p className="text-gray-600 text-xs tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Terminal / Code card ── */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md rounded-2xl overflow-hidden"
          style={{
            background: '#0d0d18',
            border: '1px solid rgba(168,85,247,0.2)',
            boxShadow: '0 0 60px rgba(168,85,247,0.12), 0 0 120px rgba(236,72,153,0.06)'
          }}>

          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3"
            style={{ background: 'rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.15)' }}>
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs font-orbitron text-gray-600 tracking-widest">yuvaraj.js</span>
          </div>

          {/* Code content */}
          <div className="p-6 font-orbitron text-sm leading-loose">
            <p><span className="text-purple-400">const</span> <span className="text-pink-400">developer</span> <span className="text-gray-500">=</span> {'{'}</p>
            <div className="pl-5 space-y-1">
              <p><span className="text-yellow-300">name</span><span className="text-gray-500">:</span> <span className="text-green-400">"Yuvaraj K"</span><span className="text-gray-600">,</span></p>
              <p><span className="text-yellow-300">role</span><span className="text-gray-500">:</span> <span className="text-green-400">"Full Stack Dev"</span><span className="text-gray-600">,</span></p>
              <p><span className="text-yellow-300">college</span><span className="text-gray-500">:</span> <span className="text-green-400">"KG College"</span><span className="text-gray-600">,</span></p>
              <p><span className="text-yellow-300">skills</span><span className="text-gray-500">:</span> [</p>
              <div className="pl-5">
                <p><span className="text-green-400">"React"</span><span className="text-gray-600">,</span></p>
                <p><span className="text-green-400">"Python"</span><span className="text-gray-600">,</span></p>
                <p><span className="text-green-400">"Java"</span><span className="text-gray-600">,</span></p>
              </div>
              <p>]<span className="text-gray-600">,</span></p>
              <p><span className="text-yellow-300">available</span><span className="text-gray-500">:</span> <span className="text-purple-400">true</span><span className="text-gray-600">,</span></p>
              <p><span className="text-yellow-300">goal</span><span className="text-gray-500">:</span> <span className="text-green-400">"Land internship 🚀"</span></p>
            </div>
            <p>{'}'}</p>
            <p className="mt-4 text-gray-600 text-xs">
              <span className="text-purple-500">{'>'}</span> Running on passion & caffeine ☕
            </p>
          </div>

          {/* Bottom status bar */}
          <div className="flex items-center justify-between px-4 py-2"
            style={{ background: 'rgba(168,85,247,0.06)', borderTop: '1px solid rgba(168,85,247,0.1)' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-orbitron text-green-400 tracking-wider">OPEN TO WORK</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/YUVARAJ-2-9" target="_blank" rel="noreferrer"
                className="transition-all duration-200"
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.5'}
                style={{ opacity: 0.5 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#a855f7">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="mailto:yuvarajyuvaraj1417@gmail.com"
                style={{ opacity: 0.5 }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.5'}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes shimmer { to { background-position: 200% center; } }`}</style>
    </section>
  );
};

export default Hero;
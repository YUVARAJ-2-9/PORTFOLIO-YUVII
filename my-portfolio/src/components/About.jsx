import React from 'react';

const About = () => (
  <section id="about" className="px-[10%] py-24 relative z-10">
    <div className="reveal">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
        <span className="text-purple-400 text-sm font-rajdhani tracking-[3px] uppercase">Who am I</span>
      </div>
      <p className="section-title">About Me</p>
      <div className="section-line" />
    </div>

    <div className="reveal grid grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-gray-300 leading-relaxed text-lg mb-5">
          Hey! I'm <span className="text-purple-400 font-bold">Yuvaraj K</span>, a passionate CS
          student from Coimbatore. I love turning ideas into reality through clean code.
        </p>
        <p className="text-gray-500 leading-relaxed mb-10">
          Started with curiosity — now building real projects with React, Python & Java.
          Won a college Python Hackathon and always chasing the next challenge!
        </p>
        <div className="flex gap-10">
          {[['2+','Projects Built'],['1','Hackathon Won'],['2nd','Year CS']].map(([num, label]) => (
            <div key={label}>
              <p className="font-rajdhani font-black text-3xl"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {num}
              </p>
              <p className="text-gray-600 text-xs mt-1 tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-7 font-orbitron text-sm leading-loose"
        style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.18)' }}>
        <p><span className="text-purple-400">const</span> <span className="text-pink-400">yuvaraj</span> = {'{'}</p>
        <div className="pl-5">
          <p><span className="text-yellow-300">name</span><span className="text-gray-500">:</span> <span className="text-green-400">"Yuvaraj K"</span><span className="text-gray-600">,</span></p>
          <p><span className="text-yellow-300">college</span><span className="text-gray-500">:</span> <span className="text-green-400">"KG College"</span><span className="text-gray-600">,</span></p>
          <p><span className="text-yellow-300">role</span><span className="text-gray-500">:</span> <span className="text-green-400">"Full Stack Dev"</span><span className="text-gray-600">,</span></p>
          <p><span className="text-yellow-300">stack</span><span className="text-gray-500">:</span> [<span className="text-green-400">"React"</span><span className="text-gray-600">,</span> <span className="text-green-400">"Python"</span>]<span className="text-gray-600">,</span></p>
          <p><span className="text-yellow-300">available</span><span className="text-gray-500">:</span> <span className="text-purple-400">true</span></p>
        </div>
        <p>{'}'}</p>
      </div>
    </div>
  </section>
);

export default About;
import React from 'react';

const Contact = () => (
 <section id="contact" className="px-[10%] py-20 text-center relative z-10">
    <p className="section-title reveal">Let's Connect</p>
    <div className="section-line reveal mx-auto" />
    <p className="reveal text-gray-500 text-lg max-w-md mx-auto leading-relaxed mb-10">
      Open to internship opportunities! Feel free to reach out — I'd love to connect. 🚀
    </p>
    <div className="reveal flex justify-center gap-4 flex-wrap mb-16">
      <a href="mailto:yuvarajyuvaraj1417@gmail.com" className="btn-primary">📧 EMAIL ME</a>
      <a href="https://github.com/YUVARAJ-2-9" target="_blank" rel="noreferrer" className="btn-outline">GITHUB ↗</a>
    </div>
    <p className="text-gray-700 text-sm font-orbitron">Built with React + Tailwind ⚡ by Yuvaraj K</p>
  </section>
);

export default Contact;
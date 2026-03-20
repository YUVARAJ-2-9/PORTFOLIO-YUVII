import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px';
        ring.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fire"
        style={{ boxShadow: '0 0 10px #ff6b00, 0 0 20px #ff6b00' }} />
      <div ref={ring} className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full"
        style={{ border: '1.5px solid rgba(255,107,0,0.6)', transition: 'left 0.08s ease, top 0.08s ease' }} />
    </>
  );
};

export default Cursor;
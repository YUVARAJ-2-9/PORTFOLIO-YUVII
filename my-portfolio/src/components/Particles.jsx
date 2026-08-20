import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const symbols = ['{', '}', '()', '=>', '/>', '</', '[]', '&&', '||', ';;', '++', '**'];

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: Math.random() * 10 + 10,
      alpha: Math.random() * 0.08 + 0.03,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.005,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        p.x += p.dx;
        p.y += p.dy;
        p.rotation += p.rotSpeed;

        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />

      {/* Center watermark */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.04), transparent 70%)',
        }} />
        <p style={{
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(4rem, 15vw, 14rem)',
          background: 'linear-gradient(135deg, rgba(168,85,247,0.07), rgba(236,72,153,0.04))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          userSelect: 'none',
          letterSpacing: '0.15em',
          lineHeight: 1,
          filter: 'blur(0.5px)',
        }}>
          YUVI
        </p>
      </div>
    </>
  );
};

export default Particles;
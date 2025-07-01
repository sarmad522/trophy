'use client';

import { useEffect, useRef } from 'react';

export default function MouseBubble() {
  const bubbleRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate3d(${pos.current.x - 15}px, ${pos.current.y - 15}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={bubbleRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle, #A890CD 0%, #A890CD 100%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 12px rgba(0, 247, 255, 0.5), 0 0 30px rgba(0, 119, 255, 0.2)',
        transition: 'background 0.3s ease',
        mixBlendMode: 'difference',
      }}
    />
  );
}

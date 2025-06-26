'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTextFade = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF', // Fade to white
      stagger: 0.1,
      ease: 'none',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const paragraph = `At throov we turn ideas into visuals that speak. From branding to digital design, we craft creative solutions that are bold, thoughtful, and built to stand out. Whether you are launching something new or leveling up your look, we bring clarity, style and purpose to every pixel.`;

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span
      key={index}
      className="word inline-block mr-2 will-change-[color]"
      style={{ color: '#4B4B4B' }} // Initial gray color
    >
      {word}
    </span>
  ));

  return (
    <section className="py-32 px-6">
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto text-[2.5rem] leading-snug font-bold flex flex-wrap gap-y-4"
      >
        {renderWords}
      </div>
    </section>
  );
};

export default ScrollTextFade;

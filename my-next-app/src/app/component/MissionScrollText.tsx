'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.mission-word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(words, {
      color: '#FFFFFF',
      stagger: 0.08,
      ease: 'none',
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const paragraph = `Our mission is to transform bold ideas into purposeful digital experiences by empowering brands through design, innovation, and technology to create real world impact.`;

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span
      key={index}
      className="mission-word inline-block mr-2 will-change-[color]"
      style={{ color: '#4B4B4B' }}
    >
      {word}
    </span>
  ));

  return (
    <section className="py-28 px-6 bg-black">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto text-3xl leading-snug font-semibold flex flex-wrap gap-y-4"
      >
        {renderWords}
      </div>
    </section>
  );
};

export default MissionScrollText;

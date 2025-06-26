'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUsScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const trackWidth = track.scrollWidth - window.innerWidth;

    Array.from(track.children).forEach((el: any) => {
      el.style.color = '#A890CD';
    });

    gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: '+=2500', // controls duration — consistent scroll
        scrub: 0.3,    // smoother, with slight delay
        onUpdate: (self) => {
          const p = self.progress;
          const r = Math.round(168 + (255 - 168) * p);
          const g = Math.round(144 + (255 - 144) * p);
          const b = Math.round(205 + (255 - 205) * p);
          Array.from(track.children).forEach((el: any) => {
            el.style.color = `rgb(${r},${g},${b})`;
          });
        },
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="h-[40vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap"
          style={{ width: '200vw' }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{
              fontSize: '15vw',
              minWidth: '120vw',
              whiteSpace: 'nowrap',
            }}
          >
            AboutUsAboutUs
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{
              fontSize: '15vw',
              minWidth: '120vw',
              whiteSpace: 'nowrap',
            }}
          >
            AboutUsAboutUs
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScroll;

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollTextFade from './ScrollTextFade';
gsap.registerPlugin(ScrollTrigger);

const AboutUsScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    track.style.transform = 'translateX(0)';
    Array.from(track.children).forEach((el: any) => {
      el.style.color = '#A890CD';
    });

    ScrollTrigger.create({
      trigger: wrapper,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: ({ progress }) => {
        track.style.transform = `translateX(${-100 * progress}vw)`;

        const p = progress;
        const r = Math.round(168 + (255 - 168) * p);
        const g = Math.round(144 + (255 - 144) * p);
        const b = Math.round(205 + (255 - 205) * p);
        Array.from(track.children).forEach((el: any) => {
          el.style.color = `rgb(${r},${g},${b})`;
        });
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="h-[40vh] "  >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap"
          style={{ width: '200vw' }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
          >
            AboutUsAboutUs
            
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
          >
            AboutUsAboutUs
          </div>
          
        </div>
        
      </div>
     
    </div>
  );
};

export default AboutUsScroll;

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingCardSlider from './RotatingCardSlider';
gsap.registerPlugin(ScrollTrigger);

const GsapScrollSlideText: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    // set initial text color
    Array.from(track.children).forEach((el: any) => {
      el.style.color = '#6C54A0';
    });

    // calculate actual scroll distance
    const trackWidth = track.scrollWidth - window.innerWidth;

    // GSAP smooth horizontal scroll
    gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: '+=2500', // longer distance = slower movement
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress;
          const r = Math.round(168 + (255 - 168) * p);
          const g = Math.round(144 + (255 - 144) * p);
          const b = Math.round(205 + (255 - 205) * p);
          Array.from(track.children).forEach((el: any) => {
            el.style.color = `rgb(${r},${g},${b})`;
          });
        }
      }
    });
  }, []);

  return (
    <div ref={wrapperRef} className="bg-transparent">
      <div className=" ">
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
            ServicesServices
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{
              fontSize: '15vw',
              minWidth: '120vw',
              whiteSpace: 'nowrap',
            }}
          >
            ServicesServices
          </div>
        </div>
      </div>
      <RotatingCardSlider />
    </div>
  );
};

export default GsapScrollSlideText;

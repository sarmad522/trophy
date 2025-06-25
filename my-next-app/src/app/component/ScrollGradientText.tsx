'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollSlideText: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    // ensure initial styles
    track.style.transform = 'translateX(0)';
    Array.from(track.children).forEach((el: any) => {
      el.style.color = '#A890CD';
    });

    ScrollTrigger.create({
      trigger: wrapper,
      start:   'top bottom',  // as soon as wrapper enters viewport
      end:     'bottom top',  // for exactly one full-screen worth of scroll
      scrub:   true,          // 1:1 mapping to scroll position
      onUpdate: ({ progress }) => {
        // slide left from 0 → -100vw
        track.style.transform = `translateX(${-100 * progress}vw)`;

        // fade from purple → white
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
    <div ref={wrapperRef} className="h-[40vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
  ref={trackRef}
  className="flex flex-nowrap " // gap add kiya
  style={{ width: '200vw' }} // zyada jagah
>
  <div
    className="flex-shrink-0 flex items-center justify-center font-extrabold"
    style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
  >
    ServicesServices
  </div>
  <div
    className="flex-shrink-0 flex items-center justify-center font-extrabold"
    style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
  >
    ServicesServices
  </div>
</div>

      </div>
    </div>
  );
};

export default GsapScrollSlideText;

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionVisionSection = () => {
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const headingTrackRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Horizontal heading scroll
  useEffect(() => {
    const wrapper = headingWrapperRef.current;
    const track = headingTrackRef.current;
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

        const r = Math.round(168 + (255 - 168) * progress);
        const g = Math.round(144 + (255 - 144) * progress);
        const b = Math.round(205 + (255 - 205) * progress);
        Array.from(track.children).forEach((el: any) => {
          el.style.color = `rgb(${r},${g},${b})`;
        });
      },
    });
  }, []);

  // Scroll text fade-in word by word
  useEffect(() => {
    const words = textContainerRef.current?.querySelectorAll('.word');
    if (!words) return;

    words.forEach((word: any) => {
      gsap.fromTo(
        word,
        { color: '#4B4B4B' },
        {
          color: '#ffffff',
          scrollTrigger: {
            trigger: word,
            start: 'top 95%',
            end: 'top 65%',
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const paragraph = `At throov we turn ideas into visuals that speak. From branding to digital design, we craft creative solutions that are bold, thoughtful, and built to stand out. Whether you are launching something new or leveling up your look, we bring clarity, style and purpose to every pixel.`;

  const renderWords = paragraph.split(' ').map((word, index) => (
    <span key={index} className="word inline-block mr-2">
      {word}
    </span>
  ));

  return (
    <section className="bg-black">
      {/* Horizontal Heading Scroll */}
      <div ref={headingWrapperRef} className="h-[40vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={headingTrackRef}
            className="flex flex-nowrap"
            style={{ width: '200vw' }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center font-extrabold"
              style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
            >
              Mission&Vision
            </div>
            <div
              className="flex-shrink-0 flex items-center justify-center font-extrabold"
              style={{ fontSize: '15vw', minWidth: '120vw', whiteSpace: 'nowrap' }}
            >
              Mission&Vision
            </div>
          </div>
        </div>
      </div>

      {/* Word-by-Word Fade-In Text */}
      <div className="py-32 px-6">
        <div
          ref={textContainerRef}
          className="max-w-5xl mx-auto text-[2.5rem] leading-snug font-bold flex flex-wrap gap-y-4"
        >
          {renderWords}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;

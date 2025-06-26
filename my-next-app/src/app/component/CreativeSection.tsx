// app/components/CreativeSection.tsx
'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

const avatarsTop = ['/images/avatart.png', '/images/avatart2.png', '/images/avatar3.png'];
const avatarsBottom = ['/images/star.png', '/images/avater4.png', '/images/avatar5.png'];
const middle = ['/images/avatar7.png', '/images/avataer8.png', '/images/avatar01.png'];

const rotatingStars = ['/images/roundstart.png', '/images/stared.png', '/images/fillstart.png'];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CreativeSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach((el) => {
      const type = el.getAttribute('data-animate');
      const vars: gsap.TweenVars = {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        },
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      };

      if (type === 'left') vars.x = -100;
      if (type === 'right') vars.x = 100;
      if (type === 'top') vars.y = -100;
      if (type === 'bottom') vars.y = 100;
      if (type === 'scale') vars.scale = 0.5;

      gsap.from(el, vars);
    });

    // Infinite rotation for star images
    gsap.to('.rotating-star', {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'linear'
    });

    // Animated counter
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach((counter) => {
      const endValue = parseInt(counter.getAttribute('data-counter') || '0');
      const obj = { val: 0 };
      const unit = counter.getAttribute('data-unit') || '+';

      gsap.to(obj, {
        val: endValue,
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%'
        },
        onUpdate: () => {
          counter.innerHTML = `${Math.floor(obj.val)}${unit}`;
        }
      });
    });

    // Background image scrolls fully left to right
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    gsap.fromTo(
      '#bg-move',
      { x: -screenWidth },
      {
        x: screenWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: '#bg-move',
          scrub: true,
          start: 'top bottom',
          end: 'bottom top'
        }
      }
    );
  }, []);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <img
          id="bg-move"
          src="/images/imageicon.png"
          alt="Moving BG Icon"
          className="w-[60vw] max-w-[800px] "
        />
      </div>

      <div
        className="max-w-5xl mx-auto space-y-20 relative z-10"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Top Row */}
        <div className="text-5xl md:text-7xl font-extrabold flex flex-wrap justify-center gap-5 items-center">
          <span className="text-purple-400" data-animate="left">creative</span>
          <div className="flex gap-3 items-center" data-animate="top">
            {avatarsTop.map((src, index) => (
              <Image key={index} src={src} alt={`Avatar ${index + 1}`} width={72} height={72} className="rounded-full shadow-lg" />
            ))}
          </div>
        </div>

        {/* Mid Row */}
        <div className="text-5xl md:text-7xl font-extrabold flex flex-wrap justify-center gap-5 items-center">
          <div className="flex gap-3 items-center" data-animate="bottom">
            {avatarsBottom.map((src, index) => (
              <Image key={index} src={src} alt={`Avatar ${index + 4}`} width={72} height={72} className="rounded-full shadow-lg" />
            ))}
          </div>
          <span className="text-purple-400" data-animate="right">minds</span>
          <Image src="/images/roundstart.png" alt="Round Star" width={72} height={72} className="rounded-full rotating-star shadow-xl" />
        </div>

        {/* Bottom Row */}
        <div className="text-5xl md:text-7xl font-extrabold flex flex-wrap justify-center gap-5 items-center">
          <span className="text-purple-400" data-animate="left">real</span>
          <div className="flex gap-3 items-center" data-animate="bottom">
            {middle.map((src, index) => (
              <Image key={index} src={src} alt={`Avatar ${index + 7}`} width={72} height={72} className="rounded-full shadow-lg" />
            ))}
          </div>
          <span className="text-purple-400" data-animate="right">results</span>
        </div>

        {/* Stats + Rotating Stars */}
        <div className="flex flex-wrap justify-center gap-12 items-center mt-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl w-48" data-animate="scale">
            <div className="text-4xl font-bold" data-counter="5" data-unit="+">0+</div>
            <div className="text-sm mt-1 text-zinc-200">Years Experience</div>
          </div>

          <Image src="/images/stared.png" alt="Starred" width={72} height={72} className="rounded-full rotating-star" />

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl w-48" data-animate="scale">
            <div className="text-4xl font-bold" data-counter="150" data-unit="+">0+</div>
            <div className="text-sm mt-1 text-zinc-200">Completed Projects</div>
          </div>

          <Image src="/images/fillstart.png" alt="Fill Star" width={72} height={72} className="rounded-full rotating-star" />
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;

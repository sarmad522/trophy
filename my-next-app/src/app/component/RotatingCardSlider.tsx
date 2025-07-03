'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutUsScroll from './AboutUsScroll';
import ScrollTextFade from './ScrollTextFade';
const cards = [
  { title: 'Social Media Marketing', image: '/images/socialmedia.png' },
  { title: 'Website Development', image: '/images/websiteDevelpment.png' },
  { title: 'UI/UX Design', image: '/images/uiux.png' },
  { title: 'Branding & Identity', image: '/images/BrandingIdentity2.png' },
  { title: 'SEO Optimization', image: '/images/seachenging.png' },
];

export default function RotatingCardSlider() {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = cards.length;

  const goToIndex = (newIndex: number) => {
    const looped = (newIndex + total) % total;
    setCenterIndex(looped);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex(centerIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [centerIndex]);

  const getOffset = (i: number) => {
    const offset = i - centerIndex;
    if (offset < -Math.floor(total / 2)) return offset + total;
    if (offset > Math.floor(total / 2)) return offset - total;
    return offset;
  };

  const getTransform = (offset: number) => {
    if (offset === 0) return 'z-30 scale-110 rotate-y-0 translate-x-0';
    if (offset === -1) return 'z-20 scale-100 rotate-y-16 -translate-x-[360px]';
    if (offset === 1) return 'z-20 scale-100 -rotate-y-16 translate-x-[360px]';
    if (offset === -2) return 'z-10 scale-95 rotate-y-25 -translate-x-[750px] ';
    if (offset === 2) return 'z-10 scale-95 -rotate-y-25 translate-x-[750px] ';
    return 'hidden';
  };

  return (
    <div
      className="relative w-full pb-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        background: 'linear-gradient(180deg, #020102, #4B3B70, #4B3B70, #020102)',
      }}
    >
    
      <div className="relative flex justify-center items-center gap-10 perspective-[1000px] h-[500px] max-w-full">
        {cards.map((card, i) => {
          const offset = getOffset(i);
          const transformClass = getTransform(offset);

          return (
            <div
              key={i}
              onClick={() => goToIndex(i)}
              className={`absolute cursor-pointer transition-all duration-500 ease-in-out 
              w-[90vw] sm:w-[300px] md:w-[300px] lg:w-[320px] h-[450px]
              bg-cover bg-center rounded-xl shadow-lg ${transformClass}`}
              style={{
                backgroundImage: `url(${card.image})`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-xl flex flex-col justify-end p-4 bg-black/10"></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Arrows and Progress Bar */}
      <div className="flex items-center justify-between px-6 mt-10 max-w-7xl mx-auto">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mr-4">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{
              width: `${((centerIndex + 1) / total) * 100}%`,
            }}
          />
        </div>

        {/* Arrows Bottom Right */}
        <div className="flex space-x-2">
          <button
            onClick={() => goToIndex(centerIndex - 1)}
            className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => goToIndex(centerIndex + 1)}
            className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Sections Below */}
      <AboutUsScroll />
      <ScrollTextFade />
    </div>
  );
}

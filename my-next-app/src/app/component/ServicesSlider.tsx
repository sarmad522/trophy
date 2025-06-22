// components/ScrollSlider.tsx
'use client';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  { title: 'Social Media Marketing', color: 'from-indigo-500 to-indigo-800' },
  { title: 'Website Development', color: 'from-fuchsia-600 to-purple-800' },
  { title: 'UI/UX Design', color: 'from-pink-500 to-pink-800' },
  { title: 'Branding & Identity', color: 'from-yellow-500 to-yellow-700' },
  { title: 'SEO Optimization', color: 'from-purple-600 to-indigo-900' },
  { title: 'Content Creation', color: 'from-green-500 to-emerald-700' },
];

export default function ScrollSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(2);

  const scroll = (dir: 'left' | 'right') => {
    const newIndex = dir === 'left' ? centerIndex - 1 : centerIndex + 1;
    if (newIndex >= 0 && newIndex <= cards.length - 1) {
      setCenterIndex(newIndex);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const childWidth = scrollRef.current.children[0].clientWidth + 32; // card width + gap
      scrollRef.current.scrollTo({
        left: childWidth * (centerIndex - 2),
        behavior: 'smooth',
      });
    }
  }, [centerIndex]);

  return (
    <div className="bg-[#1e0e3b] py-24 px-4 text-white relative">
      {/* Scrollable Container with visible scrollbar */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 scroll-smooth transition-all duration-500 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent"
        style={{ perspective: '1200px' }}
      >
        {cards.map((card, index) => {
          const offset = index - centerIndex;

          let rotation = '';

          if (offset === 0) {
            rotation = 'rotate-y-0 scale-105 z-[5]';
          } else if (offset === -1) {
            rotation = 'rotate-y-[25deg] scale-90 z-[4]';
          } else if (offset === 1) {
            rotation = 'rotate-y-[-25deg] scale-90 z-[4]';
          } else if (offset === -2) {
            rotation = 'rotate-y-[40deg] scale-80 z-[3]';
          } else if (offset === 2) {
            rotation = 'rotate-y-[-40deg] scale-80 z-[3]';
          } else {
            rotation = 'hidden';
          }

          return (
            <div
              key={index}
              className={`min-w-[280px] h-96 bg-gradient-to-br ${card.color} rounded-3xl p-6 transition-all duration-700 ease-out shadow-2xl transform ${rotation} flex-shrink-0`}
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <div className="flex items-center justify-center flex-1">
                  <svg
                    className="w-20 h-20 text-white opacity-60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded mt-2">Learn More →</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow Buttons */}
      <div className="absolute right-6 bottom-6 flex gap-4">
        <button
          onClick={() => scroll('left')}
          className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  { title: 'Social Media Marketing', image: '/images/socialmedia.png' },
  { title: 'Website Development', image: '/images/socialmedia.png' },
  { title: 'UI/UX Design', image: '/images/socialmedia.png' },
  { title: 'Branding & Identity', image: '/images/socialmedia.png' },
  { title: 'SEO Optimization', image: '/images/socialmedia.png' },
  { title: 'Email Marketing', image: '/images/socialmedia.png' },
  { title: 'Video Editing', image: '/images/socialmedia.png' },
];

export default function RotatingCardSlider() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const lastIndex = useRef(0);

  const total = cards.length;

  const scrollToIndex = (newIndex: number) => {
    const looped = (newIndex + total) % total;

    if ((looped === 0 && lastIndex.current === total - 1) || looped > lastIndex.current) {
      setAnimationClass('slide-from-right');
    } else {
      setAnimationClass('slide-from-left');
    }

    lastIndex.current = looped;
    setCenterIndex(looped);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex(centerIndex + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [centerIndex]);

  const getOffsetIndex = (offset: number) => {
    return (centerIndex + offset + total) % total;
  };

  const visibleRange = [-2, -1, 0, 1, 2];

 const getCardTransform = (offset: number) => {
  if (offset === 0) return 'z-30 scale-110 rotate-y-0';
  if (offset === -1) return 'z-20 scale-100 rotate-y-15';
  if (offset === 1) return 'z-20 scale-100 -rotate-y-15';
  if (offset === -2) return 'z-10 scale-90 rotate-y-30';
  if (offset === 2) return 'z-10 scale-90 -rotate-y-30';
  return 'hidden';
};

  return (
    <div className="relative w-screen  py-16 text-white   bg-cover bg-center bg-no-repeat"   style={{
    backgroundImage: "url('/images/servicesection.png')",
  }}>
      <div className="w-screen flex items-center justify-center gap-6 perspective-[1500px] transition-transform duration-500 ease-in-out">
        {visibleRange.map((offset) => {
          const i = getOffsetIndex(offset);
          const card = cards[i];
          const transformClass = getCardTransform(offset);
          const isCenter = offset === 0;
          const isSideCard = offset === -1 || offset === 1;

          return (
            <div
              key={`${i}-${centerIndex}`}
              onClick={() => scrollToIndex(i)}
              className={`relative group w-[320px] h-[450px] bg-cover bg-center rounded-xl shadow-xl transition-all duration-500 ease-in-out transform ${transformClass} ${
                isCenter ? animationClass : ''
              } cursor-pointer`}
              style={{
                backgroundImage: `url(${card.image})`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Hover Arrow on Side Cards */}
              {isSideCard && (
                <div className="absolute inset-0 flex items-center justify-between z-40">
                  <div
                    className={`${
                      offset === -1 ? 'left-2' : 'right-2'
                    } absolute top-1/2 -translate-y-1/2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out`}
                  >
                    <div className="bg-white text-black p-2 rounded-full shadow-lg">
                      {offset === -1 ? (
                        <ChevronLeft size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-end h-full p-4  ">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <button className="mt-4 bg-white text-black px-3 py-1 rounded hover:bg-gray-300 text-sm font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main navigation arrows (unchanged) */}
      <button
        onClick={() => scrollToIndex(centerIndex - 1)}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white text-black p-2 rounded-full z-50 hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scrollToIndex(centerIndex + 1)}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-black p-2 rounded-full z-50 hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>

      {/* Animation styles */}
      <style jsx>{`
        .slide-from-right {
          animation: slideFromRight 0.6s ease-out;
        }
        .slide-from-left {
          animation: slideFromLeft 0.6s ease-out;
        }

        @keyframes slideFromRight {
          0% {
            transform: translateX(100%) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideFromLeft {
          0% {
            transform: translateX(-100%) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

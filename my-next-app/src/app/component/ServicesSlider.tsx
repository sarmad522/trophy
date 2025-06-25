'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  { title: 'Social Media Marketing', color: 'from-indigo-500 to-indigo-700' },
  { title: 'Website Development', color: 'from-fuchsia-500 to-purple-700' },
  { title: 'UI/UX Design', color: 'from-pink-500 to-pink-700' },
  { title: 'Branding & Identity', color: 'from-yellow-400 to-yellow-600' },
  { title: 'SEO Optimization', color: 'from-purple-600 to-indigo-800' },
  { title: 'Content Creation', color: 'from-green-500 to-emerald-600' },
  { title: 'Email Marketing', color: 'from-rose-500 to-red-600' },
  { title: 'Analytics', color: 'from-blue-500 to-blue-700' },
  { title: 'Video Production', color: 'from-orange-400 to-orange-600' },
  { title: 'Influencer Collab', color: 'from-teal-500 to-cyan-700' },
];

export default function ScrollSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(2);

  const scrollToIndex = useCallback((idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[idx] as HTMLElement;
    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollTo = cardCenter - containerCenter;

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });
  }, []);

  const handleJump = (idx: number) => scrollToIndex(idx);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollLeft, offsetWidth } = el;
      const containerCenter = scrollLeft + offsetWidth / 2;
      let minDist = Infinity;
      let nearest = centerIndex;

      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const childCenter = c.offsetLeft + c.offsetWidth / 2;
        const dist = Math.abs(childCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });

      if (nearest !== centerIndex) setCenterIndex(nearest);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [centerIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => {
        const next = (prev + 1) % cards.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [scrollToIndex]);

  return (
    <div className="relative bg-[#1e0e3b] py-8 px-2 text-white">
      {/* Slider */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 scroll-smooth snap-x snap-mandatory pb-4"
        style={{ perspective: 1200 }}
      >
        {cards.map((card, i) => {
          const offset = i - centerIndex;
          let transformClasses = '';

          if (offset === 0) transformClasses = 'scale-105 rotate-y-0 z-30';
          else if (offset === -1) transformClasses = 'scale-95 rotate-y-20 z-20';
          else if (offset === 1) transformClasses = 'scale-95 -rotate-y-20 z-20';
          else if (offset === -2) transformClasses = 'scale-90 rotate-y-40 z-10';
          else if (offset === 2) transformClasses = 'scale-90 -rotate-y-40 z-10';
          else transformClasses = 'opacity-0 scale-75 -z-20 pointer-events-none';

          return (
            <div
              key={i}
              className={`snap-center flex-shrink-0 w-60 sm:w-64 md:w-72 lg:w-60 xl:w-72 2xl:w-80 h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 2xl:h-96 bg-gradient-to-br ${card.color} rounded-2xl p-6 transition-all duration-500 ease-out transform ${transformClasses}`}
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => handleJump(i)}
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{card.title}</h3>
                <div className="flex items-center justify-center flex-1">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <button className="self-start bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                  Learn More →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleJump(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === centerIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
          />
        ))}
      </div>

      {/* Custom Scrollbar + Arrows Row */}
      <div className="flex items-center justify-between mt-6 px-4">
        {/* Custom White Bar (Fake Scrollbar) */}
        <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-500"
            style={{
              width: `${((centerIndex + 1) / cards.length) * 100}%`,
            }}
          />
        </div>

        {/* Arrows */}
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => handleJump(Math.max(centerIndex - 1, 0))}
            className="p-2 bg-white bg-opacity-80 text-black rounded-full hover:bg-opacity-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleJump(Math.min(centerIndex + 1, cards.length - 1))}
            className="p-2 bg-white bg-opacity-80 text-black rounded-full hover:bg-opacity-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* CSS to Hide Native Scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

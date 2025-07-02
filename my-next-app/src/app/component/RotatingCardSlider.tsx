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
//   { title: 'Email Marketing', image: '/images/socialmedia.png' },
//   { title: 'Video Editing', image: '/images/socialmedia.png' },
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
  if (offset === -1) return 'z-20 scale-100 rotate-y-16 -translate-x-[400px]';
  if (offset === 1) return 'z-20 scale-100 -rotate-y-16 translate-x-[400px]';
  if (offset === -2) return 'z-10 scale-95 rotate-y-25 -translate-x-[800px] ';
  if (offset === 2) return 'z-10 scale-95 -rotate-y-25 translate-x-[800px] ';
  return 'hidden';
};


  return (
    <div
      className="relative w-full  pb-10 bg-cover bg-center bg-no-repeat text-white "
    //   style={{ backgroundImage: "url('/images/servicesection.png')" }}
    style={{
    background: 'linear-gradient(180deg, #020102, #4B3B70, #4B3B70, #020102)',
  }}
    >
        <div>
      <div className="relative flex justify-center items-center gap-10 perspective-[1000px] h-[500px] max-w-full">
        {cards.map((card, i) => {
          const offset = getOffset(i);
          const transformClass = getTransform(offset);

          return (
            <div
              key={i}
              onClick={() => goToIndex(i)}
              className={`absolute  cursor-pointer transition-all duration-500 ease-in-out 
                w-[90vw] sm:w-[300px] md:w-[300px] lg:w-[320px] h-[450px]
                bg-cover bg-center rounded-xl shadow-xl ${transformClass}  mx-4`}
              style={{
                backgroundImage: `url(${card.image})`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-xl flex flex-col justify-end p-4">
                {/* <h3 className="lg:text-[38px]  font-bold">{card.title}</h3> */}
                {/* <button className="mt-4 bg-white text-black px-3 py-1 rounded hover:bg-gray-300 text-sm font-medium">
                  Learn More →
                </button> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={() => goToIndex(centerIndex - 1)}
        className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 bg-white text-black p-2 rounded-full z-50 hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => goToIndex(centerIndex + 1)}
        className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 bg-white text-black p-2 rounded-full z-50 hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>
      </div>
  <div>
      <AboutUsScroll/>
      <ScrollTextFade/>
      </div>
    </div>
  );
}

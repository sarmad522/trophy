'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export default function HeroSection() {
 const svgRef = useRef<SVGSVGElement>(null);

 useEffect(() => {
  const paths = svgRef.current?.querySelectorAll('path');
  if (!paths) return;

  paths.forEach((path, i) => {
    gsap.to(path, {
      scale: 1.08,
      transformOrigin: 'center',
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: 'sine.inOut',
      delay: i * 0.3, // staggered pulse
    });
  });
}, []);

  return (
    <section className="relative  text-white pt-56 pb-32   flex flex-col justify-center items-start ">
      {/* Left Overlay */}
      <img
        src="/images/heroleftlayer.png"
        className="absolute top-0 left-0 z-0 "
        alt="Left Overlay"
      /> 

      {/* Right Overlay */}
      <img
        src="/images/heroright.png"
        className="absolute top-0 right-0 z-0 "
        alt="Right Overlay"
      /> *

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-start ">
        {/* Main Text Logo */}
              <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="151"
        height="107"
        viewBox="0 0 151 107"
        fill="none"
        className="absolute top-[-50px] right-[-90px] w-[80px] md:w-[120px] z-10"
      >
        <path d="M6.78918 1.49553C0.391385 4.91249 -0.0724286 14.4747 0.497789 18.8641C5.60016 53.2693 9.91764 65.1246 11.4363 66.461C21.8599 71.7092 22.188 32.566 22.188 10.6982C19.3634 -1.60239 10.768 -0.569755 6.78918 1.49553Z" fill="#6C54A0"/>
        <path d="M112.502 16.5484C105.447 14.8655 98.7606 21.7173 96.2778 25.3816C77.2905 54.5234 72.6641 66.2615 72.9153 68.2688C77.2404 79.1081 103.434 50.0188 117.931 33.6464C123.97 22.5645 116.85 17.6397 112.502 16.5484Z" fill="#6C54A0"/>
        <path d="M144.027 73.0338C139.253 69.2429 131.59 72.0699 128.328 73.9709C102.965 89.359 95.0616 96.633 94.5077 98.248C93.7886 108.026 124.647 95.2436 141.826 87.9615C150.567 81.6892 146.949 75.4113 144.027 73.0338Z" fill="#6C54A0"/>
      </svg>
        <img
          src="/images/logoimage.png"
          className="w-full max-w-[1200px] mb-4 "
          alt="Throoy Logo"
        />
 
        {/* Tagline */}
        {/* <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8">
          Grow Beyond limits
        </p> */}
        <div className='flex items-start justify-start flex-col  mb-8'>
        {/* Description */}
        
        <p className="max-w-xl text-sm sm:text-base text-white mb-10 text-start  " >
          We build bold brands, seamless experiences<br></br> and digital strategies that drive results.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#4E3682] to-[#A890CD] hover:bg-[#b697ff] text-white px-6 py-3 rounded-md font-medium">
              Let’s Talk
            </button>
          </Link>
          <Link href="/work">
            <button className="bg-[#6C54A0] hover:bg-[#4a3f63] text-white px-6 py-3 rounded-md font-medium">
              Our Work
            </button>
          </Link>
        </div>
        </div>
        {/* Glossy 3D Object */}
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute right-[15%] top-[25%] w-[180px] md:w-[250px] lg:w-[300px] z-10"
          >
              <source src="/images/heroSectionvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
        </video> */}




      </div>
      <a href="#about" className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="53" viewBox="0 0 37 53" fill="none">
    <path d="M1.19727 34.0851C1.19727 38.6971 3.02947 43.1205 6.29062 46.3815C9.55179 49.6428 13.9748 51.4744 18.5867 51.4744C23.1987 51.4744 27.6218 49.6428 30.8831 46.3815C34.1441 43.1205 35.9762 38.6971 35.9762 34.0851V19.1799C35.9762 14.5679 34.1441 10.1449 30.8831 6.88376C27.6218 3.62261 23.1987 1.79041 18.5867 1.79041C13.9748 1.79041 9.55179 3.62261 6.29062 6.88376C3.02947 10.1449 1.19727 14.5679 1.19727 19.1799V34.0851Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5859 14.9072V34.7809" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.04 28.6199L18.5874 36.0725L11.1348 28.6199" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
      <img
  src="/images/framerimage.png"
  alt="Throoy Logo"
  className="absolute bottom-[-100px] right-0 w-full max-w-[200px] sm:max-w-[200px] rotate-[0deg] z-99"
/>
    </section>
  );
}

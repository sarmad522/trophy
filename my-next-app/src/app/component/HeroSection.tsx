'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
   <section
  className="relative bg-gradient-to-r from-[#2e014c] to-black text-white pt-32 pb-32 flex items-center m-h-screen"
  style={{
    backgroundImage: "url('/images/herosectio.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Left and Right Overlay Images */}
  <img
    src="/images/heroleftlayer.png"
    className="absolute top-0 left-0 z-0 w-1/2 max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
    alt="Left Layer"
  />
  <img
    src="/images/heroright.png"
    className="absolute top-0 right-0 z-0 w-1/2 max-w-[300px] sm:max-w-[400px] md:max-w-[600px]"
    alt="Right Layer"
  />

  <div className="relative z-10 max-w-7xl mx-auto w-full px-4 text-center">
    {/* Center Fan Image */}
    <img
      src="/images/herofan.png"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[500px] z-10"
      alt="Hero Fan"
    />

    {/* Main Logo */}
    <img
      src="/images/logoimage.png"
      className="relative z-10 w-[80%] max-w-[100%] mx-auto"
      alt="Logo"
    />
  </div>
</section>

  );
}

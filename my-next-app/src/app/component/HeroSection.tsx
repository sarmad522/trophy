'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
   <section
  className="bg-gradient-to-r from-[#2e014c] to-black text-white min-h-screen flex items-center"
  style={{ backgroundImage: "url('/images/herosectio.png')", backgroundSize: "cover", backgroundPosition: "center" }}
>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold leading-tight mb-2">
            throoy
          </h1>
          <p className="text-xl text-white/80 mb-6">Grow Beyond limits</p>

          <p className="text-sm text-white/60 mb-6">
            We build bold brands, seamless experiences and digital strategies that drive results.
          </p>

          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Let’s Talk
            </Link>
            <Link
              href="#"
              className="bg-white/10 text-white px-6 py-2 rounded-md font-medium hover:bg-white/20 transition"
            >
              Our Work
            </Link>
          </div>
        </div>

        {/* Right 3D Image */}
        <div className="flex-1 flex justify-center relative">
          <Image
            src="/images/rolball.png" // change path to your actual image
            alt="3D Model"
            width={500}
            height={500}
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

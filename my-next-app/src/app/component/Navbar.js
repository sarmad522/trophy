'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <header className="text-white   absolute z-20  w-full ">
      <div   className=''>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center  relative z-30">
        {/* Logo */}
        <div className="text-2xl font-bold relative z-20">
          <img src="/images/logo.svg" alt="Logo" className=" w-[100%] relative z-20" />
        </div>

        {/* Desktop Nav */}
        <nav className=" md:flex items-center gap-5 relative z-20">
          <div className='md:flex items-center  bg-[#6C54A0] rounded-lg px-4 py-4 gap-5 text-sm font-medium' >
            <Link href="/" className="text-white hover:underline font-bold">Home</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/career" className="text-white hover:underline">Career</Link>
            <Link href="/case-studies" className="text-white hover:underline">Case Studies</Link>
            <Link href="/contact" className="text-white hover:underline">Contact</Link>
          </div>
          <div>
            <button className="p-2 bg-gradient-to-r from-[#4E3682] to-[#A890CD] rounded-md hover:bg-white/20  relative z-20" onClick={() => setOverlayOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <rect x="18.752" y="1.53703" width="12.1045" height="12.1045" rx="2" stroke="white" stroke-width="2" />
                <path d="M7.19631 13.1918C10.2905 13.1918 12.7989 10.6835 12.7989 7.58929C12.7989 4.49507 10.2905 1.98672 7.19631 1.98672C4.1021 1.98672 1.59375 4.49507 1.59375 7.58929C1.59375 10.6835 4.1021 13.1918 7.19631 13.1918Z" stroke="white" stroke-width="2.53348" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="1.14453" y="19.035" width="12.1045" height="12.1045" rx="2" stroke="white" stroke-width="2" />
                <rect x="18.752" y="19.035" width="12.1045" height="12.1045" rx="2" stroke="white" stroke-width="2" />
              </svg>
            </button>
            {overlayOpen && (
  <div className="fixed inset-0 bg-[#0e061e]/90 backdrop-blur-sm z-50 flex flex-col justify-center items-center">
    <button
      onClick={() => setOverlayOpen(false)}
      className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer hover:text-purple-400 transition-colors"
    >
      &times;
    </button>

    <div className="space-y-6 text-white text-2xl font-semibold text-center animate-fade-slide">
      <Link href="/" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">Home</Link>
      <Link href="/about" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">About</Link>
      <Link href="/case-studies" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">Case Studies</Link>
      <Link href="/career" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">Career</Link>
      <Link href="/contact" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">Contact</Link>
      <Link href="/blog" onClick={() => setOverlayOpen(false)} className="block hover:text-purple-400">Blog</Link>
    </div>
  </div>
)}


          </div>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => {
              console.log("Toggling menu");
              setMenuOpen(prev => !prev);
              console.log("menuOpen:", menuOpen);

            }}
            className="p-2 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
</div>
      {/* Mobile Menu - Toggle with inline style fallback */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? '500px' : '0px',
          opacity: menuOpen ? 1 : 0,
          marginTop: menuOpen ? '0.5rem' : '0',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="bg-white/10 rounded-xl mx-4 p-4 space-y-2 text-sm font-medium">
          <Link href="/" className="block text-white hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block text-white hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/career" className="block text-white hover:underline" onClick={() => setMenuOpen(false)}>Career</Link>
          <Link href="/case-studies" className="block text-white hover:underline" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <Link href="/contact" className="block text-white hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button className="p-2 bg-white/10 rounded-md hover:bg-white/20 flex items-center">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

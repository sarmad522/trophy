'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2e014c] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-white/10 rounded-xl px-4 py-2 gap-5 text-sm font-medium">
          <Link href="/" className="text-white hover:underline font-bold">Home</Link>
          <Link href="/about" className="text-white hover:underline">About</Link>
          <Link href="/career" className="text-white hover:underline">Career</Link>
          <Link href="/case-studies" className="text-white hover:underline">Case Studies</Link>
          <Link href="/contact" className="text-white hover:underline">Contact</Link>
          <button className="p-2 bg-white/10 rounded-md hover:bg-white/20">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z"/>
            </svg>
          </button>
        </nav>

        {/* Hamburger Icon */}
       <div className="md:hidden">
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
              <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './component/Navbar';
import MouseBubble from './component/MouseBubble';
// import Footer from './component/Footer';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <MouseBubble />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

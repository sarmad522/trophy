// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './component/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

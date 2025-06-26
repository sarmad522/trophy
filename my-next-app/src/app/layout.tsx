// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './component/Navbar';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './component/Navbar';
import MouseBubble from "./component/MouseBubble";
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
         <MouseBubble />
        <main>{children}</main>
      </body>
    </html>
  );
}

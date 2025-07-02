// components/FlipCard.tsx
import React from "react";

interface FlipCardProps {
  title: string;
  items: string[];
  frontImage: string; // New prop
  backImage: string;  // New prop
}

const FlipCard: React.FC<FlipCardProps> = ({ title, items, frontImage, backImage }) => {
  return (
    <div className="w-72 h-96 perspective">
      <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-x-180">

        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-2xl text-white p-6 backface-hidden flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${frontImage})`,
          }}
        >
          <div className=" px-2 py-2 h-full  flex justify-between items-start flex-col">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="space-y-1 block">
              {items.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-2xl text-white p-6 backface-hidden rotate-x-180  bg-cover bg-center"
          style={{
            backgroundImage: `url(${backImage})`,
          }}
        >
          <div className="  px-2 py-2 h-full  flex justify-between items-start flex-col">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="space-y-1">
              {items.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;

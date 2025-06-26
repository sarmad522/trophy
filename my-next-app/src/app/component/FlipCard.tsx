// components/FlipCard.tsx
import React from "react";

interface FlipCardProps {
  title: string;
  items: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({ title, items }) => {
  return (
    <div className="w-72 h-96 perspective">
      <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-x-180">
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-purple-800 to-purple-500 text-white p-6 backface-hidden flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>

        {/* Back Side (Same Content) */}
        <div
  className="absolute w-full h-full rounded-2xl text-white p-6 backface-hidden rotate-x-180 flex flex-col justify-center"
  style={{ backgroundColor: "#190D3C" }}
>

          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

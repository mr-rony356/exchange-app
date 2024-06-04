// components/Card.tsx
import Image from "next/image";
import React from "react";

interface CardProps {
  subtitle: string;
  imageUrl: string;
}

const ImageCard: React.FC<CardProps> = ({ subtitle, imageUrl }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-[#ffffff11] text-white flex flex-col justify-start min-h-60">
      <div className="px-6 pt-2">
        <Image
          src={imageUrl}
          width={50}
          height={40}
          alt="Sunset in the mountains"
        />
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;

// components/Card.tsx
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ImageCard: React.FC<CardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
      <Image className="w-full" src={imageUrl} width={200} height={100} alt="Sunset in the mountains" />

    </div>
  );
};

export default ImageCard;

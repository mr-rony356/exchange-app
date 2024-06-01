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
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray text-white">
      <div className="px-6 py-4">
        <div className="text-base mb-2">{title}</div>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
      <Image className="w-full" src={imageUrl} width={100} height={100} alt="Sunset in the mountains" />

    </div>
  );
};

export default ImageCard;

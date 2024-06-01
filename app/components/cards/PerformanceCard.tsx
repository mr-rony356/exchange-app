import Image from 'next/image';
import React from 'react';

interface PerformanceCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="flex items-center  max-w-md p-4 gap-4 ">
      <Image src={imageUrl}  width={50} height={100} alt="Performance" />
      <div>
        <h5 className="text-lg my-2">{title}</h5>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default PerformanceCard;

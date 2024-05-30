// components/PercentageCard.tsx
import React from 'react';

interface PercentageCardProps {
  percentage: number;
  subtitle: string;
}

const PercentageCard: React.FC<PercentageCardProps> = ({ percentage, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg border shadow-md max-w-xs p-4">
      <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
      <span className="text-gray-600">{subtitle}</span>
    </div>
  );
};

export default PercentageCard;

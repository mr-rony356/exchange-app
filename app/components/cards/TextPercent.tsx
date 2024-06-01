// components/PercentageCard.tsx
import React from 'react';

interface PercentageCardProps {
  value: string;
  subtitle: string;
}

const PercentageCard: React.FC<PercentageCardProps> = ({ value, subtitle }) => {
  return (
    <div className="flex flex-col  justify-start  max-w-xs p-4">
      <span className="text-5xl  text-gray-600">{value}%</span>
      <span className="text-gray-800 my-2  text-sm">{subtitle}</span>
    </div>
  );
};

export default PercentageCard;

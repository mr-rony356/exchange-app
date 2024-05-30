"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  type: 'apply' | 'discover';
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const baseStyles = "px-4 md:px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm  md:text-base";
  const applyStyles =
    "bg-orange-600 text-white btn-shadow";
const discoverStyles =
    "border-2 border-white text-white hover:bg-white hover:text-black shadow-[0 0 24px rgba(99,224,120,0.6)]";

  const styles = type === 'apply' ? applyStyles : discoverStyles;

  return (
    <button className={`${baseStyles} ${styles}`}>
      {text}
    </button>
  );
};

export default Button;

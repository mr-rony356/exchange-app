"use client";

import React from 'react';

interface ButtonProps {
  text: string;
  type: 'apply' | 'discover';
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const baseStyles = "px-4 md:px-8 py-3 rounded-full  transition-all duration-300 text-sm  md:text-base";
  const applyStyles =
    "bg-orange-600 text-white btn-shadow";
const discoverStyles =
    "border-2  btn-shadow border-white text-white hover:bg-white hover:text-black";

  const styles = type === 'apply' ? applyStyles : discoverStyles;

  return (
    <button className={`${baseStyles} ${styles}`}>
      {text}
    </button>
  );
};

export default Button;

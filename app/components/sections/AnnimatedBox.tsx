import React from 'react';

const Chevron = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center bg-black">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="stroke-current text-white">
          <path d="M10 90 L50 10 L90 90 Z" fill="none" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full dot"></div>
    </div>
  );
};

export default Chevron;

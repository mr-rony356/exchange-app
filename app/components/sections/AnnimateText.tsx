// components/AnimatedText.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-white text-6xl md:text-9xl font-bold"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants} className={`text-gray-${500 + index * 100}`}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

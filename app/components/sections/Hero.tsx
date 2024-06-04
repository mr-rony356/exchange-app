"use client";
import React from "react";
import Silber from "../../../public/images/silber-block.png";
import Card from "../../../public/images/hero-card.png";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
import { heroTitle } from "@/app/utils/animation";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.5 },
    },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.section
      className="bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col mt-32 py-8">
        <motion.div
          variants={heroTitle}
          initial="hidden"
          animate="visible"
          className="text-white text-6xl md:text-9xl font-bold"
        >
          <span className="text-gray-400">T</span>
          <span className="text-gray-400">A</span>
          <span className="text-gray-500">K</span>
          <span className="text-gray-600">E</span>
          <span> </span>
          <span className="text-gray-600">B</span>
          <span className="text-gray-600">A</span>
          <span className="text-gray-700">C</span>
          <span className="text-gray-700">K</span>
        </motion.div>
        <div className="flex-col md:flex-row flex gap-4">
          <motion.div variants={imageVariants}>
            <Image src={Silber} alt="silber" />
          </motion.div>
          <motion.div variants={childVariants}>
            <span className="text-6xl md:text-9xl text-white opacity-[.8] font-bold">
              WHAT IS{" "}
            </span>
          </motion.div>
        </div>
        <div className="flex-col md:flex-row flex gap-8 items-center w-full">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <motion.span
              variants={childVariants}
              className="text-6xl md:text-9xl text-white opacity-[.8] font-bold"
            >
              YOURS.
            </motion.span>
            <motion.p
              variants={childVariants}
              className="text-xl text-gray-400"
            >
              In a world where data is currency, it&apos;s time to reclaim what&apos;s
              rightfully yours. Your digital identity, your personal
              information, your financial freedom—all in your hands.
            </motion.p>
            <motion.div
              className="flex justify-start mb-4 gap-6"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button text="APPLY NOW" type="apply" />
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button text="DISCOVER" type="discover" />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="w-full md:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image src={Card} alt="silber" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

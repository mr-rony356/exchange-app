"use client";
// src/pages/AnimationShowcase.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Animations from "../utils/animation";
import placeholderImage from "../../public/placeholder.png"; // You'll need a placeholder image

const AnimationShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 mt-48">
      <h1 className="text-4xl font-bold mb-8">Animation Showcase</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Container Animations</h2>
        <motion.div
          variants={Animations.staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              variants={Animations.fadeInUp}
              className="bg-blue-500 p-4 rounded"
            >
              Item {i}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Text Animations</h2>
        <motion.h3
          variants={Animations.heroTitle}
          initial="hidden"
          animate="visible"
          className="text-3xl mb-4"
        >
          Hero Title
        </motion.h3>
        <motion.p
          variants={Animations.fadeInLeft}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          Fade in from left text.
        </motion.p>
        <motion.div
          variants={Animations.typewriter}
          initial="hidden"
          animate="visible"
          className="bg-blue-500 text-white p-2 inline-block mb-4"
        >
          Typewriter effect
        </motion.div>
        <motion.div
          variants={Animations.staggeredLetters()}
          initial="hidden"
          animate="visible"
          className="text-2xl"
        >
          {Array.from("STAGGERED").map((letter, i) => (
            <motion.span key={i} variants={Animations.letterVariant}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Image Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={Animations.zoomIn}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={placeholderImage}
              alt="Zoom In"
              width={300}
              height={200}
              className="rounded"
            />
            <p>Zoom In</p>
          </motion.div>
          <motion.div
            variants={Animations.rotateIn}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={placeholderImage}
              alt="Rotate In"
              width={300}
              height={200}
              className="rounded"
            />
            <p>Rotate In</p>
          </motion.div>
          <motion.div
            variants={Animations.floatImage}
            initial="rest"
            whileHover="hover"
          >
            <Image
              src={placeholderImage}
              alt="Float"
              width={300}
              height={200}
              className="rounded"
            />
            <p>Float (Hover)</p>
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Button Animations</h2>
        <div className="flex space-x-4">
          <motion.button
            variants={Animations.pulseButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="px-6 py-3 bg-green-500 text-white rounded-full"
          >
            Pulse Button
          </motion.button>
          <motion.button
            variants={Animations.waveButton}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            custom={0}
            className="px-6 py-3 bg-blue-500 text-white rounded-full"
          >
            Wave Button
          </motion.button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">List Item Animations</h2>
        <motion.ul
          variants={Animations.listStaggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {[
            "Fast Transactions",
            "Secure Storage",
            "Low Fees",
            "24/7 Support",
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={i % 2 ? Animations.slideInLeft : Animations.popIn}
              className="bg-gray-700 p-4 rounded"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Section Animations</h2>
        <motion.div
          variants={Animations.fadeInSection}
          initial="hidden"
          animate="visible"
          className="bg-purple-500 p-8 rounded mb-8"
        >
          <h3 className="text-2xl mb-4">Fade In Section</h3>
          <p>This entire section fades in smoothly.</p>
        </motion.div>
        <motion.div
          variants={Animations.slideUpSection}
          initial="hidden"
          animate="visible"
          className="bg-indigo-500 p-8 rounded"
        >
          <h3 className="text-2xl mb-4">Slide Up Section</h3>
          <p>This section slides up into view.</p>
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Special Animations</h2>
        <motion.p
          variants={Animations.revealText}
          initial="hidden"
          animate="visible"
          className="text-3xl mb-8"
        >
          {["Take", "Back", "What's", "Yours"].map((word, i) => (
            <motion.span
              key={i}
              variants={Animations.revealWord}
              className="mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        <svg width="200" height="200" viewBox="0 0 100 100">
          <motion.path
            d="M20,50 C20,-50 80,150 80,50 C80-50 20,150 20,50 z"
            stroke="#fff"
            strokeWidth="5"
            fill="none"
            variants={Animations.drawSVGPath}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </section>
    </div>
  );
};

export default AnimationShowcase;

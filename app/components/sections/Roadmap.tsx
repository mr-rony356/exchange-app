"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import HeaderText from "../TextHeader";
import AconomyCard from "../../../public/images/Aconomy Card.svg";
import Idea from "../../../public/images/Idea.svg";
import { fadeInLeft, fadeInUp, staggerContainer } from "@/app/utils/animation";

type SectionContent = {
  text: string;
  image?: string; // Optional image URL
};

type Data = {
  [key: string]: SectionContent;
};

const data: Data = {
  Idea: {
    text: "The idea originated from a group of venture capitalists aiming to consolidate your daily needs into a comprehensive crypto-based platform.",
    image: "/images/idea.png", // Optional image path
  },
  Finance: {
    text: "Your finance content here...",
  },
  Finances: {
    text: "Your finance content here...",
  },
  Finansce: {
    text: "Your finance content here...",
  },
  Finssansce: {
    text: "Your finance content here...",
  },
  Finanssce: {
    text: "Your finance content here...",
  },
  Finassnsce: {
    text: "Your finance content here...",
  },
  Finassnscse: {
    text: "Your finance content here...",
  },
  // Add more sections as needed
};

const RoadmapSection = () => {
  const [activeSection, setActiveSection] = useState("Idea");

  return (
    <section className="relative">
      <div className="left-circle"></div>
      <HeaderText text="Roadmap" />
      <div className="flex gap-12 md:gap-0">
        <nav className="flex flex-col space-y-2 w-1/4">
          {Object.keys(data).map((section) => (
            <button
              key={section}
              className={`px-3 py-3 rounded-md flex items-center text-gray-400 text-[16px] text-left ${
                activeSection === section
                  ? "text-white font-bold text-lg"
                  : "pl-10"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {activeSection === section && (
                <span className="triangle-right mr-4 inline-block"></span>
              )}
              {section}
            </button>
          ))}
        </nav>
        <div className="p-1 md:p-4 w-3/4">
          <p className="text-xl md:text-4xl mb-12">
            {data[activeSection].text}
          </p>
          {data[activeSection].image && (
            <div className="h-full">
              <Image
                src={Idea}
                alt={activeSection}
                className="mt-4"
                width={500}
                height={100}
              />
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col gap-12 text-white items-center relative pb-12 justify-center mt-24 w-full bg-gradient-to-t from-[#ffffff12] to-transparent to-80%"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-center my-8"
        >
          <motion.p
            className="mb-6 text-sm text-orange-500"
            variants={fadeInUp}
          >
            ACONOMY CARD
          </motion.p>
          <motion.h1
            className="text-center text-3xl md:text-5xl mb-24"
            variants={fadeInUp}
          >
            Utilize cryptocurrency for <br /> transactions in over 46 million
            stores.
          </motion.h1>

          <div className="flex justify-center px-24 pt-0 pb-12 w-full">
            <motion.div
              className="center-circle"
              variants={fadeInUp}
            ></motion.div>
            <motion.div variants={fadeInUp}>
              <Image src={AconomyCard} alt="Aconomy Card" />
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center items-center gap-6 lg:gap-24"
            variants={staggerContainer}
          >
            <motion.p
              className="pl-2 md:pl-5 border-l-2 border-orange-700 h-10 mt-6 flex items-center"
              variants={fadeInLeft}
            >
              No limits card
            </motion.p>
            <motion.p
              className="pl-2 md:pl-5 border-l-2 border-orange-700 h-10 mt-6 flex items-center"
              variants={fadeInLeft}
            >
              Dedicated support
            </motion.p>
            <motion.p
              className="pl-2 text-left md:pl-5 border-l-2 border-orange-700 h-10 mt-6 flex items-center"
              variants={fadeInLeft}
            >
              Easily transfer your profits <br /> to cards
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RoadmapSection;

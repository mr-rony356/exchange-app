"use client";
import Image from "next/image";
import { useState } from "react";
import HeaderText from "../TextHeader";
import AconomyCard from "../../../public/images/Aconomy Card.svg";

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
    image: "/images/idea.svg", // Optional image path
  },
  Finance: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finances: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finansce: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finssansce: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finanssce: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finassnsce: {
    text: "Your finance content here...",
    // No image for this section
  },
  Finassnscse: {
    text: "Your finance content here...",
    // No image for this section
  },
  // Add more sections as needed
};

const RoadmapSection = () => {
  const [activeSection, setActiveSection] = useState("Idea");

  return (
    <section className="relative">
              <div className="left-circle">
          
          </div>
  
      <HeaderText text="Roadmap" />
      <div className="flex gap-12 md:gap-0">
        <nav className="flex flex-col space-y-2   w-1/4">
          {Object.keys(data).map((section) => (
            <button
              key={section}
              className={`px-3 py-3 rounded-md flex items-center text-gray-400 text-[16px]  text-left ${
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
          <p className=" text-xl md:text-4xl mb-12">{data[activeSection].text}</p>
          {data[activeSection].image && (
            <div className="h-full">
              <Image
                src={data[activeSection].image || " "}
                alt={activeSection}
                className="mt-4"
                width={500}
                height={100}
                objectFit="contain"
              />
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-12  text-white items-center  relative justify-center  mt-24 w-full">
        <div className="max-w-4xl text-center">
          <p className="text-orange-500 text-center my-8 ">ACONOMY CARD</p>
          <h1 className="text-center text-3xl md:text-5xl mb-24 ">
            Utilize cryptocurrency for <br /> transactions in over 46 million
            stores.
          </h1>
          <div className="flex justify-center  px-24 pt-0 pb-12 !w-full">
            <div className="center-circle">

            </div>
            <Image src={AconomyCard} alt="image" />
          </div>
          <div className="flex justify-center  items-center gap-6 lg:gap-24">
          <p className=" pl-2 md:pl-5 border-l-2 border-orange-700 h-12 mt-6 flex items-center">No limits card</p>
          <p className=" pl-2 md:pl-5 border-l-2 border-orange-700 h-12 mt-6 flex items-center">No limits card</p>
          <p className=" pl-2 md:pl-5 border-l-2 border-orange-700 h-12 mt-6 flex items-center">No limits card</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default RoadmapSection;

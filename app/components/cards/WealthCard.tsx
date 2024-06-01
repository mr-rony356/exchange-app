// components/Card.tsx
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  title: string;
  subtitle: string[];
  imageUrl: string;
}

const WealthCard: React.FC<CardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="subs-grad max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white py-6">
      <div className="px-6 py-4 mb-10">
        <div className="text-xl text-orange-500 mb-2">{title}</div>
        {subtitle.map((sub, index) => {
          return (
            <p
              key={index}
              className="text-white my-2 text-base items-center flex gap-4"
            >
              {" "}
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
              <span>{sub}</span>
            </p>
          );
        })}
      </div>
      <div className="px-10 py-4">
        <Image
          className="w-full"
          src={imageUrl}
          width={100}
          height={200}
          alt="Sunset in the mountains"
        />
      </div>
    </div>
  );
};

export default WealthCard;

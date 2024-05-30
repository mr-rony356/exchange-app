import React from "react";
import Silber from "../../../public/images/silber-block.png";
import Card from "../../../public/images/hero-card.png";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto md:px-16 flex flex-col px-10  mt-32 py-8">
        <div className="text-white text-6xl md:text-9xl font-bold">
          <span className="text-gray-400">T</span>
          <span className="text-gray-400">A</span>
          <span className="text-gray-500">K</span>
          <span className="text-gray-600">E</span>
          <span> </span>
          <span className="text-gray-600">B</span>
          <span className="text-gray-600">A</span>
          <span className="text-gray-700">C</span>
          <span className="text-gray-700">K</span>
        </div>
        <div className="flex-col md:flex-row flex  gap-4 ">
          <Image src={Silber} alt="silber" />
          <div>
            <span className="text-6xl md:text-9xl  text-white opacity-[.8] font-bold">
              WHAT IS{" "}
            </span>
          </div>
        </div>
        <div className="flex-col md:flex-row flex gap-8 items-center w-full ">
          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <span className="text-6xl md:text-9xl  text-white opacity-[.8] font-bold">
              YOURS.
            </span>
            <p className="text-xl text-white opacity-[.5]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, doloribus eius mollitia a dolorum animi!{" "}
            </p>
            <div className="flex justify-start mb-4 gap-6">
              <Button text="APPLY NOW" type="apply" />
              <Button text="DISCOVER" type="discover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="">
              <Image src={Card} alt="silber" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

// Define a type for the logo properties
type LogoProps = {
  src: string;
  alt: string;
};

// Component for a single logo
const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <div className="flex justify-center items-center">
    <Image src={src} alt={alt} width={300} height={200} />
  </div>
);

// Main component with the grid of logos
const LogosGrid = () => (
  <section className="bg-black">
    <div className=" container mx-auto md:px-36 ">
      <p className=" text-center text-white opacity-[.5] text-sm ">
        Lorem ipsum dolor sit amet.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-4 mt-16">
        {/* Map over an array of logo information to render each logo */}
        {[
          { src: "/images/amazon.svg", alt: "Amazon logo" },
          { src: "/images/apple.svg", alt: "Apple logo" },
          { src: "/images/netflix.svg", alt: "Amazon logo" },
          { src: "/images/playstation.svg", alt: "Amazon logo" },
          { src: "/images/spotify.svg", alt: "Amazon logo" },
          { src: "/images/amazon.svg", alt: "Amazon logo" },
          { src: "/images/apple.svg", alt: "Apple logo" },
          { src: "/images/netflix.svg", alt: "Amazon logo" },
          { src: "/images/playstation.svg", alt: "Amazon logo" },
          { src: "/images/spotify.svg", alt: "Amazon logo" },
          // ... Add all logos here
        ].map((logo) => (
          <Logo key={logo.alt} {...logo} />
        ))}
      </div>
    </div>
  </section>
);

export default LogosGrid;

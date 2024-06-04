import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type LogoProps = {
  src: string;
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <motion.div
    className="md:w-48 w-36"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Image src={src} alt={alt} width={350} height={200} />
  </motion.div>
);

const LogosGrid = () => (
  <motion.section
    className="bg-black"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className=" container mx-auto md:px-6 ">
      <p className=" text-center text-white opacity-[.5] text-sm my-4 ">
        Lorem ipsum dolor sit amet.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 space-y-2">
        {[
          { src: "/images/amazon.svg", alt: "Amazon logo" },
          { src: "/images/apple.svg", alt: "Apple logo" },
          { src: "/images/netflix.svg", alt: "Amazon logo" },
          { src: "/images/playstation.svg", alt: "Amazon logo" },
          { src: "/images/spotify.svg", alt: "Amazon logo" },
          { src: "/images/smshub.svg", alt: "smshub logo" },
          { src: "/images/hugo.svg", alt: "Hugo logo" },
          { src: "/images/Okx.svg", alt: "Amazon logo" },
          { src: "/images/krak.svg", alt: "krak logo" },
        ].map((logo) => (
          <Logo key={logo.alt} {...logo} />
        ))}
      </div>
    </div>
  </motion.section>
);

export default LogosGrid;

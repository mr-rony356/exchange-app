// components/Footer.tsx
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="curve-section text-gray-400 relative">
      <div className="relative z-10 container  mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-16">
        <div className="flex justify-center text-left px-8 md:px-48">
          <div className="my-4 p-6 rounded-xl border-gray-600 border-2 border-solid">
            <h2 className="text-white text-2xl font-bold">
              Explore Value. Explore Aconomy.
            </h2>
            <p className="mt-4 text-gray-300">
              Aconomy &apos; s mission is to make cryptocurrency accessible to
              everyone, helping you manage your digital asset wealth and achieve
              a life of independence, value, and growth. Apply today to begin
              your journey.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-2 text-orange-600 py-2"
            >
              <span className="login-text">APPLY NOW</span>
              <span className="login-icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex  flex-col  md:flex-row justify-between ">
          <div className="md:w-1/2 mx-auto flex flex-col items-start ">
            <Link href="/" className="text-white text-xl font-bold">
              <Image className="w-32 md:w-52 " src={logo} alt="logo" />
            </Link>
            <p className="mt-4 text-left text-gray-500">
              The Shard
              <br />
              32 London Bridge Street,
              <br />
              London SE1 9SG,
              <br />
              United Kingdom
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col   md:flex-row md:space-x-8 mt-8 md:mt-0 text-gray-500 ">
            <div className="md:w-1/3">
              <h3 className="text-xl">INFORMATION</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Litepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    EUM Explorer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <h3 className="text-xl">EXPLORE</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Staking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Masternodes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <h3 className="text-xl">CONNECT</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm text-center">
            &copy; 2024, Aconomy. All trademarks and copyrights belong to their
            respective owners.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 text-xs md:text-sm  text-gray-600">
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              AML - CFT & KYC Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Private Investments
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

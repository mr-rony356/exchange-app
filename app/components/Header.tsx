"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-transparent backdrop-blur-sm text-white fixed top-0 w-full z-10">
      <div className="mx-0 md:mx-4 flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold flex items-center ">
          <Image className="w-36 md:w-52 " src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex space-x-16 text-gray-400 ">
          <Link href="/system">System</Link>
          <Link href="/exchange">Exchange</Link>
          <Link href="/bank">Bank</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/vision">Vision</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/login" className="flex items-center gap-2">
            <span className="login-text">LOG IN</span>
            <span className="login-icon">
              <FaArrowRight />
            </span>
          </Link>
          <Button text="APPLY NOW" type="apply" />
        </div>
        <div className="md:hidden flex items-center gap-3">
          <Button text="APPLY NOW" type="apply" />
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-10 h-8 text-white"
              fill="green"
              stroke="green"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden transition-all duration-300 justify-center items-center flex flex-col py-8 text-2xl">
          <Link href="/system" className="block px-4 py-2">
            System
          </Link>
          <Link href="/exchange" className="block px-4 py-2">
            Exchange
          </Link>
          <Link href="/bank" className="block px-4 py-2">
            Bank
          </Link>
          <Link href="/shop" className="block px-4 py-2">
            Shop
          </Link>
          <Link href="/vision" className="block px-4 py-2">
            Vision
          </Link>
          <Link href="/resources" className="block px-4 py-2">
            Resources
          </Link>
          <Link href="/contact" className="block px-4 py-2">
            Contact
          </Link>
          <Link href="/login" className="flex items-center gap-2 my-4">
            <span className="login-text">LOG IN</span>
            <span className="login-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      )}
      <style jsx>{`
        .login-text:hover + .login-icon,
        .login-icon:hover {
          transform: translateX(3px); /* Adjust as needed */
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { FiMenu, FiX } from "react-icons/fi"; // Import both icons

const Navbar = () => {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className="fixed z-[50] flex flex-col items-center gap-4 py-2 px-4 rounded-lg top-4 right-4 bg-[#1a1a1a] md:bottom-14 md:w-[5.1vw] md:max-w-[6rem] md:left-[3.6vw] md:top-auto md:right-auto">
      {/* Toggle button for small screens */}
      <button
        className="md:hidden relative flex justify-center items-center transition-opacity duration-300"
        onClick={() => setShowSocials(!showSocials)}
      >
        {/* Icon container */}
        <div className="relative w-6 h-6">
          {/* FiMenu icon */}
          <FiMenu
            size={24}
            className={`text-white transition-opacity duration-300 absolute inset-0 ${
              showSocials ? "opacity-0" : "opacity-100"
            }`}
            style={{ transitionDelay: showSocials ? "0ms" : "150ms" }}
          />

          {/* FiX icon */}
          <FiX
            size={24}
            className={`text-white transition-opacity duration-300 absolute inset-0 ${
              showSocials ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: showSocials ? "150ms" : "0ms" }}
          />
        </div>
      </button>

      {/* Social Links - Display based on screen size and toggle state */}
      <div
        className={`flex-col items-center gap-4 ${
          showSocials ? "flex" : "hidden"
        } md:flex mt-2`}
      >
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="w-6 h-6 my-1"
            />
          </a>
        ))}
      </div>

      {/* Styles for small screens */}
      <style jsx>{`
        @media (max-width: 500px) {
          div {
            
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;

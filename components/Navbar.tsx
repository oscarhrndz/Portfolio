"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for 0.5 seconds before starting the animation
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 500); // Reduced delay to 0.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  return (
    <div className="fixed z-[40] flex flex-col items-center gap-4 py-2 px-4 rounded-lg top-4 right-4 bg-[#1a1a1a] md:bg-inherit md:bottom-36 md:w-auto md:max-w-none md:left-12 md:top-96 md:right-auto md:flex-row">
      {/* Toggle button for small screens */}
      <button
        className="md:hidden relative flex justify-center items-center transition-opacity duration-300"
        onClick={() => setShowSocials(!showSocials)}
      >
        <div className="relative w-6 h-6">
          <FiMenu
            size={24}
            className={`text-white transition-opacity duration-300 absolute inset-0 ${
              showSocials ? "opacity-0" : "opacity-100"
            }`}
            style={{ transitionDelay: showSocials ? "0ms" : "150ms" }}
          />
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
        className={`${
          showSocials ? "flex" : "hidden"
        } flex-col items-center gap-4 md:flex md:flex-row mt-2 mb-2`}
      >
        {Socials.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isMounted ? "link-animation" : "opacity-0"
            }`} // Initially set opacity to 0 until mounted
            style={{ animationDelay: `${index * 0.15}s` }} // Adjusted to slightly shorter delay between links
          >
            <Image
              src={social.src}
              alt={social.name}
              width={100}
              height={100}
              className="w-6 h-6 my-1 transition-transform duration-300 hover:scale-125"
            />
          </a>
        ))}
      </div>

      <style jsx>{`
        /* Animation for social links */
        @keyframes fadeIn {
          0% {
            opacity: 0; /* Make the links initially invisible */
            transform: translateY(20px); /* Position them below */
          }
          100% {
            opacity: 1; /* Make them fully visible */
            transform: translateY(0); /* Bring them to their original position */
          }
        }

        /* Apply the animation only after mounted */
        .link-animation {
          opacity: 0; /* Start hidden */
          transform: translateY(20px); /* Start below */
          animation: fadeIn 0.8s ease forwards; /* Trigger fadeIn animation with reduced duration */
        }
      `}</style>
    </div>
  );
};

export default Navbar;

"use client"

import React from 'react';
import Image from "next/image";
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div 
      className="fixed z-[50] flex flex-col justify-center items-center gap-4 py-6 rounded-lg"
      style={{
        width: '5.1vw',
        maxWidth: '6rem',
        
        bottom: '22.5vh', // Adjust this to position the navbar higher or lower
        left: '3.6vw',
        backgroundColor: '#1a1a1a'
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {Socials.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}

export default Navbar;




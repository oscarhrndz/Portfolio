import React from 'react';
import Image from "next/image";
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div 
    style={{ bottom: "80px", left: "50px", backgroundColor: "#1a1a1a" }}
    className='fixed  z-[40] w-[70px] bg-[#1a1a1a] flex flex-col justify-center items-center gap-4 py-4 rounded-lg border border-white'> {/* Adjusted position, width, and flex-col for vertical layout */}
      
      <div className='flex flex-col items-center gap-3'> {/* Changed to flex-col for vertical icon alignment */}
        {Socials.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="my-1" // Optional margin on images for additional space
            />
          </a>
        ))}

        {/* CV download link positioned below icons */}
        <a href="/CV_Oscar_Hernandez.pdf" download className="text-white text-[14px] font-medium hover:underline border border-white rounded-full px-3 py-1 mt-4">
          CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;

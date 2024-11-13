// components/PoweredPopup.tsx

import React, { useState, useEffect, useRef } from 'react';
import { PoweredLogos } from '@/constants';
import Image from 'next/image';

const PoweredPopup: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref for the popup card to detect clicks outside
  const popupRef = useRef<HTMLDivElement>(null);

  // Check for screen size on initial load and on window resize
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Small screen button */}
      {isSmallScreen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-20 bg-[#212121] text-white py-2 px-4 rounded-lg"
        >
          ℹ️
        </button>
      ) : (
        // Normal display for larger screens
        <div className="fixed bottom-4 right-4 z-20 flex items-center space-x-2 slide-in-right">
          <span className="text-sm text-gray-500">Powered by:</span>
          {PoweredLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={24}
                height={24}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      )}

      {/* Centered popup widget for small screens */}
      {isOpen && isSmallScreen && (
        <div className="fixed inset-0 flex items-center justify-center pr-10 pl-10 bg-black bg-opacity-30 z-30">
          <div
            ref={popupRef}
            className="bg-[#212121] p-4 rounded-lg shadow-lg text-center max-w-xs w-full relative"
          >
            {/* Close button in top-right corner */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
            >
              ✕
            </button>
            <span className="block text-sm text-gray-100 mb-2">Powered by:</span>
            <div className="flex justify-center space-x-2">
              {PoweredLogos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={24}
                    height={24}
                    className="opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PoweredPopup;

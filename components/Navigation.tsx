"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Listen for screen size changes to toggle between title and icon
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger reflow to ensure animations work consistently on all elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className="fixed z-[50] rounded-lg flex flex-col py-2 justify-center items-start bg-gray-800 md:bg-inherit md:bottom-[44vh] xl:bottom-[40vh] md:left-12 md:w-[10.1vw] md:h-[32vh] max-h-[15rem] p-4 md:p-[3vh] transition-all duration-300"
    >
      {NavLinks.map((nav, index) => {
        const linkClassName = `mb-3 mt-3 ${isMounted && !isMobile ? 'link-animation' : ''}`;
        const linkStyle = { animationDelay: `${index * 0.1}s` }; // Staggered delay for each link

        // Apply 'CV' label if mobile and the link is 'Download CV'
        const title = isMobile && nav.name === 'Download CV' ? 'CV' : nav.title;

        return (
          <div key={nav.name} className={linkClassName} style={linkStyle}>
            {/* Render the text/icon only if mounted */}
            {isMounted && (
              <>
                {nav.href ? (
                  <a href={nav.href} download>
                    <span className="inline-block transition-transform duration-300 text-white hover:text-gray-400 hover:scale-125">
                      {isMobile ? <nav.icon className="w-5 h-5" /> : title}
                    </span>
                  </a>
                ) : (
                  <Link href={nav.link}>
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        path === nav.link || (path === '/' && nav.link === '/')
                          ? "text-[#0ABAB5] scale-110 font-bold "
                          : "text-white hover:text-gray-400 hover:scale-125"
                      }`}
                    >
                      {isMobile ? <nav.icon className="w-5 h-5" /> : title}
                    </span>
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}

      <style jsx>{`
        /* Styles for small screens */
        @media (max-width: 1300px) {

        }
        @media (max-width: 768px) {
          div {
            width: 100%;
            height: 6vh;
            bottom: 0;
            left: 0;
            flex-direction: row;
            justify-content: space-between; /* Space out the icons */
            padding: 0 1rem; /* Add padding to the left and right */
            background-color: #1a1a1a;
            border-radius: 0;
          }

          .link-animation {
            opacity: 1 !important;  /* Ensure animation does not interfere with text display */
          }
        }

        /* Animation for larger screens */
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Initial hidden state and animation */
        .link-animation {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInFromLeft 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Navigation;

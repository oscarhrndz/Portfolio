// app/layout.tsx
"use client";

import React, { useLayoutEffect, useState } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Navigation from '@/components/Navigation';
import CVLink from '@/components/CV';
import SplineComponent from '@/components/Spline';
import { usePathname } from 'next/navigation';
import LoadingIndicator from '@/components/LoadingIndicator'; // Import the loading indicator
import Transition from '@/components/Transition';
import useDeviceSize from "./hook"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [width] = useDeviceSize()
  const pathname = usePathname();


  
  useLayoutEffect(() => {

    const handleLoad = () => setIsPageLoaded(true);

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      // Otherwise, add the load event listener
      window.addEventListener("load", handleLoad);
    }

    // Clean up event listener on component unmount
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <html lang="en">
      <body className="font-project">
        {/* Show loading indicator while the page is loading */}
        {!isPageLoaded && <LoadingIndicator />}

        {children}

        {/* Conditionally render Navigation, CVLink, and Navbar after page load */}
        {isPageLoaded && (
          <>
          <div className={pathname === '/' && width >= 768 ? "move-right" : ''}><Navbar /><Navigation />
          <CVLink /></div>
 
            
            {/* Render SplineComponent only on the homepage */}
            {pathname === '/' && <SplineComponent />}
            
            {pathname === '/' && <Transition />}
          </>
        )}
      </body>
    </html>
  );
}

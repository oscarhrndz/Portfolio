"use client";

import React, { useLayoutEffect, useState } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Navigation from '@/components/Navigation';
import SplineComponent from '@/components/Spline';
import { usePathname } from 'next/navigation';
import LoadingIndicator from '@/components/LoadingIndicator'; // Import the loading indicator
import useDeviceSize from "./hook";
import { motion } from "framer-motion";  // Import framer-motion for animation
import PoweredPopup from '@/components/PoweredPopup';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [width] = useDeviceSize();
  const pathname = usePathname();

  useLayoutEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <html lang="en">
      <body className="font-project">
        {!isPageLoaded && <LoadingIndicator />}

        {/* Apply transition effect to all pages */}
        <motion.div
          key={pathname}  // Ensure animation on route change
          initial={{ opacity: 0, scale: 1 }}  // Set initial opacity and scale
          animate={{ opacity: 1, scale: 1 }}  // Animate to full opacity and scale
          exit={{ opacity: 0, scale: 1 }}  // Fade out and reset scale on exit
          transition={{ duration: 0.5, ease: "easeInOut" }}  // Smooth fade transition
        >
          {children}
        </motion.div>

        {isPageLoaded && !pathname.startsWith('/my-projects/') && (
          <div className={pathname === '/' && width >= 768 ? "move-right" : ''}>
            <Navbar />
            <Navigation />
          </div>
        )}

        {pathname === '/' && <SplineComponent />}
        {pathname === '/' && <PoweredPopup />}
        
      </body>
    </html>
  );
}

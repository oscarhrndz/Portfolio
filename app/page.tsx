"use client"; // Add this directive at the top

import React, { useState, useEffect } from 'react';
import LoadingIndicator from "@/components/LoadingIndicator"; // Import your LoadingIndicator component

export default function Home() {
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Set the loading state to false after the component mounts
    setLoading(false);
  }, []); // This effect runs once when the component mounts

  return (
    <main
      className="w-screen h-screen flex items-start p-0 relative"
      style={{
        backgroundImage: 'url(/bg/bg_home.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Show loading indicator until the page is fully loaded */}
      {loading ? (
        <div className="flex items-center justify-center h-full w-full z-10">
          <LoadingIndicator /> {/* Custom loading indicator */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center z-10 w-full h-full">
          {/* Add your content here */}
        </div>
      )}
    </main>
  );
}

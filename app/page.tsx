"use client";

import React, { useState, useEffect } from 'react';
import LoadingIndicator from "@/components/LoadingIndicator";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main
      className="w-screen h-screen overflow-hidden flex items-start p-0 relative"
      style={{
        backgroundImage: 'url(/bg/bg_home.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full w-full z-10">
          <LoadingIndicator />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center z-10 w-full h-full">
          {/* Content goes here */}
        </div>
      )}
    </main>
  );
}

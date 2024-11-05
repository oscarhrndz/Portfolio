// app/components/LoadingIndicator.tsx
import React from 'react';
const LoadingIndicator = () => {
  return (
    <div className=' fixed top-0 left-0 w-full h-full bg-[#121212] flex flex-col justify-center items-center z-50 text-white text-2xl'>
      <div>Loading...</div>
      <div className="loading-line" /> {/* Animated line */}
    </div>
  );
};

export default LoadingIndicator;

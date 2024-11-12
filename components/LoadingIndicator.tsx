import React, { useState, useEffect } from 'react';

const LoadingIndicator: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Start the loading animation after component mounts
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth < 100) {
          return prevWidth + 1; // Increase the width by 1% every interval
        } else {
          clearInterval(interval); // Stop the interval once it reaches 100%
          return 100;
        }
      });
    }, 50); // Adjust this value to control the speed of the loading bar

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#121212] flex flex-col justify-center items-center z-50 text-white text-xl">
      <div className="text-2xl mb-4">Loading...</div>
      
      {/* Loading Bar */}
      <div
        style={{
          width: '80%', // Full width of the loading bar (can adjust as needed)
          height: '6px', // Height of the loading bar
          backgroundColor: '#444', // Background color of the bar (darker shade)
          borderRadius: '4px', // Rounded corners
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Progress bar */}
        <div
          style={{
            width: `${width}%`, // Dynamically set the width based on the state
            height: '100%',
            backgroundColor: '#3498db', // The color of the loading bar
            transition: 'width 0.1s ease-out', // Smooth transition for width change
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Optional: Add a spinner */}
      <div
        style={{
          marginTop: '20px',
          borderTop: '4px solid #3498db',
          borderRight: '4px solid transparent',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          animation: 'spin 1s linear infinite', // Spinning animation
        }}
      />
    </div>
  );
};

export default LoadingIndicator;

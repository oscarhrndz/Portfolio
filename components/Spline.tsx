"use client";

import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the component to visible once it's mounted
    setIsVisible(true);
  }, []);

  return (
    <div className={`spline-container ${isVisible ? 'fade-in' : ''}`}>
      <Spline scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode" />
      
      <style jsx>{`
        .spline-container {
          position: absolute;
          top: 7vh;
          right: 0;
          left: 50vh;
          width: 95%;
          height: 95%;
          opacity: 0; /* Initially invisible */
          transform: scale(0.8); /* Slightly scaled down */
          transition: all 2s ease-in-out; /* Smooth transition */
        }

        /* Animation class for fading in and scaling up */
        .fade-in {
          opacity: 1;
          transform: scale(1); /* Scale to normal size */
        }

        @media (max-width: 1050px) {
          .spline-container {
            position: absolute;
            top: 57%;
            left: 75%;
            transform: translate(-50%, -50%);
            width: 90%;
            height: 90%;
          }
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .spline-container {
            position: absolute;
            top: 57%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            height: 90%;
          }
        }

        /* Adjustments for very small screens, like phones */
        @media (max-width: 480px) {
          .spline-container {
            width: 90%;
            height: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default SplineComponent;

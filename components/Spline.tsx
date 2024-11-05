// components/SplineComponent.tsx
"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  return (
    <div className="spline-container">
      <Spline scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode" />
      
      <style jsx>{`
        .spline-container {
          position: absolute;
          top: 7vh;
          right: 0;
          left: 50vh;
          width: 95%;
          height: 95%;
          transition: all 0.3s ease;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .spline-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90vw;
            height: 70vh;
          }
        }

        /* Adjustments for very small screens, like phones */
        @media (max-width: 480px) {
          .spline-container {
            width: 95vw;
            height: 60vh;
          }
        }
      `}</style>
    </div>
  );
};

export default SplineComponent;

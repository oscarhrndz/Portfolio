"use client";

import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`spline-container ${isVisible ? 'fade-in' : ''}`}>
      <Spline scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode" />

      <style jsx>{`
        .spline-container {
          position: absolute;
          top: 5vh;
          left: 0;
          right: 0;
          width: 100%;
          height: 90%;
          opacity: 0;
          transform: scale(0.9);
          transition: all 2s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 1050px) {
          .spline-container {
            top: 10vh;
            width: 100%;
            height: 80%;
          }
        }

        @media (max-width: 768px) {
          .spline-container {
            top: 12vh;
            width: 100%;
            height: 75%;
          }
        }

        @media (max-width: 500px) {
          .spline-container {
            top: 12vh;
            width: 100%;
            height: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default SplineComponent;

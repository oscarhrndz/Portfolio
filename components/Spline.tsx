// components/SplineComponent.tsx
"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';



const SplineComponent = ({  }) => {
  return (
    <div style={{ position: 'absolute', right: '0vw', left: '50vh', width: '95%', height: '95%', top: '7vh' }}>
      <Spline scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode" />
    </div>
  );
};

export default SplineComponent;

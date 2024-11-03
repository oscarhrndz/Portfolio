// components/SplineComponent.tsx
"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';



const SplineComponent = ({  }) => {
  return (
    <div style={{ position: 'absolute', right: '10vw', width: '100%', height: '100%', top: '0vh' }}>
      <Spline scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode" />
    </div>
  );
};

export default SplineComponent;

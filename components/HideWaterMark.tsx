// components/BlackBox.tsx
"use client";
import React from 'react';

const HideIt = () => {
  return (
    <div
      style={{
        background: 'black',
        height: '6vh',
        width: '15vw',
        position: 'absolute',
        right: '-2.5vw',
        bottom: '-0.5vh',
      }}
    />
  );
};

export default HideIt;

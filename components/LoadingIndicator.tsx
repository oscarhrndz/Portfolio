// app/components/LoadingIndicator.tsx
import React from 'react';
const LoadingIndicator = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#121212',
      display: 'flex',
      flexDirection: 'column', // Stack elements vertically
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      color: 'white',
      fontSize: '24px',
    }}>
      <div>Loading...</div>
      <div className="loading-line" /> {/* Animated line */}
    </div>
  );
};

export default LoadingIndicator;

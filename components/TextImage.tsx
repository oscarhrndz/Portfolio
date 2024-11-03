// components/TextWithImage.tsx

"use client";

import React from 'react';
import Image from 'next/image';

const content = [
  { 
    text: "Here is my projects", 
    img: "/flecha1.svg", 
    style: { 
      height: '30vh', 
      marginRight: '2vw', 
      color: 'white', 
      imgMarginTop: '19.5vh', 
      imgMarginBottom: '0vh', 
      textMarginTop: '0vh', 
      textMarginBottom: '1.5vh'
    }
  },
  { 
    text: "My Social Network", 
    img: "/brack.svg", 
    style: { 
      height: '45vh', 
      marginRight: '0.5vw', 
      color: 'white', 
      imgMarginTop: '22vh', 
      imgMarginBottom: '0vh', 
      textMarginTop: '0vh', 
      textMarginBottom: '5.5vh'
    }
  }
];

const cvDownload = { 
  text: "Download my CV", 
  img: "/equal.svg", 
  style: { 
    height: '25vh', 
    marginRight: '2vw', 
    color: 'white', 
    imgMarginTop: '9vh', 
    imgMarginBottom: '0vh', 
    textMarginTop: '2.5vh', 
    textMarginBottom: '6vh'
  }
};

const TextWithImage: React.FC = () => {
  return (
    <div className="text-with-image extra-margin z-10 flex flex-col items-center justify-center min-h-screen"> {/* Centering flex container */}
      {content.map((item, index) => (
        <div 
          key={index} 
          className="flex items-center mb-2"
          style={{ 
            marginTop: item.style.imgMarginTop, 
            marginBottom: item.style.imgMarginBottom,
            color: item.style.color,
          }}
        >
          {item.img && (
            <Image
              src={item.img}
              alt={item.text} 
              height={parseInt(item.style.height)} 
              width={parseInt(item.style.height)} 
              style={{ marginRight: item.style.marginRight }}
            />
          )}
          <span style={{ marginTop: item.style.textMarginTop, marginBottom: item.style.textMarginBottom }}>
            {item.text}
          </span>
        </div>
      ))}
      
      {/* Render the CV download item separately at the end */}
      <div 
        className="flex items-center mb-2" 
        style={{ 
          marginTop: cvDownload.style.imgMarginTop, 
          marginBottom: cvDownload.style.imgMarginBottom,
          color: cvDownload.style.color,
        }}
      >
        {cvDownload.img && (
          <Image
            src={cvDownload.img}
            alt={cvDownload.text} 
            height={parseInt(cvDownload.style.height)} 
            width={parseInt(cvDownload.style.height)} 
            style={{ marginRight: cvDownload.style.marginRight }}
          />
        )}
        <span style={{ marginTop: cvDownload.style.textMarginTop, marginBottom: cvDownload.style.textMarginBottom }}>
          {cvDownload.text}
        </span>
      </div>
    </div>
  );
};

export default TextWithImage;

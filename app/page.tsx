// app/page.tsx

import React from 'react';
import Navigation from '@/components/Navigation';
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image'; 


export default function Home() {
 
    const content = [
        { 
          text: "Here is my projects", 
          img: "/flecha.svg", 
          style: { 
            height: '30vh', 
            marginLeft: '0.5vw', 
            color: 'white', 
            imgMarginTop: '19vh', 
            imgMarginBottom: '0vh', 
            textMarginTop: '2.5vh', 
            textMarginBottom: '1.5vh',
          }
        },
        { 
          text: "My Social Network", 
          img: "/brack.svg", 
          style: { 
            height: '45vh', 
            marginLeft: '-0.3vw', 
            color: 'white', 
            imgMarginTop: '19vh', 
            imgMarginBottom: '0vh', 
            textMarginTop: '9vh', 
            textMarginBottom: '5.5vh'
          }
        },
        { 
          text: "Download my CV", 
          img: "/equal.svg", 
          style: { 
            height: '25vh', 
            marginLeft: '0.5vw', 
            color: 'white', 
            imgMarginTop: '13vh', 
            imgMarginBottom: '0vh', 
            textMarginTop: '2.5vh', 
            textMarginBottom: '6vh'
          }
        },
    ];

    return (
        <main className="w-screen h-screen flex items-start p-8 relative"
      style={{
        backgroundImage: 'url(/bg/bg_home.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="text-with-image extra-margin z-10 ">
        {content.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center " 
            style={{ 
              marginTop: item.style.imgMarginTop, 
              marginBottom: item.style.imgMarginBottom 
            }}
          >
            <span 
              className="static-text mr-3" 
              style={{ 
                color: item.style.color, 
                fontSize: '14px', 
                marginTop: item.style.textMarginTop, 
                marginBottom: item.style.textMarginBottom 
              }}
            >
              {item.text}
            </span>
            {item.img && (
              <Image
                src={item.img}
                alt="Decorative Shape"
                height={parseInt(item.style.height)} 
                width={parseInt(item.style.height)} 
                style={{ marginLeft: item.style.marginLeft }}
              />
            )}
            
          </div>
        ))}
      </div>

            
                
           
        </main>
    );
}

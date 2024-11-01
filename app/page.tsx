import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import { backIn } from "framer-motion";

export default function Home() {
  const content = [
    { 
      text: "Here is my projects", 
      img: "/flecha1.svg", 
      style: { 
        height: '8vh', 
        marginRight: '1vw', 
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
        height: '26vh', 
        marginRight: '0vw', 
        color: 'white', 
        imgMarginTop: '20vh', 
        imgMarginBottom: '0vh', 
        textMarginTop: '0vh', 
        textMarginBottom: '5.5vh'
      }
    },
    { 
      text: "Download my CV", 
      img: "/equal.svg", 
      style: { 
        height: '20vh', 
        marginRight: '2vw', 
        color: 'white', 
        imgMarginTop: '2.5vh', 
        imgMarginBottom: '0vh', 
        textMarginTop: '0vh', 
        textMarginBottom: '6vh'
      }
    },
  ];

  return (
    <main className="w-screen h-screen flex items-start p-8 relative"
    style={{
      backgroundImage: 'url(/bg/bg_home.jpg)', // Use string directly if in public
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="text-with-image extra-margin z-10 ">
        {content.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center mb-2" 
            style={{ 
              marginTop: item.style.imgMarginTop, 
              marginBottom: item.style.imgMarginBottom 
            }}
          >
            {item.img && (
              <img
                src={item.img}
                alt="Decorative Shape"
                style={{ height: item.style.height, marginRight: item.style.marginRight }}
              />
            )}
            <span 
              className="static-text" 
              style={{ 
                color: item.style.color, 
                fontSize: '14px', 
                marginTop: item.style.textMarginTop, 
                marginBottom: item.style.textMarginBottom 
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <div 
        className="flex flex-col items-center ml-auto z-10" 
        style={{ position: 'relative', top: '1.5vh', marginLeft: 'auto', marginRight: '0vh', height: '100%', width: '100%' }} 
      >
        <Spline
              scene="https://prod.spline.design/CfOZ1jFgB6lKaC4a/scene.splinecode"
              style={{
                marginTop: '2vh',
                height: '100%',
                width: '100%',
                position: 'absolute',
                scale: '1.03',
                left: '10vw'
              }}
            />

<div style={{
        background: 'black',
        height: '6vh',
        width: '15vw',
        position: 'absolute',
        right: '-2vw',
        bottom: '-0.5vh'
      }}
      >

        </div>
        
      </div>
      
    </main>
  );
}

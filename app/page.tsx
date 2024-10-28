import Image from "next/image";

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
        imgMarginTop: '16vh', 
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
        imgMarginTop: '6vh', 
        imgMarginBottom: '0vh', 
        textMarginTop: '0vh', 
        textMarginBottom: '6vh'
      }
    },
  ];

  return (
    <main className="w-screen h-screen flex items-start bg-black p-8">
      <div className="text-with-image extra-margin">
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

      {/* New section for "PORT" and "FOLIO" */}
      <div 
        className="flex flex-col items-center ml-auto" 
        style={{ position: 'relative', top: '1.5vh', marginLeft: 'auto', marginRight: '10vh' }} 
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* "PORT" displayed horizontally */}
          {['F', 'O', 'L', 'I', 'O'].map((letter, idx) => (
            <h1 
              key={idx}
              style={{
                color: 'white',
                fontSize: '10rem',
                marginRight: '3vw',
                whiteSpace: 'nowrap',
                marginTop: '62vh' // Adjust the vertical position
              }}
            >
              {letter}
            </h1>
          ))}
          
          <img src="/mockup2.png" 
          style={{
              width: '65%',
              margin: '0 0vw', // Adjust margin as needed
              lineHeight: '1',
              top: '0vh',
              bottom: '30vh',
              position: "absolute",
              alignSelf: 'center'
          }}/>
            
          {/* "FOLIO" displayed vertically */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {['P', 'O', 'R', 'T'].map((letter, idx) => (
              <span 
                key={idx} 
                style={{
                  color: idx === 3 ? '#553c9a' : 'white', // Make the "T" purple
                  fontSize: '10rem',
                  lineHeight: '1',
                  textAlign: 'center'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

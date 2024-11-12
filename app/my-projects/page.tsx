"use client"; // Add this directive at the top

import { Projects } from '@/constants';
import React, { useState, useLayoutEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import LoadingIndicator from '@/components/LoadingIndicator';

const Page: React.FC = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false); // Track page load state

  useLayoutEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      // Otherwise, add the load event listener
      window.addEventListener("load", handleLoad);
    }

    // Clean up event listener on component unmount
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/bg/bg_my_projects.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingLeft: '2vw',
      }}
    >
      {/* Show loading indicator until page is fully loaded */}
      {!isPageLoaded && (
        <div className="loading">
          <LoadingIndicator /> {/* Use the LoadingIndicator component */}
        </div>
      )}

      {/* Main content with project cards, rendered only after page load */}
      {isPageLoaded && (
        <div className="responsive-cards w-full h-full overflow-y-auto pl-36 translate-y-0">
          <div className="space-bottom pt-14 pb-4">
            <div className="flex flex-col gap-14">
              {Projects.reduce((acc: JSX.Element[], project, index) => {
                if (index % 2 === 0) {
                  acc.push(
                    <div key={index} className="flex justify-center gap-12 mb-10">
                      <ProjectCard 
                        title={project.title}
                        text={project.text}
                        src={project.src}
                        description={project.description}
                        url={project.url}
                        tech={project.tech}
                        figma_image={project.figma_image}
                        mockups={project.mockups}
                        github_link={project.github_link}
                        figma_url={project.figma_url}
                      />
                      {Projects[index + 1] ? (
                        <ProjectCard 
                          title={Projects[index + 1].title}
                          text={Projects[index + 1].text}
                          src={Projects[index + 1].src}
                          description={Projects[index + 1].description}
                          url={Projects[index + 1].url}
                          tech={Projects[index + 1].tech}
                          figma_image={Projects[index + 1].figma_image}
                          mockups={Projects[index + 1].mockups}
                          github_link={Projects[index + 1].github_link}
                          figma_url={Projects[index + 1].figma_url}
                        />
                      ) : (
                        <div style={{ marginLeft: '36vw' }} /> // Add empty div to keep alignment
                      )}
                    </div>
                  );
                }
                return acc;
              }, [])}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* The loading class for the loading screen */
        .loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent dark background */
          color: white;
          font-size: 2rem;
          font-weight: bold;
          z-index: 10; /* Ensure it stays above all other content */
        }

        @media (max-width: 1200px) {
          .responsive-cards{
            padding-left: 20vw;
          }
        }

        @media (max-width: 900px) {
          .responsive-cards{
            padding-left: 30vw;
          }
          .flex {
            flex-direction: column; // Stack cards vertically on small screens
            align-items: center; // Center cards
          }
          .gap-12 {
            margin: 0; // Remove margin for smaller screens
          }
          .mb-10 {
            margin-bottom: 20px; // Adjust margin for smaller screens
          }
          .space-bottom {
            padding-top: 10vh;
            padding-bottom: 20vh;
          }
        }

        @media (max-width: 768px) {
          .responsive-cards{
            padding-left: 0vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;

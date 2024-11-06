"use client";

import { Projects } from '@/constants';
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay, or you could set loading to false after fetching data
    setLoading(false);
  }, []);

  return (
    <div
      className='w-screen h-screen flex items-center justify-center'
      style={{
        backgroundImage: 'url(/bg/bg_my_projects.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingLeft: '2vw'
      }}
    >
      {loading ? (
        // Loading indicator
        <div className="flex items-center justify-center h-full">
          <div className="loader">Loading...</div> {/* Replace this with your LoadingIndicator component */}
        </div>
      ) : (
        <div className='w-full h-full overflow-y-auto'> 
          {/* Inner content container for project cards */}
          <div className='space-bottom pt-14 pb-4'>
            <div className='flex flex-col gap-14'>
              {Projects.reduce((acc: JSX.Element[], project, index) => {
                if (index % 2 === 0) {
                  acc.push(
                    <div key={index} className='flex justify-center gap-12 mb-10'>
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
                        <div style={{ marginLeft: '36vw'}} /> // Add empty div to keep alignment
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
        @media (max-width: 900px) {
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
      `}</style>
    </div>
  );
}

export default Page;

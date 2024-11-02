"use client";

import { Projects } from '@/constants';
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Page: React.FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'
    style={{
      backgroundImage: 'url(/bg/bg_my_projects.jpg)', // Use string directly if in public
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingLeft: '2vw'
    }}>
      {/* Full-width, scrollable container */}
      <div className='w-full h-full overflow-y-auto'> 
        {/* Inner content container for project cards */}
        <div className='mx-auto max-w-[90%]'
        style={{paddingTop: '8vh', paddingBottom: '2.2vh'}}> {/* Adjusted to center content and add padding */}
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
                      <div style={{ marginLeft: '36vw'}} /> // Add an empty div to keep alignment when the number is odd
                    )}
                  </div>
                );
              }
              return acc;
            }, [])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
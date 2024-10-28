"use client";

import { Projects } from '@/constants'; // Import your projects data
import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Import the ProjectCard component

const Page: React.FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black overflow-hidden'>
      <div className='max-w-[100%] h-[100%] overflow-y-auto pt-14 pb-14 scrollbar-hidden'> {/* pt-40 for consistent top spacing */}
        {/* Flex container to hold the project cards */}
        <div className='flex flex-col gap-10'>
          {/* Iterate through Projects in pairs of two */}
          {Projects.reduce((acc: JSX.Element[], project, index) => {
            // Create a new row every two projects
            if (index % 2 === 0) {
              acc.push(
                <div key={index} className='flex justify-center gap-10'>
                  {/* Add the current and next project card */}
                  <ProjectCard 
                    title={project.title}
                    text={project.text}
                    src={project.src}
                    url={project.url}
                  />
                  {Projects[index + 1] && (
                    <ProjectCard 
                      title={Projects[index + 1].title}
                      text={Projects[index + 1].text}
                      src={Projects[index + 1].src}
                      url={Projects[index +1].url}
                    />
                  )}
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </div>
    </div>
  );
}

export default Page;

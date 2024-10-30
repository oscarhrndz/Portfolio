"use client";
import Link from 'next/link';
import React from 'react';

export interface ProjectCardProps {
  title: string;
  text: string;
  src: string;
  url?: string;
  tech: string[]; // Add tech property for technology logos
  figma_image: string;
  mockups: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, src, url, tech }) => {
  return (
    <Link href={`my-projects/${url}`}>
      <div
        className='rounded-lg shadow-md overflow-hidden bg-white w-[36vw] h-[65vh]'
        style={{
          backgroundColor: '#1a1a1a',
        }}
      >
        <img src={src} alt={title} className='w-full h-[69%] object-cover' />
        <div className='p-4 flex items-center justify-between'> {/* Flex container for title and tech logos */}
          <div className='flex-1'> {/* This will take the remaining space */}
            <h3 className='text-xl font-semibold text-white mb-2' >{title}</h3>
            
            <p className='text-gray-400 mb-4' >{text}</p>
          </div>
          <div className='flex gap-2 items-start'> {/* Align tech logos vertically at the top */}
          {tech.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Tech logo" 
                className='h-18 w-8'
                style={{ marginBottom: '13vh'}} // Adjust logo size and use negative margin to move them up
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

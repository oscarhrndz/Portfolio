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
  github_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, src, url, tech }) => {
  return (
    <Link href={`my-projects/${url}`}>
      <div
        className="rounded-lg shadow-md overflow-hidden bg-white w-[36vw] h-[65vh]"
        style={{
          backgroundColor: '#1a1a1a',
        }}
      >
        <img src={src} alt={title} className="w-full h-[69%] object-cover" />
        
        {/* Container for the Title, Logos, and Description */}
        <div className="p-4 ml-1 mr-1">
          <div className="flex items-center justify-between mb-2">
            {/* Title */}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            
            {/* Tech Logos */}
            <div className="flex space-x-2">
              {tech.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt="Tech logo" 
                  className="h-7 w-7" 
                />
              ))}
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-400">{text}</p>
        </div>
      </div>
    </Link>
  );
};


export default ProjectCard;

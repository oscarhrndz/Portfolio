"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

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
  figma_url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, src, url, tech }) => {
  return (
    <Link href={`my-projects/${url}`}>
      <div
        className="rounded-lg shadow-md overflow-hidden bg-white w-[36vw] h-[65vh] flex flex-col"
        style={{
          backgroundColor: '#1a1a1a',
        }}
      >
        {/* Set a fixed height for the image */}
        <Image 
          src={src} 
          alt={title} 
          className="w-full h-[47vh] object-cover" // Fixed height for images
          width={500} // Placeholder width
          height={200} // Set the same height here
        />
        
        {/* Container for the Title, Logos, and Description */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-2">
            {/* Title */}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            
            {/* Tech Logos */}
            <div className="flex space-x-2">
              {tech.map((logo, index) => (
                <Image 
                  key={index} 
                  src={logo} 
                  alt="Tech logo" 
                  className="h-7 w-7" 
                  width={28} // Placeholder width
                  height={28} // Placeholder height
                />
              ))}
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-400 flex-grow">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

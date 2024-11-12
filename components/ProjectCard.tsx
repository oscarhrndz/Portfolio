"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  text: string;
  src: string;
  url?: string;
  tech: string[];
  figma_image?: string;
  mockups: string[];
  description: string;
  github_link: string;
  figma_url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, src, url, tech }) => {
  return (
    <Link href={`my-projects/${url}`}>
      <div
        className="group project-card rounded-lg shadow-md overflow-hidden bg-[#1a1a1a] w-[36vw] h-[65vh] flex flex-col transition-transform duration-300 transform hover:scale-105 hover:bg-[#282828] animate-card"
      >
        {/* Set a fixed height for the image */}
        <Image 
          src={src} 
          alt={title} 
          className="w-full h-[47vh] object-cover" 
          width={1920} 
          height={1080} 
        />
        
        {/* Container for the Title, Logos, and Description */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-2">
            {/* Title */}
            <h3 className="text-xl font-semibold text-white transition-colors duration-300">
              {title}
            </h3>
            
            {/* Tech Logos */}
            <div className="flex space-x-2 tech-logos">
              {tech.map((logo, index) => (
                <Image 
                  key={index} 
                  src={logo} 
                  alt="Tech logo" 
                  className="h-7 w-7" 
                  width={28} 
                  height={28} 
                />
              ))}
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-400 flex-grow overflow-hidden transition-colors duration-300">
            {text}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card {
          animation: fadeInUp 0.6s ease-out;
        }

        @media (max-width: 900px) {
          .project-card {
            width: 60vw;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .project-card {
            width: 80vw;
            margin: 0 auto;
          }
        }

        @media (max-width: 550px) {
          .tech-logos {
            display: none;
          }
        }
      `}</style>
    </Link>
  );
};

export default ProjectCard;

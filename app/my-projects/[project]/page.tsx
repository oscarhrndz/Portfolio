"use client";
import React, { useState, useEffect } from 'react';
import { Projects } from "@/constants";
import { usePathname } from "next/navigation";
import { ProjectCardProps } from '@/components/ProjectCard';

const ProjPage = () => {
  const params = usePathname().split('/')[2];
  const [projectByUrl, setProject] = useState<ProjectCardProps | undefined>(undefined);

  useEffect(() => {
    const project = Projects.find(project => project.url === params);
    setProject(project);
  }, [params]);

  return (
    <div className="h-full flex flex-col justify-start items-center"
      style={{
        backgroundImage: 'url(/bg/bg_project.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}> 
      {projectByUrl ? (
        <div 
          className="w-full overflow-y-scroll mx-20" 
          style={{ maxHeight: 'calc(105vh)' }}
        >
          <div 
            className="relative font-bold text-center mt-8 mx-auto p-2 rounded-lg shadow-md flex"
            style={{
              backgroundColor: '#2d2d2d',
              color: 'white',
              width: '75%',
              maxWidth: '94%',
              margin: '0 auto',
              marginTop: '8vh',
            }}
          >
            <h1 className='pl-3 text-2xl'>{projectByUrl.title}</h1>
            
            {/* GitHub Link with Text and Logo */}
            <a 
              href={projectByUrl.github_link} // Replace with your GitHub URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute right-5 mt-1 flex items-center"
            >
              {/* Text next to GitHub Icon */}
              <span className="static-text mr-3 text-sm mt-1 text-white">Code</span>
              <img 
                src="/github.svg" // Replace with your GitHub logo path
                alt="GitHub"
                className="w-7 h-7" // Adjust size as needed
              />
            </a>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden w-full max-w-[75%] mx-auto" style={{ marginTop: '3vh' }}>
            <img 
              src={projectByUrl.src} 
              alt={projectByUrl.text} 
              className="w-full h-[75vh] object-cover rounded-2xl"
            />
          </div>

          <div className="flex justify-between mt-6 mx-auto max-w-[75%]">
            <div className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md mr-4">
              <h2 className="text-xl font-bold mb-2 ml-3">Description</h2>
              <p className="ml-3">
                {projectByUrl.description}
              </p>
            </div>

            <a 
  href={projectByUrl.figma_url} // Replace with the actual URL
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md block"
>
  <div className="flex items-center mb-2">
    <img 
      src="/figma.png" // Replace with your actual Figma logo path
      alt="Figma Logo"
      className="w-5 h-5 mr-2"
    />
    <h2 className="text-xl font-bold">Figma</h2>
  </div>
  <img 
    src={projectByUrl.figma_image} // Replace with your actual image path
    alt="Figma Design"
    className="w-full h-auto rounded-lg mt-2"
  />
</a>

          </div>

          <div className="mt-6 mx-auto w-full mb-4 max-w-[75%]">
            <div className="text-gray-200 p-1 bg-[#1a1a1a] rounded-lg shadow-md">
              <div className="mt-1 flex flex-wrap gap-1 justify-center">
                {projectByUrl?.tech?.map((logo, index) => (
                  <img 
                    key={index} 
                    src={logo} 
                    alt="Tech logo" 
                    className='h-8 w-8'  
                    style={{ marginBottom: '1vh' }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 w-full mb-20 max-w-[75%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projectByUrl.mockups.map((mockup, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={mockup}
                    alt={`Mockup ${index + 1}`}
                    className="w-full h-auto rounded-lg max-w-[80%] pb-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <span className="text-red-500">Project not found!</span>
      )}
    </div>
  );
};

export default ProjPage;

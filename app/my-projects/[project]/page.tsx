"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Projects } from "@/constants";
import { usePathname } from "next/navigation";
import { ProjectCardProps } from '@/components/ProjectCard';

const ProjPage = () => {
  const params = usePathname().split('/')[2];
  const [projectByUrl, setProject] = useState<ProjectCardProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const project = Projects.find(project => project.url === params);
    setProject(project);
    setLoading(false); // Set loading to false after fetching project
  }, [params]);

  return (
    <div className="h-full flex flex-col justify-start items-center"
      style={{
        backgroundImage: 'url(/bg/bg_project.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      {loading ? (
        <span className="text-gray-200">Loading...</span> // Loading indicator
      ) : projectByUrl ? (
        <div 
          className="w-full overflow-y-scroll mx-20" 
          style={{ maxHeight: 'calc(105vh)' }}
        >
          <header className="relative font-bold text-center mt-8 mx-auto p-2 rounded-lg shadow-md flex"
            style={{
              backgroundColor: '#2d2d2d',
              color: 'white',
              width: '75%',
              maxWidth: '94%',
              margin: '0 auto',
              marginTop: '8vh',
            }}>
            <h1 className='pl-3 text-2xl'>{projectByUrl.title}</h1>
          </header>

          {/* Main Project Image */}
          <div className="relative rounded-2xl overflow-hidden w-full max-w-[75%] mx-auto" style={{ marginTop: '3vh' }}>
            <Image 
              src={projectByUrl.src} 
              alt={projectByUrl.text} 
              className="w-full h-auto max-h-[500px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover rounded-2xl"
              width={1000}
              height={600}
              layout="responsive"
            />
          </div>

          {/* Description and Technology Cards */}
          <div className="flex flex-col lg:flex-row justify-between mt-6 mx-auto max-w-[75%] gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <section className="p-5 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex-grow">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p>{projectByUrl.description}</p>
              </section>

              {/* Technologies Card */}
              <section className="p-4 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200">
                <div className="flex flex-wrap gap-2 justify-center">
                  {projectByUrl.tech.map((logo, index) => (
                    <Image 
                      key={index} 
                      src={logo} 
                      alt={`Technology logo ${index + 1}`} 
                      className='h-7 w-7'
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
              </section>

              {/* GitHub Card */}
              <a 
                href={projectByUrl.github_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex flex-col items-center justify-center"
              >
                <div className="flex items-center">
                  <Image 
                    src="/github.svg" 
                    alt="GitHub repository"
                    className="w-8 h-8 mr-3" 
                    width={32}
                    height={32}
                  />
                  <span className="text-lg font-bold">View Code</span>
                </div>
              </a>
            </div>

            {/* Figma Card */}
            <a 
              href={projectByUrl.figma_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md block h-full md:mt-4 lg:mt-0"
            >
              <div className="flex items-center mb-2">
                <Image 
                  src="/figma.png" 
                  alt="Figma logo"
                  className="w-5 h-5 mr-2"
                  width={20}
                  height={20}
                />
                <h2 className="text-xl font-bold">Figma</h2>
              </div>
              <Image 
                src={projectByUrl.figma_image} 
                alt="Figma design preview"
                className="w-full h-auto rounded-lg mt-2 object-cover"
                width={500}
                height={300}
                layout="responsive"
              />
            </a>
          </div>

          <div className="mt-6 mx-auto w-full mb-20 max-w-[75%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {projectByUrl.mockups.map((mockup, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={mockup}
                    alt={`Mockup ${index + 1}`}
                    className="w-full h-auto rounded-lg max-w-[80%] pb-6"
                    width={300}
                    height={200}
                    layout="responsive"
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

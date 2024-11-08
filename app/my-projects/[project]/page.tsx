"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Projects } from "@/constants";
import { usePathname } from "next/navigation";
import { ProjectCardProps } from '@/components/ProjectCard';

const ProjPage: React.FC = () => {
  const params = usePathname().split('/')[2];
  const [projectByUrl, setProject] = useState<ProjectCardProps | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const project = Projects.find(project => project.url === params);
    setProject(project);
    setLoading(false); // Set loading to false after fetching project
  }, [params]);

  return (
    <div className="project-text h-full flex flex-col justify-start items-center"
      style={{
        backgroundImage: 'url(/bg/bg_project.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      
      {loading ? (
        <span className="text-gray-200">Loading...</span> // Loading indicator
      ) : projectByUrl ? (
        <div 
          className="projects-bottom w-full overflow-y-scroll mx-20 pb-0" 
          style={{ maxHeight: 'calc(100vh)' }}
        >
          <header className="title-bg relative font-bold text-center mt-14 mx-auto p-2 rounded-lg shadow-md flex bg-[#2d2d2d] text-white w-[75%] items-center justify-center">
            <h1 className='project-title text-2xl'>{projectByUrl.title}</h1>
          </header>

          {/* Main Project Image */}
          <div className="project-image relative rounded-2xl overflow-hidden w-[75%] mx-auto mt-5" >
            <Image 
              src={projectByUrl.src} 
              alt={projectByUrl.text} 
              className="w-full h-auto max-h-[500px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] object-cover rounded-2xl"
              width={1920}
              height={1080}
              layout="responsive"
            />
          </div>

          {/* Description and Technology Cards */}
          <div className="cards flex flex-col lg:flex-row justify-between mt-5 mx-auto w-[75%] gap-4">
            <div className="cards2 flex-1 flex flex-col gap-4">
              <section className="description-section p-5 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex-grow">
                <h2 className="description-title text-xl font-bold mb-2">Description</h2>
                <p className='description'>{projectByUrl.description}</p>
              </section>

              {/* Technologies Card */}
              <section className="techn p-4 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200">
                <div className="techno flex flex-wrap gap-2 justify-center">
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
                className="github p-4 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex flex-col items-center justify-center"
              >
                <div className="github2 flex items-center">
                  <Image 
                    src="/github.svg" 
                    alt="GitHub repository"
                    className="github-image w-8 h-8 mr-3" 
                    width={32}
                    height={32}
                  />
                  <span className="github-text text-lg font-bold">View Code</span>
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
                  className="figma-logo w-5 h-5 mr-2"
                  width={20}
                  height={20}
                />
                <h2 className="figma-text text-xl font-bold">Figma</h2>
              </div>
              <Image 
                src={projectByUrl?.figma_image || ""} 
                alt="Figma design preview"
                className="figma-screen w-full h-auto rounded-lg mt-2 object-cover"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>

          <div className="mockups mt-6 mx-auto mb-20 w-[75%]">
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
      <style jsx>{`
        .project-title {
          font-size: 1.5rem; /* Default font size */
        }
        
        @media (max-width: 770px) {
          .title-bg {
            width: 80%;
          }
          .project-image {
          width: 80%;  
          margin-top: 2vh;
          }
          .cards {
            margin-top: 2vh;
            width: 80%;
          }
        }

        @media (max-width: 500px) {
          .project-title {
            font-size: 1rem; /* Smaller font size under 500px */

          }
          .title-bg {
            height: 5vh;
            padding: 0rem;
            margin-top: 2rem;
            width: 90%;
          }
          .project-image {
            margin-top: 2vh;
            width: 90%;
          }
          .cards {
            margin-top: 2vh;
            width: 90%;
            gap: 0.5rem;
          }
          .cards2 {
            gap: 0.5rem;
          }
          .description-section {
            padding-top: 0.5rem;
          }
          .description-title {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }
          .description {
            font-size: 0.9rem;
          }
          .techn {
            padding: 0.7rem;
          }
          .github {
            height: 7vh;
          }
          .github-image {
            height: 10px;
            width: 10px;
          }
          .github-text {
            font-size: 1rem;
          }
          .figma-logo {
            height: 1rem;
            width: 1rem
          }
          .figma-text {
            font-size: 1rem;
          }
          .mockups {
            width: 90%;
          }
          .project-bottom {
          
            
          }
        }
      `}</style>
    </div>
  );
};

export default ProjPage;

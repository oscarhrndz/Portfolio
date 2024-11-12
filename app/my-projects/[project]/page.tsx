"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Projects } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { ProjectCardProps } from '@/components/ProjectCard';
import { AiOutlineLeft } from 'react-icons/ai';

const ProjPage: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook
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
        <div className="loading-spinner flex justify-center items-center">
          <div className="spinner"></div>
          <span className="text-gray-200">Loading...</span>
        </div>
      ) : projectByUrl ? (
        <div 
          className="projects-bottom w-full overflow-y-scroll pb-0" 
          style={{ maxHeight: 'calc(100vh)' }}
        >
          <header className="title-bg relative font-bold text-center mt-14 mx-auto p-2 rounded-lg shadow-md flex bg-[#2d2d2d] text-white w-[75%] items-center justify-center slide-in">
            <h1 className='project-title text-2xl'>{projectByUrl.title}</h1>
          </header>

          {/* Back Button with Delay */}
          <button 
            onClick={() => router.back()} 
            className="button-back absolute left-5 md:left-5 lg:left-11 top-7 sm:top-14 z-0 text-white bg-[#282828] rounded-lg md:bg-inherit hover:text-gray-200 p-2 flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 slide-in"
            aria-label="Go back to the previous page"
            style={{ animationDelay: '1s' }} // Added delay
          >
            <AiOutlineLeft className="button-texture bg-none md:bg-white text-white hover:text-white text-[20px] md:text-[14px] lg:text-[15px]" />
            <span className="text-lg">Back</span>
          </button>

          {/* Main Project Image */}
          <div className="project-image relative rounded-2xl overflow-hidden w-[75%] mx-auto mt-5 slide-in">
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
              <section className="description-section p-5 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex-grow slide-in">
                <h2 className="description-title text-xl font-bold mb-2">Description</h2>
                <p className='description'>{projectByUrl.description}</p>
              </section>

              {/* Technologies Card */}
              <section className="techn p-4 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 slide-in">
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
                className="group github p-3 bg-[#1a1a1a] rounded-lg shadow-md text-gray-200 flex flex-col items-center justify-center transition-colors duration-300 hover:bg-[#fbfcfc] hover:text-black slide-in"
              >
                <div className="github2 flex items-center">
                  <Image 
                    src="/github-mark-white.svg" 
                    alt="GitHub repository"
                    className="github-image w-9 h-9 mr-3 transition-colors duration-300 group-hover:filter group-hover:invert" 
                    width={132}
                    height={132}
                  />
                  <span className="github-text text-lg font-bold group-hover:text-black transition-colors duration-0">
                    View Code
                  </span>
                </div>
              </a>
            </div>

            {/* Figma Card */}
            <a 
              href={projectByUrl.figma_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md block h-full md:mt-0 lg:mt-0 hover:bg-[#fbfcfc] hover:text-black transition-all duration-300 slide-in"
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

          <div className="mockups mt-10 mx-auto mb-20 w-[75%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {projectByUrl.mockups.map((mockup, index) => (
                <div key={index} className="flex justify-center slide-in">
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

        /* Loading spinner */
        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        .spinner {
          border: 4px solid #f3f3f3; /* Light gray background */
          border-top: 4px solid #3498db; /* Blue spinner */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Slide-in animation */
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in {
          opacity: 0;
          transform: translateX(-100%);
          animation: slideInLeft 1s ease-out forwards;
        }

        .slide-in:nth-child(1) {
          animation-delay: 0s; /* No delay for the first element */
        }

        .slide-in:nth-child(2) {
          animation-delay: 0.3s; /* Delay for the second element */
        }

        .slide-in:nth-child(3) {
          animation-delay: 0.6s; /* Delay for the third element */
        }

        .slide-in:nth-child(4) {
          animation-delay: 0.9s; /* Delay for the fourth element */
        }

        .slide-in:nth-child(5) {
          animation-delay: 1.2s; /* Delay for the fifth element */
        }

        /* Responsive styles */
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
        }
      `}</style>
    </div>
  );
};

export default ProjPage;

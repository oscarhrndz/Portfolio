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
    <div className="min-h-screen bg-black flex flex-col justify-start items-center"> 
      {projectByUrl ? (
        <div 
          className="w-full"
          style={{ top: '8vh', overflowY: 'auto', maxHeight: 'calc(100vh - 8vh)' }} // Added overflowY and maxHeight
        >
          <div className="relative rounded-2xl overflow-hidden w-full max-w-[75%] mx-auto" style={{ marginTop: '8vh' }}>
            <img 
              src={projectByUrl.src} 
              alt={projectByUrl.text} 
              className="w-full h-[75vh] object-cover rounded-2xl"
            />
          </div>
          <h1
            className="text-2xl font-bold text-center mt-4 mx-auto p-2 rounded-lg shadow-md"
            style={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              width: '75%', // Full width
              maxWidth: '94%',
              margin: '0 auto',
              marginTop: '1.2%'
            }}
          >
            {projectByUrl.title}
          </h1>

          {/* Flexbox Container for Additional Content Below the Title */}
          <div className="flex justify-between mt-6 mx-auto max-w-[75%]">
            <div className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md mr-4">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>
                {projectByUrl.description}
              </p>
            </div>

            {/* Updated Figma Section with Logo and Image */}
            <div className="flex-1 text-gray-200 p-4 bg-[#1a1a1a] rounded-lg shadow-md">
              <div className="flex items-center mb-2"> {/* Flex container for logo and title */}
                <img 
                  src="/figma.png" // Replace with your actual Figma logo path
                  alt="Figma Logo"
                  className="w-5 h-5 mr-2" // Adjust size as needed
                />
                <h2 className="text-xl font-bold">Figma</h2>
              </div>
              <img 
                src={projectByUrl.figma_image} // Replace with your actual image path
                alt="Figma Design"
                className="w-full h-auto rounded-lg mt-2" // Adjust as necessary for size
              />
            </div>
          </div>

          {/* Smaller Card Below Figma and Description */}
          <div className="mt-6 mx-auto w-full max-w-[75%]">
  <div className="text-gray-200 p-1 bg-[#1a1a1a] rounded-lg shadow-md"> {/* Further reduced padding */}
    {/* Tech Symbols Section */}
    <div className="mt-1 flex flex-wrap gap-1 justify-center"> {/* Reduced margin-top and gap */}
      {projectByUrl?.tech?.map((logo, index) => (
        <img 
          key={index} 
          src={logo} 
          alt="Tech logo" 
          className='h-8 w-8'  
          style={{ marginBottom: '1vh' }} // Further reduced margin-bottom to 1vh
        />
      ))}
    </div>
  </div>
</div>




          
          {/* Images Section */}
<div className="mt-6 w-full max-w-[75%] mx-auto"> {/* Added mx-auto for centering */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Mapping through mockup images */}
    {projectByUrl.mockups.map((mockup, index) => (
      <div key={index} className="flex justify-center"> {/* Centering each image */}
        <img
          src={mockup} // Assuming mockup contains the image path
          alt={`Mockup ${index + 1}`}
          className="w-full h-auto rounded-lg max-w-[90%]" // Set a max-width for images
        />
      </div>
    ))}
  </div>
</div>


          {/* Add more sections as needed */}
        </div>
      ) : (
        <span className="text-red-500">Project not found!</span>
      )}
    </div>
  );
};

export default ProjPage;

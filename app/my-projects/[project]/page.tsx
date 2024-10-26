"use client";
import React, { useState } from 'react';
import { Projects } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ProjectCardProps } from '@/components/ProjectCard';
const ProjPage = () => {
  const params = usePathname().split('/')[2]
  const [projectByUrl, setProject] = useState<ProjectCardProps | undefined>(undefined);

  useEffect(() => {
      const project = Projects.find(project => project.url === params);
      setProject(project)
  }, [])

  
  return (
    <div className="p-4 bg-black">
      {projectByUrl ? (
        <div>
          <div 
            style={{ 
              marginInline: 'var(--margin-x, 8rem)', // Left and right margins
              marginTop: 'var(--margin-y, 1.5rem)' // Top margin
            }} 
          >
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[1140px] mx-auto">
              <img 
                src={projectByUrl.src} 
                alt={projectByUrl.text} 
                className="w-full h-[590px] object-cover rounded-2xl"
              />
            </div>
            {/* Title directly under the image with a white background */}
            <h1 className="text-2xl font-bold text-center mt-4 mx-auto bg-white p-2 rounded-lg shadow-md" style={{ marginInline: 'var(--margin-x, 8rem)' }}>
              {projectByUrl.title}
            </h1>
          </div>
        </div>
      ) : (
        <span className="text-red-500">Project not found!</span>
      )}
    </div>
);







};

export default ProjPage;
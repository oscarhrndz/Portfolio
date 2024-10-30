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
          className="w-full" // Aumenta el margen a 3rem (48px) a los lados
          style={{ top: '8vh' }} // Modifica el margen superior aquí
        >
          <div className="relative rounded-2xl overflow-hidden w-full max-w-[75%] mx-auto "
          style={{ marginTop: '8vh' }}>
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
              width: '75%', // Mantiene el título a ancho completo
              maxWidth: '94%', // Asegúrate de que no exceda el ancho deseado
              margin: '0 auto', // Centra el título
              border: '1px solid white',
              marginTop: '0.9%'
            }}
          >
            {projectByUrl.title}
          </h1>
        </div>
      ) : (
        <span className="text-red-500">Project not found!</span>
      )}
    </div>
  );
};

export default ProjPage;

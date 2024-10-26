`use client`
import Link from 'next/link';
import React from 'react';

export  interface ProjectCardProps {
  title: string;
  text: string;
  src: string;
  url?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, src, url }) => {
  return (
    <Link href={`my-projects/${url}`}><div className='border rounded-lg shadow-md overflow-hidden bg-black w-[550px] h-[520px]'> {/* Increased width and height */}
      <img src={src} alt={title} className='w-full h-[63%] object-cover' /> {/* Adjust image height */}
      <div className='p-4'>
        <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3> {/* Make title white */}
        <p className='text-gray-400 mb-4'>{text}</p>
      </div>
    </div></Link>
  );
};

export default ProjectCard;

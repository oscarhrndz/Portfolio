"use client";
import { CV } from '@/constants';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Transition from './Transition';

const Cvs = () => {
    const [isRouting, setIsRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]); // Add path as a dependency here

    return (
        <div
            className="fixed z-[50] justify-center items-center gap-2 rounded-lg border border-white overflow-hidden w-[5.1vw] h-[8.6vh] bg-[#1a1a1a] left-[3.6vw] bottom-[45.5vh] p-[0.6rem]">
            {isRouting && <Transition />}
            {CV.length > 0 ? (
                CV.map((cv) => (
                    <a
                        key={cv.name}
                        href={cv.href}
                        download
                        className="text-white"
                        style={{
                            fontSize: '15px',
                            display: 'block',
                            textAlign: 'center',
                            margin: '0',
                            padding: '0.5rem 0',
                            lineHeight: '1.5',
                            height: '2.5rem', // Fixed height for each link
                            transition: 'opacity 0.3s ease', // Smooth transition for opacity
                        }}
                    >
                        {cv.name} {/* Display the CV name dynamically */}
                    </a>
                ))
            ) : (
                <span className="text-white" style={{ lineHeight: '1.5', height: '2.5rem', display: 'flex', alignItems: 'center' }}>
                    Loading...
                </span>
            )}

<style jsx>{`
                /* Styles for small screens */
                @media (max-width: 768px) {
                    div {
                        width: 10%; /* Full width for mobile */
                        height: 8%; /* Adjust height for mobile */
                        top: 2%; /* Position at the bottom */
                        left: 2%; /* Align to the left */
                        flex-direction: row; /* Change to horizontal layout */
                        justify-content: space-around; /* Space links evenly */

                        background-color: #1a1a1a; /* Change background for mobile */
                    }

                    .mb-6 {
                        margin-bottom: 0; /* Remove vertical margin for mobile */
                        margin-right: 1rem; /* Add margin for horizontal layout */
                    }
                }
            `}</style>
        </div>
    );
};

export default Cvs;

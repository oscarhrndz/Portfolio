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
            className="fixed z-[50] justify-center items-center gap-2 rounded-lg border border-white"
            style={{
                width: '5.1vw',
                maxWidth: '6rem',
                padding: '0.6rem',
                bottom: '8vh',
                left: '3.6vw',
                backgroundColor: '#1a1a1a',
                height: '8.6vh', // Fixed height to maintain position
                minHeight: '8.6vh',
                overflow: 'hidden',
            }}
        >
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
        </div>
    );
};

export default Cvs;

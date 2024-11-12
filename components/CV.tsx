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
    }, [isRouting, path]);

    return (
        <div className="fixed z-[50] left-[3.6vw] bottom-[44.5vh]">
            {isRouting && <Transition />}
            {CV.length > 0 ? (
                CV.map((cv) => (
                    <a
                        key={cv.name}
                        href={cv.href}
                        download
                        className="cv-button font-change text-white flex items-center justify-center rounded-lg border border-[#dcb800] bg-[#1a1a1a] transition-all duration-300 hover:bg-[#303030] hover:text-[#927b00] hover:font-bold"
                    >
                        <span className="text-center md:text-sm text-[10px]">{cv.name}</span>
                    </a>
                ))
            ) : (
                <div className="flex items-center justify-center w-full h-full text-white">
                    Loading...
                </div>
            )}

            <style jsx>{`
                .cv-button {
                    width: 5.1vw;
                    height: 8.6vh;
                    padding: 0.6rem 0;
                    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
                }

                .cv-button:hover {
                    transform: scale(1.25); /* Apply a larger hover scale */
                    background-color: #303030; /* Color transition */
                    color: #dcb800;
                }
                
                @media (max-width: 768px) {
                    .cv-button {
                        width: 15vw;
                        height: 5.5vh;
                        padding: 0.3rem 0;
                        font-size: 0.8rem;
                    }
                    div {
                        width: 5vw;
                        height: 4vh;
                        top: 2.5%;
                        left: 3%;
                        flex-direction: row;
                        justify-content: space-around;
                        max-height: 9vh;
                        max-width: 10vw;
                        min-height: 4vh;
                        background-color: #1a1a1a;
                    }
                }
            `}</style>
        </div>
    );
};

export default Cvs;

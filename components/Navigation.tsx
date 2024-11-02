"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Transition from './Transition';

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]); // Keep path and prevPath in the dependency array

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]); // Add path as a dependency here

    return (
        <div
            className="fixed z-[50] rounded-lg flex flex-col justify-center items-center "
            style={{
                width: '5.1vw',     // Responsive width
                height: '32vh',    // Responsive height
                top: '8vh',        // Top position responsive to screen height
                left: '3.6vw',       // Left position responsive to screen width
                maxWidth: '6rem',  // Set a max-width for larger screens
                maxHeight: '15rem', // Set a max-height for larger screens
                backgroundColor: "#1a1a1a",
                paddingTop: '3vh'
            }}
        >
            {isRouting && <Transition />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="mb-[1.5rem]" // Space between items
                >
                    <nav.icon
                        className={`w-[1.5rem] h-[1.5rem] ${
                            path === nav.link ? "text-purple-800" : "text-white"
                        }`}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Navigation;

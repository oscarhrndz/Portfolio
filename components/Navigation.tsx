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
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting]);

    return (
        <div 
            style={{ top: "40px", left: "50px", backgroundColor: "#1a1a1a" }} // Set the background color
            className='absolute z-[50] w-[70px] h-[200px] rounded-lg flex flex-col justify-center items-center border border-white'>
            {isRouting && <Transition />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className='mb-4' // Increased margin for more space between icons
                >
                    <nav.icon className={`w-[24px] h-[24px] ${
                        path === nav.link ? "text-purple-800" : "text-white"
                    }`} />
                </Link>
            ))}
        </div>
    );
};

export default Navigation;

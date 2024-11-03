// app/page.tsx
"use client"
import React from 'react';
import Navigation from '@/components/Navigation';
import Spline from '@splinetool/react-spline/next';
import Image from 'next/image'; 


export default function Home() {
 

    return (
        <main className="w-screen h-screen flex items-start p-8 relative"
            style={{
                backgroundImage: 'url(/bg/bg_home.jpg)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
                
           
        </main>
    );
}

"use client"
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navigation = () => {
    
    const path = usePathname();
    

    return (
        <div
            className="fixed z-[50] rounded-lg flex flex-col justify-center items-center"
            style={{
                width: '5.1vw',
                height: '32vh',
                bottom: '60vh',
                left: '3.6vw',
                maxWidth: '6rem',
                maxHeight: '15rem',
                backgroundColor: "#1a1a1a",
                paddingTop: '3vh'
            }}
        >
            
            
                {NavLinks.map((nav) => (
                    <Link
                        key={nav.name}
                        href={nav.link}
                        className="mb-[1.5rem]"
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




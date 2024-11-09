"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const path = usePathname();

    return (
        <div
            className="fixed z-[50] rounded-lg flex flex-col py-2 justify-center items-center bg-gray-800 md:bg-[#1a1a1a] md:bottom-[60vh] md:left-[3.6vw] md:w-[5.1vw] md:h-[32vh] max-h-[15rem] p-4 md:p-[3vh] transition-all duration-300"
        >
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="mb-3 mt-3"
                >
                    <nav.icon
                        className={`w-6 h-6 transition-transform duration-300 ${
                            path === nav.link
                                ? "text-purple-800 scale-125"  // Apply purple color and enlarge if active
                                : "text-white hover:scale-125" // Regular size with hover scale for others
                        }`}
                    />
                </Link>
            ))}

            <style jsx>{`
                /* Styles for small screens */
                @media (max-width: 768px) {
                    div {
                        width: 100%;
                        height: 6vh;
                        bottom: 0;
                        left: 0;
                        flex-direction: row;
                        justify-content: space-around;
                        padding: 0;
                        background-color: #1a1a1a;
                        border-radius: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navigation;

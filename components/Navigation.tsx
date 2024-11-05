"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navigation = () => {
    const path = usePathname();

    return (
        <div
            className="fixed z-[50] rounded-lg flex flex-col justify-center items-center bg-gray-800 md:bg-[#1a1a1a] md:bottom-[60vh] md:left-[3.6vw] md:w-[5.1vw] md:h-[32vh] max-h-[15rem] p-4 md:p-[3vh] transition-all duration-300"
        >
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="mb-3 mt-3" // Default margin for larger screens
                >
                    <nav.icon
                        className={`w-6 h-6 ${
                            path === nav.link ? "text-purple-800" : "text-white"
                        }`}
                    />
                </Link>
            ))}

            <style jsx>{`
                /* Styles for small screens */
                @media (max-width: 768px) {
                    div {
                        width: 100%; /* Full width for mobile */
                        height: 6vh; /* Adjust height for mobile */
                        bottom: -10px; /* Position at the bottom */
                        left: 0; /* Align to the left */
                        flex-direction: row; /* Change to horizontal layout */
                        justify-content: space-around; /* Space links evenly */
                        padding: 0; /* Remove padding for mobile */
                        background-color: #1a1a1a; /* Change background for mobile */
                        border-radius: 0; /* Remove rounded corners for mobile */
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

export default Navigation;

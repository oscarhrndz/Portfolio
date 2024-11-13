import { title } from "process";
import { RxHome, RxPerson, RxDashboard, RxClipboard, RxPinBottom } from "react-icons/rx";

export const PoweredLogos = [
  {
    name: 'react',
    src: '/powered/react.svg',

  },
  {
    name: 'next.js',
    src: '/powered/nextjs.svg',

  },
  {
    name: 'typescript',
    src: '/powered/typescript.svg',

  },
  {
    name: 'javascript',
    src: '/powered/javascript.svg',

  },
  {
    name: 'tailwind css',
    src: '/powered/tailwind-css.svg',

  },
]

export const SkillData = [
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "Kotlin",
    Image: "/kotlin.png",
    width: 80,
    height: 80,
  },
  {
    name: "Dart",
    Image: "/dart.png",
    width: 65,
    height: 65,
  },
  {
    name: "Flutter",
    Image: "/flutter.png",
    width: 80,
    height: 80,
  },
  {
    name: "React Native",
    Image: "/react_native.png",
    width: 80,
    height: 80,
  },
  {
    name: "MySQL",
    Image: "/mysql.png",
    width: 80,
    height: 80,
  },

  {
    name: "Firebase",
    Image: "/firebase.png",
    width: 80,
    height: 80,
  },
  {
    name: "Android",
    Image: "/android.png",
    width: 80,
    height: 80,
  },
  {
    name: "IOS",
    Image: "/apple.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Figma",
    Image: "/figma.png",
    width: 80,
    height: 80,
  },
  {
    name: "Git",
    Image: "/git.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Github",
    src: "/gatuli.svg",
    link: "https://github.com/oscarhrndz",
  },
  {
    name: "Telegram",
    src: "/telegram.svg",
    link: "https://t.me/oscarhrndez",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/oscarhrndez/",
  },

  {
    name: "Email",
    src: "/email-envelope.svg",
    link: "mailto:your-oscarhernandezsoler@gmail.com?subject=Subject%20Here&body=Body%20Here",
  },
];
export const Projects = [
  {
    id: 1,
    title: "Supermarket Online Shop",
    text: "A simple but efective Supermarket Application for ordering differents products.",
    src: "/supermarket/bg.png",
    url: "supermarket-shop-online",
    description: "Supermarket Online Shop is an application for Supermarket Users. In this application, users can check the products and their prices. Moreover, they can check their location and similar products",
    tech: ['/java.png','/firebase.png','/android.png'],
    figma_image: '/supermarket/figma.png',
    figma_url: 'https://www.figma.com/design/rGAsTki7ZUnGgSNEBKQyJY/Portfolio-Figma?node-id=0-1',
    mockups:["/supermarket/mockup1.png","/supermarket/mockup2.png","/supermarket/mockup3.png"],
    github_link: 'https://github.com/oscarhrndz/Supermarket_Online_Shop'
  },
  {
    id: 2,
    title: "Rental Car",
    text: "Modern and minimalist Renting Car Application. Differents cars, users and places can be chosen.",
    src: "/rentalcar/showcase.png",
    url: "rental-car",
    description: "The Rental Car application is designed to simplify the process of renting cars. Users can easily browse and compare various car models based on important details such as price, mileage, features, and specifications. Additionally, the application provides information about the car's owner and its location.",
    tech: ['/dart.png','/flutter.png','/firebase.png', '/android.png', '/apple.png'],
    figma_image: '/rentalcar/figma.png',
    figma_url: 'https://www.figma.com/design/rGAsTki7ZUnGgSNEBKQyJY/Portfolio-Figma?node-id=16-2',
    mockups:["/rentalcar/mockup1.png","/rentalcar/mockup2.png","/rentalcar/mockup3.png","/rentalcar/mockup4.png"],
    github_link: 'https://github.com/oscarhrndz/rental_car'
  },

  
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    title: "Home",
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    title: "My skills",
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    title: "My Projects",
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    title: "Contact me",
    link: "/contact-me",
  },
  {
    name: "CV",
    icon: RxPinBottom,
    link: "/",
    title: "Download my CV",
    href: "/CV_Oscar_Hernandez.pdf"
  },
];

export const CV = [
  {
    name: "CV",
    icon: RxHome,
    link: "/",
    href: "/CV_Oscar_Hernandez.pdf"
  },
  
];
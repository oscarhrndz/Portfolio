import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

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
    src: "/github.svg",
    link: "https://github.com/oscarhrndz/Portfolio",
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
    text: "Explore a vibrant supermarket designed with bold, contrasting colors for a fresh and dynamic shopping experience.",
    src: "/supermarket/bg.png",
    url: "mock",
    description: "",
    tech: ['/java.png','/firebase.png','/android.png'],
    figma_image: '/supermarket/figma.png',
    figma_url: 'https://www.figma.com/design/rGAsTki7ZUnGgSNEBKQyJY/Untitled?node-id=0-1&node-type=canvas&t=P8wTaWA7MWxdpSwF-0',
    mockups:["/supermarket/mockup1.png","/supermarket/mockup2.png","/supermarket/mockup3.png"],
    github_link: 'https://github.com/oscarhrndz/Supermarket_Online_Shop'
  },
  {
    id: 2,
    title: "Rental Car",
    text: "Discover a seamless rental car experience with a modern and minimalist design. My fleet blends style and functionality, offering top-tier vehicles that cater to your journey with simplicity and elegance.",
    src: "/rentalcar/showcase.png",
    url: "rental_car",
    description: "",
    tech: ['/dart.png','/flutter.png','/firebase.png', '/android.png', '/apple.png'],
    figma_image: '/figma1.png',
    figma_url: 'https://www.figma.com/design/rGAsTki7ZUnGgSNEBKQyJY/Untitled?node-id=0-1&node-type=canvas&t=P8wTaWA7MWxdpSwF-0',
    mockups:["/rentalcar/mockup1.png","/rentalcar/mockup2.png","/rentalcar/mockup3.png","/rentalcar/mockup4.png"],
    github_link: 'https://github.com/oscarhrndz/rental_car'
  },
  
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
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
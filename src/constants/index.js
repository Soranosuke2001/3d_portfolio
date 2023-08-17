import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  networking,
  game,
  nextjs,
  prisma,
  python,
  bcit,
  keg,
  studying
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Networking",
    icon: networking,
  },
  {
    title: "Pygame Developer",
    icon: game,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    id: 1,
    title: "Next JS",
    icon: nextjs
  },
  {
    id: 2,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 5,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 6,
    name: "Three JS",
    icon: threejs,
  },
  {
    id: 7,
    name: "Python",
    icon: python,
  },
  {
    id: 8,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 9,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 11,
    name: "Prisma",
    icon: prisma,
  },
  {
    id: 12,
    name: "git",
    icon: git,
  },
  {
    id: 13,
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "CIT Student",
    company_name: "BCIT",
    icon: bcit,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Experienced working with clients and teammates to troubleshoot the BCIT Student Association's website hosted on WordPress",
      "Studied web development fundamentals including, HTML, CSS and JavaScript",
      "Designed and built a relational database to manage students, student grades, enrolled classes and assigned instructors",
      "Developed a spending tracker application using HTML, CSS, Bootstrap to build the user interface, and Python Flask to manage all APIs",
      "Utilized Git to manage and track ",
      "Studied and utilized different project management methodologies including, Agile, Scrum, and Waterfall methodology",
      "Constructed a networking router which includes DHCP, NAT, DNS and packet filtering routers along side 4 nodes",
      "Built a FlappyBird clone using Pygame and incorporated the OOP concept"
    ],
  },
  {
    title: "Self Studying",
    company_name: "N/A",
    icon: studying,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Currently developing a reddit clone, built using Next.js, TypeScript, Tailwind CSS, and Prisma",
      "Built a Netflix clone using, Next.js with JWT to securely manage login states and user credentials",
      "Built a basic Twitter clone using, the T3 stack and Prisma",
      "Built a CoffeeShop app using, Nextjs to scan the user's location and to provide nearby Coffee shops",
    ],
  },
  {
    title: "Kitchen Cook",
    company_name: "The Keg",
    icon: keg,
    iconBg: "#383E56",
    date: "June 2022 - August 2023",
    points: [
      "Training new kitchen cooks on various stations which included micro managing each individual for efficient workflow",
      "Calculated, documented and distributed the tip pool for all kitchen staff each week using Excel",
      "Hosted kitchen staff meetings to discuss any problems or issues faced in previous weeks or months",
      "Preparing and setting up kitchen before opening, which included food quality checks",
    ],
  },
  {
    title: "ECET Student",
    company_name: "BCIT",
    icon: bcit,
    iconBg: "#383E56",
    date: "Sept 2019 - Feb 2021",
    points: [
      "Studied the basic fundamentals to C programming, Python and VHDL",
      "Configured a microcontroller to build a small vehicle controlled via bluetooth",
      "Utilized AutoCAD to design and build a power supply",
      "Analyzed and design circuit diagrams and brainstormed the expected outcome then physically tested the circuit",
      "The program was not completed since I found my passion for coding more than designing circuits"
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };

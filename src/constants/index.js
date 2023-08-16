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
    title: "Next JS",
    icon: nextjs
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "git",
    icon: git,
  },
  {
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
